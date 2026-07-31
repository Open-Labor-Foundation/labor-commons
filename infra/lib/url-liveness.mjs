// Shared URL-liveness classification, used by both validate-spec-yaml.mjs
// (per-file, per-PR reachability) and validate-source-liveness.mjs (per-PR
// changed-spec liveness plus the full-corpus baseline). One implementation,
// imported by both -- a second copy is free to drift from this one silently,
// which is exactly how the original checker went eight months without a GET
// retry on 404.
//
// Round-3-correction context: the original single-HEAD-request, boolean-ok
// checker classified two confirmed-live URLs (behind Cloudflare bot
// management, which returns 404 to HEAD-from-a-declared-validator-UA) as
// dead, alongside genuine fabrications. This module exists to tell those
// apart: `dead` should be strong evidence of fabrication, not a coin flip
// against a WAF's mood.

export const STATE = Object.freeze({
  LIVE: "live",
  UNREACHABLE: "unreachable",
  DEAD: "dead"
});

export const DEFAULT_TIMEOUT_MS = 15000;
export const GOV_TIMEOUT_MS = 30000;
export const SLOW_HOST_TIMEOUT_MS = 45000;

// Hosts confirmed slow enough (large regulatory documents, or just a slow
// origin) that the .gov timeout alone still produces false "unreachable"
// results. Match on exact host or any subdomain.
export const SLOW_HOSTS = new Set([
  "ecfr.gov", // serves large regulatory documents; routinely slow to respond
  "globalstandard.cips.org" // 25 of the 78 null/timeout results in the round-3 baseline
]);

export const GLOBAL_CONCURRENCY = 6;
export const PER_HOST_CONCURRENCY = 2;
export const PER_HOST_MIN_DELAY_MS = 250;
export const MAX_429_RETRIES = 3;
export const RETRY_429_BASE_DELAY_MS = 500;

// Deliberately a realistic desktop browser UA, not a self-identifying one.
// WAF bot-management rules key off non-browser user-agents; the check's
// purpose is to see what a human reader following the citation would see,
// not to announce itself as an automated validator to the thing it's trying
// to see past.
export const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

// A UA header alone is not "browser-realistic" -- it's "browser-UA-only",
// and sophisticated WAFs fingerprint the *absence* of the rest of a real
// browser's header set just as readily as they fingerprint a bot UA.
// Confirmed directly during this correction: hhs.gov's WAF returned
// 503/timeout to Node's fetch() with only a custom user-agent header, but a
// clean 200 once these were added -- while curl (a different HTTP client,
// no extra headers) got a blanket 403 for the same URL either way. Both
// curl's 403 and this fuller header set's 200 are legitimate `live`
// outcomes under this module's classification; the point is that omitting
// these headers was producing a strictly worse, less accurate result
// (503/timeout -> unreachable) than either alternative.
export const DEFAULT_HEADERS = Object.freeze({
  "user-agent": USER_AGENT,
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language": "en-US,en;q=0.9",
  "accept-encoding": "gzip, deflate, br",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "none"
});

