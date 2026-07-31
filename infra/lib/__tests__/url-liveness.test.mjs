import assert from "node:assert/strict";
import http from "node:http";
import { test } from "node:test";
import {
  classifyUrl,
  checkUrlsScheduled,
  mergeLivenessState,
  isDeadConfirmed,
  STATE
} from "../url-liveness.mjs";

// Real regression test for a gap a fresh review caught in a later round:
// mergeLivenessState is what's actually exercised here, but the property
// under test -- that triggering a full-corpus run more often (source-liveness-
// schedule.yml's push trigger, added once regeneration was actively merging
// records) can't fast-forward a URL to dead_confirmed within hours -- is
// what motivates it.

// All fixtures are local -- no live network calls in this suite.
function startFixtureServer(handler) {
  return new Promise((resolve) => {
    const server = http.createServer(handler);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({ server, baseUrl: `http://127.0.0.1:${address.port}` });
    });
  });
}

function closeServer(server) {
  return new Promise((resolve) => server.close(resolve));
}

// Fast defaults for tests: short timeout, no artificial backoff base delay
// unless a test is specifically exercising Retry-After/backoff timing.
const FAST_OPTS = { backoffBaseMs: 5, timeoutMs: 2000 };

test("T1: 404 on HEAD, 200 on GET -> live (the NIST case)", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    if (req.method === "HEAD") {
      res.writeHead(404);
      res.end();
    } else {
      res.writeHead(200);
      res.end("ok");
    }
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.LIVE);
  } finally {
    await closeServer(server);
  }
});

test("T2: 404 on HEAD, 404 on GET -> dead (the HHS case)", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    res.writeHead(404);
    res.end();
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.DEAD);
  } finally {
    await closeServer(server);
  }
});

test("T3: 403 on all methods -> live", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    res.writeHead(403);
    res.end();
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.LIVE);
  } finally {
    await closeServer(server);
  }
});

test("T4: 418 -> live", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    res.writeHead(418);
    res.end();
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.LIVE);
    assert.equal(result.status, 418);
  } finally {
    await closeServer(server);
  }
});

test("T5: 429 twice with Retry-After, then 200 -> live, <= 3 attempts", async () => {
  let attempts = 0;
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    attempts += 1;
    if (attempts <= 2) {
      res.writeHead(429, { "retry-after": "0" });
      res.end();
    } else {
      res.writeHead(200);
      res.end("ok");
    }
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.LIVE);
    assert.ok(attempts <= 3, `expected <= 3 attempts, got ${attempts}`);
  } finally {
    await closeServer(server);
  }
});

test("T6: 429 on every attempt -> unreachable", async () => {
  let attempts = 0;
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    attempts += 1;
    res.writeHead(429, { "retry-after": "0" });
    res.end();
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.UNREACHABLE);
    assert.equal(result.status, 429);
  } finally {
    await closeServer(server);
  }
});

test("T7: 405 on HEAD, 405 on GET -> unreachable", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    res.writeHead(405);
    res.end();
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.UNREACHABLE);
    assert.equal(result.status, 405);
  } finally {
    await closeServer(server);
  }
});

test("T8: never responds -> unreachable after the class timeout, not sooner", async () => {
  const { server, baseUrl } = await startFixtureServer(() => {
    // Never call res.end() -- simulate a hung connection.
  });
  try {
    const timeoutMs = 300;
    const start = Date.now();
    const result = await classifyUrl(`${baseUrl}/doc`, { ...FAST_OPTS, timeoutMs });
    const elapsed = Date.now() - start;
    assert.equal(result.state, STATE.UNREACHABLE);
    assert.ok(elapsed >= timeoutMs, `expected to wait at least ${timeoutMs}ms, took ${elapsed}ms`);
    assert.ok(elapsed < timeoutMs + 2000, `timeout handling took far longer than expected: ${elapsed}ms`);
  } finally {
    await closeServer(server);
  }
});

test("T9: 410 -> dead immediately, no multi-run requirement", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    res.writeHead(410);
    res.end();
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.DEAD);
    assert.equal(result.reason, "gone");
  } finally {
    await closeServer(server);
  }
});