// Statuses that get a GET retry before any verdict is reached. A 404 from
// HEAD alone is never trusted -- confirmed false positive: csrc.nist.gov
// returns 404 to HEAD and 200 to GET for a real, live document.
const GET_RETRY_STATUSES = new Set([404, 405, 401, 403]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseRetryAfter(headerValue) {
  if (!headerValue) return null;
  const seconds = Number(headerValue);
  if (!Number.isNaN(seconds)) {
    return Math.max(0, seconds * 1000);
  }
  const dateMs = Date.parse(headerValue);
  if (!Number.isNaN(dateMs)) {
    return Math.max(0, dateMs - Date.now());
  }
  return null;
}

function computeBackoffDelayMs(retryAfterMs, attempt, options) {
  if (retryAfterMs != null) {
    return retryAfterMs;
  }
  const base = (options.backoffBaseMs ?? RETRY_429_BASE_DELAY_MS) * 2 ** attempt;
  const jitter = Math.random() * base * 0.3;
  return base + jitter;
}

export function resolveTimeoutMs(url, options = {}) {
  if (options.timeoutMs != null) {
    return options.timeoutMs;
  }
  let hostname;
  try {
    hostname = new URL(url).hostname;
  } catch {
    return options.defaultTimeoutMs ?? DEFAULT_TIMEOUT_MS;
  }
  const normalizedHost = hostname.replace(/^www\./, "");
  const slowHosts = options.slowHosts ?? SLOW_HOSTS;
  for (const slowHost of slowHosts) {
    if (normalizedHost === slowHost || normalizedHost.endsWith(`.${slowHost}`)) {
      return options.slowHostTimeoutMs ?? SLOW_HOST_TIMEOUT_MS;
    }
  }
  if (hostname.endsWith(".gov") || hostname.endsWith(".mil")) {
    return options.govTimeoutMs ?? GOV_TIMEOUT_MS;
  }
  return options.defaultTimeoutMs ?? DEFAULT_TIMEOUT_MS;
}

// Single HTTP attempt with its own 429 retry/backoff loop. Network-level
// failures (timeout, DNS, connection reset, abort) return {status: null,
// error} immediately -- no retry, those are unreachable, not fabrication
// signal, and retrying a dead host doesn't turn it live.
async function requestWithRetry429(url, method, timeoutMs, options) {
  const maxRetries = options.max429Retries ?? MAX_429_RETRIES;
  const fetchImpl = options.fetchImpl ?? fetch;
  const headers = options.headers ?? (options.userAgent ? { ...DEFAULT_HEADERS, "user-agent": options.userAgent } : DEFAULT_HEADERS);

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let result;
    try {
      const response = await fetchImpl(url, {
        method,
        redirect: "follow",
        signal: controller.signal,
        headers
      });
      const retryAfterMs = response.status === 429 ? parseRetryAfter(response.headers.get("retry-after")) : null;
      result = { status: response.status, retryAfterMs };
    } catch (error) {
      result = { status: null, error: error.message };
    } finally {
      clearTimeout(timer);
    }

    if (result.error || result.status !== 429 || attempt === maxRetries) {
      return result;
    }
    await sleep(computeBackoffDelayMs(result.retryAfterMs, attempt, options));
  }
  // Unreachable in practice (loop always returns from inside), kept for lint clarity.
  return { status: null, error: "retry loop exhausted without a result" };
}

function classifyStatus(status, { priorStatus } = {}) {
  if (status >= 200 && status < 400) {
    return { state: STATE.LIVE, status };
  }
  if (status === 401 || status === 403 || status === 418) {
    return { state: STATE.LIVE, status };
  }
  if (status === 410) {
    return { state: STATE.DEAD, status, reason: "gone" };
  }
  if (status === 404) {
    // Only dead when both HEAD and the GET retry agree. If priorStatus isn't
    // 404 too, either this is a first-pass HEAD 404 (GET retry not run yet --
    // callers always resolve the retry before reaching here for 404) or an
    // inconsistent HEAD/GET pair (e.g. 403 then 404), which is ambiguous, not
    // confirmed dead.
    return priorStatus === 404
      ? { state: STATE.DEAD, status }
      : { state: STATE.UNREACHABLE, status };
  }
  if (status === 405) {
    return { state: STATE.UNREACHABLE, status };
  }
  if (status === 400) {
    return { state: STATE.UNREACHABLE, status, flag: "malformed_url_suspected" };
  }
  if (status === 429) {
    return { state: STATE.UNREACHABLE, status };
  }
  if (status === 500 || status === 502 || status === 503 || status === 504) {
    return { state: STATE.UNREACHABLE, status };
  }
  return { state: STATE.UNREACHABLE, status };
}