test("T10: 301 -> 200 -> live, redirect followed", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    if (req.url === "/old") {
      res.writeHead(301, { location: "/new" });
      res.end();
    } else {
      res.writeHead(200);
      res.end("ok");
    }
  });
  try {
    const result = await classifyUrl(`${baseUrl}/old`, FAST_OPTS);
    assert.equal(result.state, STATE.LIVE);
  } finally {
    await closeServer(server);
  }
});

test("T11: 301 -> 404 (HEAD and GET) -> dead", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    if (req.url === "/old") {
      res.writeHead(301, { location: "/new" });
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  });
  try {
    const result = await classifyUrl(`${baseUrl}/old`, FAST_OPTS);
    assert.equal(result.state, STATE.DEAD);
  } finally {
    await closeServer(server);
  }
});

test("T12: 500 -> unreachable", async () => {
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    res.writeHead(500);
    res.end();
  });
  try {
    const result = await classifyUrl(`${baseUrl}/doc`, FAST_OPTS);
    assert.equal(result.state, STATE.UNREACHABLE);
    assert.equal(result.status, 500);
  } finally {
    await closeServer(server);
  }
});

test("T13: 8 URLs on one host -> never more than 2 in flight concurrently", async () => {
  let inFlight = 0;
  let peak = 0;
  const { server, baseUrl } = await startFixtureServer((req, res) => {
    inFlight += 1;
    peak = Math.max(peak, inFlight);
    setTimeout(() => {
      inFlight -= 1;
      res.writeHead(200);
      res.end("ok");
    }, 60);
  });
  try {
    const urls = Array.from({ length: 8 }, (_, i) => `${baseUrl}/doc-${i}`);
    const results = await checkUrlsScheduled(urls, {
      ...FAST_OPTS,
      perHostConcurrency: 2,
      perHostMinDelayMs: 10,
      globalConcurrency: 6
    });
    assert.equal(results.size, 8);
    assert.ok(peak <= 2, `expected peak concurrency <= 2, observed ${peak}`);
  } finally {
    await closeServer(server);
  }
});

test("T14: URL dead in runs 1 and 2, live in run 3 -> counter resets to 0, not dead", () => {
  const t0 = "2026-08-01T00:00:00.000Z";
  const t1 = "2026-08-02T00:00:00.000Z";
  const t2 = "2026-08-03T00:00:00.000Z";

  const run1 = mergeLivenessState(null, { state: STATE.DEAD, status: 404 }, t0);
  assert.equal(run1.consecutive_dead_runs, 1);
  assert.equal(isDeadConfirmed(run1), false);

  const run2 = mergeLivenessState(run1, { state: STATE.DEAD, status: 404 }, t1);
  assert.equal(run2.consecutive_dead_runs, 2);
  assert.equal(isDeadConfirmed(run2), false);

  const run3 = mergeLivenessState(run2, { state: STATE.LIVE, status: 200 }, t2);
  assert.equal(run3.consecutive_dead_runs, 0);
  assert.equal(run3.first_seen_dead, null);
  assert.equal(isDeadConfirmed(run3), false);
});

test("T15: URL dead in 3 consecutive runs -> dead_confirmed", () => {
  const t0 = "2026-08-01T00:00:00.000Z";
  const t1 = "2026-08-02T00:00:00.000Z";
  const t2 = "2026-08-03T00:00:00.000Z";

  const run1 = mergeLivenessState(null, { state: STATE.DEAD, status: 404 }, t0);
  const run2 = mergeLivenessState(run1, { state: STATE.DEAD, status: 404 }, t1);
  const run3 = mergeLivenessState(run2, { state: STATE.DEAD, status: 404 }, t2);

  assert.equal(run3.consecutive_dead_runs, 3);
  assert.equal(run3.first_seen_dead, t0);
  assert.equal(isDeadConfirmed(run3), true);
});