// Classifies a single URL as STATE.LIVE / STATE.UNREACHABLE / STATE.DEAD for
// this one invocation. `dead` here already reflects HEAD+GET agreement (or an
// authoritative 410) -- it does not require multi-run confirmation to be a
// meaningful, single-run verdict. Multi-run confirmation (3 consecutive dead
// runs before something is reported as `dead_confirmed`) is a property of the
// full-corpus baseline, layered on top of this function's output over time --
// see mergeLivenessState below -- not something classifyUrl itself does.
export async function classifyUrl(url, options = {}) {
  const timeoutMs = resolveTimeoutMs(url, options);
  const headResult = await requestWithRetry429(url, "HEAD", timeoutMs, options);
  if (headResult.error) {
    return { state: STATE.UNREACHABLE, status: null, error: headResult.error };
  }

  if (!GET_RETRY_STATUSES.has(headResult.status)) {
    return classifyStatus(headResult.status);
  }

  const getResult = await requestWithRetry429(url, "GET", timeoutMs, options);
  if (getResult.error) {
    return { state: STATE.UNREACHABLE, status: null, error: getResult.error };
  }
  return classifyStatus(getResult.status, { priorStatus: headResult.status });
}

// Checks many URLs under a global concurrency cap AND a per-host concurrency
// cap plus a minimum inter-request delay per host. Most of the self-inflicted
// 429s in the round-3 baseline were the old flat 8-way global pool hammering
// a single host (14 finra.org URLs in parallel) -- this fixes that at the
// scheduling layer rather than by retrying harder after the fact.
export async function checkUrlsScheduled(urls, options = {}) {
  const globalConcurrency = options.globalConcurrency ?? GLOBAL_CONCURRENCY;
  const perHostConcurrency = options.perHostConcurrency ?? PER_HOST_CONCURRENCY;
  const perHostMinDelayMs = options.perHostMinDelayMs ?? PER_HOST_MIN_DELAY_MS;
  const onProgress = options.onProgress;

  const results = new Map();
  const queue = [...urls];
  const hostInFlight = new Map();
  const hostLastRequestAt = new Map();
  let done = 0;

  function hostOf(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return "invalid-url";
    }
  }

  async function acquireHostSlot(host) {
    for (;;) {
      const inFlight = hostInFlight.get(host) ?? 0;
      const lastAt = hostLastRequestAt.get(host) ?? 0;
      const sinceLast = Date.now() - lastAt;
      if (inFlight < perHostConcurrency && sinceLast >= perHostMinDelayMs) {
        hostInFlight.set(host, inFlight + 1);
        hostLastRequestAt.set(host, Date.now());
        return;
      }
      await sleep(Math.max(5, perHostMinDelayMs - sinceLast));
    }
  }

  function releaseHostSlot(host) {
    hostInFlight.set(host, Math.max(0, (hostInFlight.get(host) ?? 1) - 1));
  }

  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      const host = hostOf(url);
      await acquireHostSlot(host);
      try {
        results.set(url, await classifyUrl(url, options));
      } finally {
        releaseHostSlot(host);
      }
      done += 1;
      onProgress?.(done, urls.length);
    }
  }

  await Promise.all(Array.from({ length: Math.min(globalConcurrency, urls.length) }, worker));
  return results;
}

// Merges this run's classifyUrl result for one URL into its persisted
// baseline record (R8: a URL only becomes `dead_confirmed` after 3
// consecutive runs classify it dead; a `live` result resets the counter; an
// `unreachable` result is indeterminate and neither increments nor resets --
// a network blip is neither evidence for nor against fabrication). A `410`
// (Gone) is authoritative on its own and skips the multi-run requirement
// entirely, per spec.
// The re-baseline procedure requires 3 full-corpus runs at least 24h apart
// so consecutive_dead_runs reflects genuinely time-separated samples, not
// just 3 process invocations. That was only a documented procedure, not
// something the code enforced -- once the full-corpus workflow started
// triggering on every merge (source-liveness-schedule.yml's push trigger)
// instead of only weekly, an unenforced rule would let a burst of same-day
// merges fast-forward a URL to dead_confirmed in hours. 20h (not a strict
// 24h) leaves slack for a scheduler firing a little early.
export const MIN_RUN_INTERVAL_MS = 20 * 60 * 60 * 1000;