test("T15b: an unreachable run right after confirmation must not un-confirm a dead_confirmed URL", () => {
  const t0 = "2026-08-01T00:00:00.000Z";
  const t1 = "2026-08-02T00:00:00.000Z";
  const t2 = "2026-08-03T00:00:00.000Z";
  const t3 = "2026-08-04T00:00:00.000Z";

  const run1 = mergeLivenessState(null, { state: STATE.DEAD, status: 404 }, t0);
  const run2 = mergeLivenessState(run1, { state: STATE.DEAD, status: 404 }, t1);
  const run3 = mergeLivenessState(run2, { state: STATE.DEAD, status: 404 }, t2);
  assert.equal(isDeadConfirmed(run3), true);

  // A transient blip the run after confirmation must not silently drop the
  // URL out of dead_confirmed -- only a `live` result should ever clear it.
  const run4 = mergeLivenessState(run3, { state: STATE.UNREACHABLE, status: 503 }, t3);
  assert.equal(run4.consecutive_dead_runs, 3);
  assert.equal(isDeadConfirmed(run4), true);
});

test("T17: same-day re-triggers (e.g. two merges within hours) do not fast-forward dead_confirmed", () => {
  const t0 = "2026-08-01T00:00:00.000Z";
  const t0plus1h = "2026-08-01T01:00:00.000Z";
  const t0plus5h = "2026-08-01T05:00:00.000Z";

  const run1 = mergeLivenessState(null, { state: STATE.DEAD, status: 404 }, t0);
  assert.equal(run1.consecutive_dead_runs, 1);

  // A merge an hour later re-triggers the full-corpus run, but it's nowhere
  // near MIN_RUN_INTERVAL_MS since the last one -- must not increment.
  const run2 = mergeLivenessState(run1, { state: STATE.DEAD, status: 404 }, t0plus1h);
  assert.equal(run2.consecutive_dead_runs, 1);
  assert.equal(isDeadConfirmed(run2), false);

  // Same for a third same-day trigger, still short of the 20h floor.
  const run3 = mergeLivenessState(run2, { state: STATE.DEAD, status: 404 }, t0plus5h);
  assert.equal(run3.consecutive_dead_runs, 1);
  assert.equal(isDeadConfirmed(run3), false);
});

test("T18: a run right at the MIN_RUN_INTERVAL_MS boundary is credited; just under it is not", () => {
  const t0 = "2026-08-01T00:00:00.000Z";
  const justUnder = "2026-08-01T19:59:00.000Z"; // 19h59m later
  const atOrOver = "2026-08-01T20:00:01.000Z"; // 20h0m1s later

  const run1 = mergeLivenessState(null, { state: STATE.DEAD, status: 404 }, t0);
  const run2 = mergeLivenessState(run1, { state: STATE.DEAD, status: 404 }, justUnder);
  assert.equal(run2.consecutive_dead_runs, 1, "just under the floor must not credit");

  const run3 = mergeLivenessState(run2, { state: STATE.DEAD, status: 404 }, atOrOver);
  assert.equal(run3.consecutive_dead_runs, 2, "at/over the floor must credit");
});

test("T19: 410 (Gone) still confirms immediately regardless of run spacing", () => {
  const t0 = "2026-08-01T00:00:00.000Z";
  const t0plusOneMinute = "2026-08-01T00:01:00.000Z";
  const run1 = mergeLivenessState(null, { state: STATE.DEAD, status: 410, reason: "gone" }, t0plusOneMinute);
  assert.equal(run1.consecutive_dead_runs, 3);
  assert.equal(isDeadConfirmed(run1), true);
});

test("T16: last_checked/generated_at uses the caller-supplied run timestamp, not a freshly computed one", async () => {
  const beforeIso = new Date().toISOString();
  // Simulate real check latency between capturing the run timestamp and
  // persisting results -- generated_at/last_checked must still reflect the
  // captured start time, not drift to whenever the merge actually runs.
  await new Promise((resolve) => setTimeout(resolve, 50));
  const merged = mergeLivenessState(null, { state: STATE.DEAD, status: 404 }, beforeIso);
  assert.equal(merged.last_checked, beforeIso);
  assert.ok(new Date(merged.last_checked).getTime() <= Date.now());
});