export function mergeLivenessState(previousRecord, currentResult, nowIso) {
  const previous = previousRecord ?? {
    consecutive_dead_runs: 0,
    first_seen_dead: null,
    last_checked: null,
    last_credited_check: null
  };
  // Measured against last_credited_check, NOT last_checked. last_checked
  // updates on every single attempt regardless of whether it counted --
  // comparing against it would mean a burst of frequent re-triggers keeps
  // resetting the clock and a URL could never accumulate enough spacing to
  // reach dead_confirmed at all, which is worse than the fast-forward bug
  // this exists to prevent. last_credited_check only moves forward on a
  // check that actually changed the counter (incremented or reset it).
  const sinceCredited = previous.last_credited_check
    ? Date.parse(nowIso) - Date.parse(previous.last_credited_check)
    : Infinity;
  const tooSoonToCredit = Number.isFinite(sinceCredited) && sinceCredited < MIN_RUN_INTERVAL_MS;

  const result = {
    state: currentResult.state,
    last_status: currentResult.status ?? null,
    consecutive_dead_runs: previous.consecutive_dead_runs ?? 0,
    first_seen_dead: previous.first_seen_dead ?? null,
    last_checked: nowIso,
    last_credited_check: previous.last_credited_check ?? null
  };

  if (currentResult.state === STATE.DEAD) {
    if (currentResult.reason === "gone") {
      // 410 is authoritative -- doesn't need multi-run spacing.
      result.consecutive_dead_runs = Math.max(3, (previous.consecutive_dead_runs ?? 0) + 1);
      result.last_credited_check = nowIso;
      result.reason = "gone";
    } else if (tooSoonToCredit) {
      // Records the observation (state/last_status/last_checked above) but
      // doesn't let a same-day re-trigger fast-forward confirmation --
      // last_credited_check deliberately does NOT move, so a whole burst of
      // frequent re-triggers still only needs MIN_RUN_INTERVAL_MS from the
      // last credited check, not from whichever attempt happened last.
      result.consecutive_dead_runs = previous.consecutive_dead_runs ?? 0;
    } else {
      result.consecutive_dead_runs = (previous.consecutive_dead_runs ?? 0) + 1;
      result.last_credited_check = nowIso;
    }
    result.first_seen_dead = previous.first_seen_dead ?? nowIso;
  } else if (currentResult.state === STATE.LIVE) {
    result.consecutive_dead_runs = 0;
    result.first_seen_dead = null;
    result.last_credited_check = nowIso;
  }
  // UNREACHABLE: consecutive_dead_runs, first_seen_dead, and
  // last_credited_check all carry over unchanged -- an indeterminate run is
  // neither evidence for nor against.

  if (currentResult.error) {
    result.error = currentResult.error;
  }
  if (currentResult.flag) {
    result.flag = currentResult.flag;
  }
  return result;
}

export const CONFIRMED_DEAD_THRESHOLD = 3;

// Deliberately keyed on the persisted counter alone, NOT on
// `record.state === STATE.DEAD`. mergeLivenessState carries
// consecutive_dead_runs over unchanged (and overwrites state to
// "unreachable") on an indeterminate run -- an already-confirmed-dead URL
// must not silently drop out of dead_confirmed the moment a single
// transient blip hits it after run 3. Only a `live` result (which resets
// the counter to 0) should ever clear confirmed status.
export function isDeadConfirmed(record) {
  return (record.consecutive_dead_runs ?? 0) >= CONFIRMED_DEAD_THRESHOLD;
}
