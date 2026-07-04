#!/usr/bin/env node
/**
 * Adds 250 functional-domain specialists (functional-domain-specialists catalog family)
 * and 10 productization specialists into industry_overlay_catalog.sqlite under their
 * correct NAICS industry overlays.
 *
 * Two new industries are created:
 *   - human-resources-management-services  (NAICS 541612)
 *   - sales-and-revenue-operations         (NAICS 541613)
 *
 * Run: node data/add-functional-overlay-specialists.mjs
 */

import { execSync } from 'node:child_process';
import { writeFileSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDUSTRY_DB = path.join(__dirname, 'catalogs', 'industry_overlay_catalog.sqlite');
const AGENT_DB    = path.join(__dirname, 'catalogs', 'agent_catalog.sqlite');

function query(db, sql) {
  const tmp = `/tmp/_overlay_q_${Date.now()}.sql`;
  writeFileSync(tmp, sql);
  try {
    const raw = execSync(`sqlite3 -json "${db}" < "${tmp}"`).toString().trim();
    return raw ? JSON.parse(raw) : [];
  } finally {
    unlinkSync(tmp);
  }
}

function exec(db, sql) {
  const tmp = `/tmp/_overlay_x_${Date.now()}.sql`;
  writeFileSync(tmp, sql);
  try {
    execSync(`sqlite3 "${db}" < "${tmp}"`);
  } finally {
    unlinkSync(tmp);
  }
}

// ── NAICS mapping: "section_slug:agent_slug" → industry_slug
// null = skip (duplicate or intentionally excluded)
const NAICS_MAP = {
  // ── Director of Finance ────────────────────────────────────────────────────
  'director-of-finance:accounting-operations-specialist':            'accounting-tax-and-audit-services',
  'director-of-finance:accounts-payable-specialist':                 'accounting-tax-and-audit-services',
  'director-of-finance:accounts-receivable-and-collections-specialist': 'accounting-tax-and-audit-services',
  'director-of-finance:audit-liaison-specialist':                    'accounting-tax-and-audit-services',
  'director-of-finance:general-ledger-and-close-specialist':         'accounting-tax-and-audit-services',
  'director-of-finance:payroll-coordination-specialist':             'accounting-tax-and-audit-services',
  'director-of-finance:procurement-finance-specialist':              'accounting-tax-and-audit-services',
  'director-of-finance:revenue-recognition-specialist':              'accounting-tax-and-audit-services',
  'director-of-finance:tax-operations-specialist':                   null, // duplicate
  'director-of-finance:financial-planning-and-analysis-specialist':  'capital-markets-and-asset-management',
  'director-of-finance:budgeting-specialist':                        'capital-markets-and-asset-management',
  'director-of-finance:forecasting-specialist':                      'capital-markets-and-asset-management',
  'director-of-finance:treasury-and-cash-management-specialist':     'capital-markets-and-asset-management',
  'director-of-finance:board-and-investor-reporting-specialist':     'capital-markets-and-asset-management',
  'director-of-finance:spend-controls-specialist':                   'professional-services',
  'director-of-finance:financial-systems-specialist':                'information-software-and-digital-media',

  // ── Director of Marketing ─────────────────────────────────────────────────
  'director-of-marketing:marketing-strategy-specialist':             'advertising-media-buying-and-agency-services',
  'director-of-marketing:brand-management-specialist':               'advertising-media-buying-and-agency-services',
  'director-of-marketing:product-marketing-specialist':              'advertising-media-buying-and-agency-services',
  'director-of-marketing:content-marketing-specialist':              'advertising-media-buying-and-agency-services',
  'director-of-marketing:marketing-copywriting-specialist':          'advertising-media-buying-and-agency-services',
  'director-of-marketing:seo-specialist':                            'advertising-media-buying-and-agency-services',
  'director-of-marketing:paid-media-specialist':                     'advertising-media-buying-and-agency-services',
  'director-of-marketing:social-media-marketing-specialist':         'advertising-media-buying-and-agency-services',
  'director-of-marketing:email-lifecycle-marketing-specialist':      'advertising-media-buying-and-agency-services',
  'director-of-marketing:event-and-field-marketing-specialist':      'advertising-media-buying-and-agency-services',
  'director-of-marketing:demand-generation-specialist':              'information-software-and-digital-media',
  'director-of-marketing:partner-marketing-specialist':              'information-software-and-digital-media',
  'director-of-marketing:marketing-operations-specialist':           'information-software-and-digital-media',
  'director-of-marketing:marketing-analytics-specialist':            'information-software-and-digital-media',

  // ── Director of Human Resources ──────────────────────────────────────────
  'director-of-human-resources:talent-acquisition-specialist':       'staffing-recruiting-and-contingent-labor',
  'director-of-human-resources:onboarding-specialist':               'staffing-recruiting-and-contingent-labor',
  'director-of-human-resources:recruiting-operations-specialist':    null, // duplicate in staffing
  'director-of-human-resources:learning-and-development-specialist': 'workforce-training-and-credentialing',
  'director-of-human-resources:workforce-planning-specialist':       'human-resources-management-services',
  'director-of-human-resources:hr-operations-specialist':            'human-resources-management-services',
  'director-of-human-resources:employee-relations-specialist':       'human-resources-management-services',
  'director-of-human-resources:compensation-specialist':             'human-resources-management-services',
  'director-of-human-resources:benefits-administration-specialist':  'human-resources-management-services',
  'director-of-human-resources:performance-management-specialist':   'human-resources-management-services',
  'director-of-human-resources:organizational-design-specialist':    'human-resources-management-services',
  'director-of-human-resources:policy-and-handbook-specialist':      'human-resources-management-services',
  'director-of-human-resources:hr-compliance-specialist':            'human-resources-management-services',
  'director-of-human-resources:people-analytics-specialist':         'human-resources-management-services',
  'director-of-human-resources:hris-administration-specialist':      'human-resources-management-services',
  'director-of-human-resources:offboarding-and-transition-specialist': 'human-resources-management-services',

  // ── Director of Sales and Revenue ────────────────────────────────────────
  'director-of-sales-and-revenue:sales-operations-specialist':              'sales-and-revenue-operations',
  'director-of-sales-and-revenue:lead-qualification-specialist':            'sales-and-revenue-operations',
  'director-of-sales-and-revenue:account-executive-support-specialist':     'sales-and-revenue-operations',
  'director-of-sales-and-revenue:account-management-specialist':            'sales-and-revenue-operations',
  'director-of-sales-and-revenue:proposal-and-quoting-specialist':          'sales-and-revenue-operations',
  'director-of-sales-and-revenue:crm-administration-specialist':            'sales-and-revenue-operations',
  'director-of-sales-and-revenue:pipeline-management-specialist':           'sales-and-revenue-operations',
  'director-of-sales-and-revenue:sales-forecasting-specialist':             'sales-and-revenue-operations',
  'director-of-sales-and-revenue:territory-and-capacity-planning-specialist': 'sales-and-revenue-operations',
  'director-of-sales-and-revenue:channel-and-partner-sales-specialist':     'sales-and-revenue-operations',
  'director-of-sales-and-revenue:revenue-operations-specialist':            'sales-and-revenue-operations',
  'director-of-sales-and-revenue:sales-enablement-specialist':              'sales-and-revenue-operations',
  'director-of-sales-and-revenue:deal-desk-specialist':                     'sales-and-revenue-operations',
  'director-of-sales-and-revenue:renewal-and-expansion-specialist':         'sales-and-revenue-operations',

  // ── Director of Operations ───────────────────────────────────────────────
  'director-of-operations:business-operations-specialist':            'administrative-support-and-business-services',
  'director-of-operations:sop-and-documentation-specialist':          'administrative-support-and-business-services',
  'director-of-operations:vendor-operations-specialist':              'administrative-support-and-business-services',
  'director-of-operations:service-delivery-specialist':               'administrative-support-and-business-services',
  'director-of-operations:procurement-operations-specialist':         'administrative-support-and-business-services',
  'director-of-operations:business-continuity-operations-specialist': 'administrative-support-and-business-services',
  'director-of-operations:risk-operations-specialist':                'administrative-support-and-business-services',
  'director-of-operations:cross-functional-launch-operations-specialist': 'administrative-support-and-business-services',
  'director-of-operations:process-improvement-specialist':            'professional-services',
  'director-of-operations:program-management-specialist':             'professional-services',
  'director-of-operations:pmo-specialist':                            'professional-services',
  'director-of-operations:resource-planning-specialist':              'professional-services',
  'director-of-operations:capacity-planning-specialist':              'professional-services',
  'director-of-operations:quality-operations-specialist':             'professional-services',
  'director-of-operations:kpi-and-performance-management-specialist': 'professional-services',
  'director-of-operations:facilities-and-workplace-operations-specialist': 'facilities-services-and-building-operations',

  // ── Director of Legal and Compliance ─────────────────────────────────────
  'director-of-legal-and-compliance:legal-intake-and-triage-specialist':        'legal-services',
  'director-of-legal-and-compliance:contract-lifecycle-specialist':              'legal-services',
  'director-of-legal-and-compliance:commercial-legal-operations-specialist':     'legal-services',
  'director-of-legal-and-compliance:policy-governance-specialist':               'legal-services',
  'director-of-legal-and-compliance:regulatory-research-specialist':             'legal-services',
  'director-of-legal-and-compliance:privacy-operations-specialist':              'legal-services',
  'director-of-legal-and-compliance:records-and-retention-specialist':           'legal-services',
  'director-of-legal-and-compliance:corporate-governance-specialist':            'legal-services',
  'director-of-legal-and-compliance:entity-management-specialist':               'legal-services',
  'director-of-legal-and-compliance:compliance-monitoring-specialist':           'legal-services',
  'director-of-legal-and-compliance:internal-controls-coordination-specialist':  'legal-services',
  'director-of-legal-and-compliance:employment-law-coordination-specialist':     'legal-services',
  'director-of-legal-and-compliance:ip-and-trademark-coordination-specialist':   'legal-services',
  'director-of-legal-and-compliance:third-party-terms-review-specialist':        'legal-services',

  // ── Director of Customer Success and Service Delivery ────────────────────
  'director-of-customer-success-and-service-delivery:customer-onboarding-specialist':         'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:implementation-specialist':               'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:customer-success-operations-specialist':  'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:adoption-and-lifecycle-specialist':       'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:escalation-management-specialist':        'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:renewal-health-specialist':               'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:voice-of-customer-specialist':            'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:customer-analytics-specialist':           'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:support-knowledge-specialist':            'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:customer-training-and-enablement-specialist': 'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:community-management-specialist':         'information-software-and-digital-media',
  'director-of-customer-success-and-service-delivery:professional-services-coordination-specialist': 'information-software-and-digital-media',

  // ── Director of Product and Portfolio ────────────────────────────────────
  'director-of-product-and-portfolio:product-strategy-specialist':           'information-software-and-digital-media',
  'director-of-product-and-portfolio:product-discovery-specialist':          'information-software-and-digital-media',
  'director-of-product-and-portfolio:user-research-specialist':              'information-software-and-digital-media',
  'director-of-product-and-portfolio:product-operations-specialist':         'information-software-and-digital-media',
  'director-of-product-and-portfolio:requirements-management-specialist':    'information-software-and-digital-media',
  'director-of-product-and-portfolio:roadmap-planning-specialist':           'information-software-and-digital-media',
  'director-of-product-and-portfolio:product-analytics-specialist':          'information-software-and-digital-media',
  'director-of-product-and-portfolio:growth-experimentation-specialist':     'information-software-and-digital-media',
  'director-of-product-and-portfolio:feature-launch-specialist':             'information-software-and-digital-media',
  'director-of-product-and-portfolio:customer-feedback-synthesis-specialist': 'information-software-and-digital-media',
  'director-of-product-and-portfolio:competitive-intelligence-specialist':   'information-software-and-digital-media',
  'director-of-product-and-portfolio:product-documentation-specialist':      'information-software-and-digital-media',
  'director-of-product-and-portfolio:product-portfolio-management-specialist': 'information-software-and-digital-media',
  'director-of-product-and-portfolio:monetization-strategy-specialist':      'information-software-and-digital-media',

  // ── Chief Executive and Strategy ─────────────────────────────────────────
  'chief-executive-and-strategy:corporate-strategy-specialist':          'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:chief-of-staff-specialist':              'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:executive-decision-support-specialist':  'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:operating-model-design-specialist':      'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:corporate-planning-specialist':          'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:board-reporting-specialist':             'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:strategic-initiative-tracking-specialist': 'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:cross-functional-prioritization-specialist': 'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:portfolio-steering-specialist':          'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:executive-communications-specialist':    'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:organizational-performance-specialist':  'management-of-companies-and-enterprises',
  'chief-executive-and-strategy:special-projects-specialist':            'management-of-companies-and-enterprises',

  // ── Security and Risk → professional-services (NAICS 5416 risk consulting)
  'security-and-risk:enterprise-risk-management-specialist':  'professional-services',
  'security-and-risk:operational-risk-specialist':            'professional-services',
  'security-and-risk:cyber-risk-governance-specialist':       'professional-services',
  'security-and-risk:business-resilience-specialist':         'professional-services',
  'security-and-risk:internal-controls-oversight-specialist': 'professional-services',
  'security-and-risk:third-party-risk-specialist':            'professional-services',
  'security-and-risk:incident-governance-specialist':         'professional-services',
  'security-and-risk:crisis-management-specialist':           'professional-services',
  'security-and-risk:policy-enforcement-specialist':          'professional-services',
  'security-and-risk:control-assurance-specialist':           'professional-services',
  'security-and-risk:risk-reporting-specialist':              'professional-services',
  'security-and-risk:insurance-and-risk-transfer-specialist': 'professional-services',

  // ── Data, Analytics, and AI → professional-services / information-software
  'data-analytics-and-ai:data-strategy-specialist':               'professional-services',
  'data-analytics-and-ai:data-governance-leadership-specialist':  'professional-services',
  'data-analytics-and-ai:analytics-program-specialist':           'professional-services',
  'data-analytics-and-ai:business-intelligence-leadership-specialist': 'professional-services',
  'data-analytics-and-ai:data-platform-planning-specialist':      'information-software-and-digital-media',
  'data-analytics-and-ai:ai-strategy-specialist':                 'professional-services',
  'data-analytics-and-ai:ai-productization-specialist':           'information-software-and-digital-media',
  'data-analytics-and-ai:ai-policy-and-governance-specialist':    'professional-services',
  'data-analytics-and-ai:decision-intelligence-specialist':       'professional-services',
  'data-analytics-and-ai:data-value-realization-specialist':      'professional-services',
  'data-analytics-and-ai:knowledge-systems-strategy-specialist':  'information-software-and-digital-media',
  'data-analytics-and-ai:data-and-ai-portfolio-specialist':       'professional-services',

  // ── Corporate Development and Partnerships ───────────────────────────────
  'corporate-development-and-partnerships:strategic-partnerships-specialist':      'professional-services',
  'corporate-development-and-partnerships:channel-partnerships-specialist':        'professional-services',
  'corporate-development-and-partnerships:alliance-operations-specialist':         'professional-services',
  'corporate-development-and-partnerships:joint-go-to-market-specialist':          'professional-services',
  'corporate-development-and-partnerships:ecosystem-strategy-specialist':          'professional-services',
  'corporate-development-and-partnerships:partner-enablement-specialist':          'professional-services',
  'corporate-development-and-partnerships:partner-performance-specialist':         'professional-services',
  'corporate-development-and-partnerships:corporate-development-research-specialist': 'management-of-companies-and-enterprises',
  'corporate-development-and-partnerships:m-a-screening-specialist':               'management-of-companies-and-enterprises',
  'corporate-development-and-partnerships:integration-planning-specialist':        'management-of-companies-and-enterprises',

  // ── Transformation and PMO → professional-services ───────────────────────
  'transformation-and-pmo:enterprise-transformation-specialist':              'professional-services',
  'transformation-and-pmo:program-portfolio-management-specialist':           'professional-services',
  'transformation-and-pmo:pmo-governance-specialist':                         'professional-services',
  'transformation-and-pmo:change-portfolio-specialist':                       'professional-services',
  'transformation-and-pmo:initiative-intake-specialist':                      'professional-services',
  'transformation-and-pmo:delivery-governance-specialist':                    'professional-services',
  'transformation-and-pmo:benefits-realization-specialist':                   'professional-services',
  'transformation-and-pmo:cross-functional-dependency-management-specialist': 'professional-services',
  'transformation-and-pmo:transformation-communications-specialist':          'professional-services',
  'transformation-and-pmo:executive-milestone-reporting-specialist':          'professional-services',

  // ── Communications and PR ─────────────────────────────────────────────────
  'communications-and-pr:corporate-communications-specialist':  'advertising-media-buying-and-agency-services',
  'communications-and-pr:public-relations-specialist':          'advertising-media-buying-and-agency-services',
  'communications-and-pr:media-relations-specialist':           'advertising-media-buying-and-agency-services',
  'communications-and-pr:analyst-relations-specialist':         'advertising-media-buying-and-agency-services',
  'communications-and-pr:internal-communications-specialist':   'advertising-media-buying-and-agency-services',
  'communications-and-pr:crisis-communications-specialist':     'advertising-media-buying-and-agency-services',
  'communications-and-pr:executive-messaging-specialist':       'advertising-media-buying-and-agency-services',
  'communications-and-pr:thought-leadership-specialist':        'advertising-media-buying-and-agency-services',
  'communications-and-pr:reputation-monitoring-specialist':     'advertising-media-buying-and-agency-services',
  'communications-and-pr:communications-operations-specialist': 'advertising-media-buying-and-agency-services',

  // ── Procurement and Supply Chain ─────────────────────────────────────────
  'procurement-and-supply-chain:strategic-sourcing-specialist':         'wholesale-trade-and-distribution',
  'procurement-and-supply-chain:supplier-management-specialist':        'wholesale-trade-and-distribution',
  'procurement-and-supply-chain:category-management-specialist':        'wholesale-trade-and-distribution',
  'procurement-and-supply-chain:inventory-planning-specialist':         'wholesale-trade-and-distribution',
  'procurement-and-supply-chain:demand-planning-specialist':            'wholesale-trade-and-distribution',
  'procurement-and-supply-chain:supply-continuity-specialist':          'wholesale-trade-and-distribution',
  'procurement-and-supply-chain:supply-performance-analytics-specialist': 'wholesale-trade-and-distribution',
  'procurement-and-supply-chain:supplier-risk-specialist':              'professional-services',
  'procurement-and-supply-chain:procurement-operations-specialist':     'administrative-support-and-business-services',
  'procurement-and-supply-chain:contract-purchasing-specialist':        'administrative-support-and-business-services',
  'procurement-and-supply-chain:fulfillment-operations-specialist':     'warehousing-fulfillment-and-cold-chain',
  'procurement-and-supply-chain:logistics-coordination-specialist':     'transportation-and-logistics',

  // ── Research and Innovation ──────────────────────────────────────────────
  'research-and-innovation:research-strategy-specialist':        'professional-services',
  'research-and-innovation:innovation-portfolio-specialist':     'professional-services',
  'research-and-innovation:emerging-technology-scouting-specialist': 'professional-services',
  'research-and-innovation:prototype-planning-specialist':       'professional-services',
  'research-and-innovation:competitive-innovation-specialist':   'professional-services',
  'research-and-innovation:innovation-operations-specialist':    'professional-services',
  'research-and-innovation:applied-research-specialist':         'higher-education-and-research-institutions',
  'research-and-innovation:experiment-design-specialist':        'higher-education-and-research-institutions',
  'research-and-innovation:research-reporting-specialist':       'higher-education-and-research-institutions',
  'research-and-innovation:ip-opportunity-specialist':           'legal-services',

  // ── Customer Support ─────────────────────────────────────────────────────
  'customer-support:support-operations-specialist':       'administrative-support-and-business-services',
  'customer-support:technical-support-specialist':        'administrative-support-and-business-services',
  'customer-support:tier-escalation-specialist':          'administrative-support-and-business-services',
  'customer-support:support-quality-specialist':          'administrative-support-and-business-services',
  'customer-support:support-workforce-planning-specialist': 'administrative-support-and-business-services',
  'customer-support:support-knowledge-specialist':        'administrative-support-and-business-services',
  'customer-support:support-analytics-specialist':        'administrative-support-and-business-services',
  'customer-support:support-tooling-specialist':          'information-software-and-digital-media',

  // ── Investor Relations ────────────────────────────────────────────────────
  'investor-relations:investor-communications-specialist':    'capital-markets-and-asset-management',
  'investor-relations:earnings-and-reporting-specialist':     'capital-markets-and-asset-management',
  'investor-relations:financial-narrative-specialist':        'capital-markets-and-asset-management',
  'investor-relations:board-and-investor-materials-specialist': 'capital-markets-and-asset-management',
  'investor-relations:market-intelligence-specialist':        'capital-markets-and-asset-management',
  'investor-relations:capital-markets-coordination-specialist': 'capital-markets-and-asset-management',
  'investor-relations:investor-event-specialist':             'capital-markets-and-asset-management',
  'investor-relations:shareholder-inquiry-specialist':        'capital-markets-and-asset-management',

  // ── Facilities and Administration ────────────────────────────────────────
  'facilities-and-administration:facilities-operations-specialist':        'facilities-services-and-building-operations',
  'facilities-and-administration:workplace-administration-specialist':     'facilities-services-and-building-operations',
  'facilities-and-administration:office-services-specialist':              'facilities-services-and-building-operations',
  'facilities-and-administration:travel-and-event-administration-specialist': 'facilities-services-and-building-operations',
  'facilities-and-administration:physical-security-coordination-specialist': 'facilities-services-and-building-operations',
  'facilities-and-administration:space-planning-specialist':               'facilities-services-and-building-operations',
  'facilities-and-administration:administrative-workflow-specialist':      'facilities-services-and-building-operations',
  'facilities-and-administration:facilities-vendor-specialist':            'facilities-services-and-building-operations',

  // ── Quality and Regulatory ───────────────────────────────────────────────
  'quality-and-regulatory:quality-management-specialist':        'professional-services',
  'quality-and-regulatory:regulatory-affairs-specialist':        'professional-services',
  'quality-and-regulatory:capa-specialist':                      'professional-services',
  'quality-and-regulatory:document-control-specialist':          'professional-services',
  'quality-and-regulatory:audit-coordination-specialist':        'professional-services',
  'quality-and-regulatory:standards-compliance-specialist':      'professional-services',
  'quality-and-regulatory:quality-reporting-specialist':         'professional-services',
  'quality-and-regulatory:training-compliance-specialist':       'workforce-training-and-credentialing',
  'quality-and-regulatory:quality-assurance-operations-specialist': 'scientific-testing-inspection-and-certification-services',
  'quality-and-regulatory:validation-and-verification-specialist':  'scientific-testing-inspection-and-certification-services',

  // ── Manufacturing and Logistics ──────────────────────────────────────────
  'manufacturing-and-logistics:manufacturing-operations-specialist':        'metals-machinery-and-industrial-equipment-manufacturing',
  'manufacturing-and-logistics:production-planning-specialist':             'metals-machinery-and-industrial-equipment-manufacturing',
  'manufacturing-and-logistics:shop-floor-systems-specialist':              'metals-machinery-and-industrial-equipment-manufacturing',
  'manufacturing-and-logistics:maintenance-planning-specialist':            'metals-machinery-and-industrial-equipment-manufacturing',
  'manufacturing-and-logistics:production-analytics-specialist':            'metals-machinery-and-industrial-equipment-manufacturing',
  'manufacturing-and-logistics:manufacturing-process-improvement-specialist': 'metals-machinery-and-industrial-equipment-manufacturing',
  'manufacturing-and-logistics:logistics-planning-specialist':              'transportation-and-logistics',
  'manufacturing-and-logistics:distribution-specialist':                    'transportation-and-logistics',
  'manufacturing-and-logistics:supplier-logistics-specialist':              'transportation-and-logistics',
  'manufacturing-and-logistics:demand-and-replenishment-specialist':        'wholesale-trade-and-distribution',
  'manufacturing-and-logistics:fulfillment-quality-specialist':             'warehousing-fulfillment-and-cold-chain',
  'manufacturing-and-logistics:warehouse-operations-specialist':            null, // duplicate in warehousing

  // ── Productization / SaaS Readiness (IT catalog family) ─────────────────
  'productization-saas-readiness-and-market-delivery:saas-packaging-specialist':               'information-software-and-digital-media',
  'productization-saas-readiness-and-market-delivery:subscription-and-entitlement-specialist': 'information-software-and-digital-media',
  'productization-saas-readiness-and-market-delivery:pricing-and-packaging-strategy-specialist': 'information-software-and-digital-media',
  'productization-saas-readiness-and-market-delivery:licensing-protection-specialist':         'information-software-and-digital-media',
  'productization-saas-readiness-and-market-delivery:product-compliance-specialist':           'information-software-and-digital-media',
  'productization-saas-readiness-and-market-delivery:technical-presales-specialist':           'information-software-and-digital-media',
  'productization-saas-readiness-and-market-delivery:product-documentation-and-enablement-specialist': 'information-software-and-digital-media',
  'productization-saas-readiness-and-market-delivery:marketing-website-best-practice-specialist': 'advertising-media-buying-and-agency-services',
  'productization-saas-readiness-and-market-delivery:customer-onboarding-specialist':          null, // already mapped from customer-success section
  'productization-saas-readiness-and-market-delivery:customer-success-operations-specialist':  null, // already mapped from customer-success section
};

// ── Industry name lookup (slug → display name) ───────────────────────────────
const INDUSTRY_NAMES = {
  'accounting-tax-and-audit-services':                    'Accounting, Tax, And Audit Services',
  'capital-markets-and-asset-management':                 'Capital Markets And Asset Management',
  'advertising-media-buying-and-agency-services':         'Advertising, Media Buying, And Agency Services',
  'information-software-and-digital-media':               'Information, Software, And Digital Media',
  'administrative-support-and-business-services':         'Administrative Support And Business Services',
  'facilities-services-and-building-operations':          'Facilities Services And Building Operations',
  'professional-services':                                'Professional Services',
  'management-of-companies-and-enterprises':              'Management Of Companies And Enterprises',
  'staffing-recruiting-and-contingent-labor':             'Staffing, Recruiting, And Contingent Labor',
  'workforce-training-and-credentialing':                 'Workforce Training And Credentialing',
  'human-resources-management-services':                  'Human Resources Management Services',
  'sales-and-revenue-operations':                         'Sales And Revenue Operations',
  'legal-services':                                       'Legal Services',
  'wholesale-trade-and-distribution':                     'Wholesale Trade And Distribution',
  'scientific-testing-inspection-and-certification-services': 'Scientific Testing, Inspection, And Certification Services',
  'transportation-and-logistics':                         'Transportation And Logistics',
  'warehousing-fulfillment-and-cold-chain':               'Warehousing, Fulfillment, And Cold Chain',
  'metals-machinery-and-industrial-equipment-manufacturing': 'Metals, Machinery, And Industrial Equipment Manufacturing',
  'higher-education-and-research-institutions':           'Higher Education And Research Institutions',
};

// ── Per-industry target counts for existing industries ────────────────────────
const EXISTING_TARGET_COUNTS = {
  'accounting-tax-and-audit-services':                    10,
  'capital-markets-and-asset-management':                 10,
  'advertising-media-buying-and-agency-services':         10,
  'information-software-and-digital-media':               16,
  'administrative-support-and-business-services':         14,
  'facilities-services-and-building-operations':          10,
  'professional-services':                                16,
  'management-of-companies-and-enterprises':               8,
  'staffing-recruiting-and-contingent-labor':             10,
  'workforce-training-and-credentialing':                 10,
  'legal-services':                                       12,
  'wholesale-trade-and-distribution':                     12,
  'scientific-testing-inspection-and-certification-services': 10,
  'transportation-and-logistics':                         12,
  'warehousing-fulfillment-and-cold-chain':               10,
  'metals-machinery-and-industrial-equipment-manufacturing': 10,
  'higher-education-and-research-institutions':           10,
};

function toTitleCase(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function escape(str) {
  return str.replace(/'/g, "''");
}

// ── Load existing (industry_slug, agent_slug) pairs to prevent duplicates ─────
const existing = new Set(
  query(INDUSTRY_DB, 'SELECT industry_slug || \':\' || agent_slug AS key FROM industry_overlay_agents;')
    .map(r => r.key)
);

// ── Load all relevant agents from agent_catalog ───────────────────────────────
const mbAgents = query(AGENT_DB,
  `SELECT section_slug, agent_slug, agent_name, what_it_does
   FROM agents
   WHERE catalog_family_slug IN ('functional-domain-specialists','it')
     AND section_slug IN (
       'director-of-finance','director-of-marketing','director-of-human-resources',
       'director-of-sales-and-revenue','director-of-operations',
       'director-of-legal-and-compliance',
       'director-of-customer-success-and-service-delivery',
       'director-of-product-and-portfolio','chief-executive-and-strategy',
       'security-and-risk','data-analytics-and-ai',
       'corporate-development-and-partnerships','transformation-and-pmo',
       'communications-and-pr','procurement-and-supply-chain',
       'research-and-innovation','customer-support','investor-relations',
       'facilities-and-administration','quality-and-regulatory',
       'manufacturing-and-logistics',
       'productization-saas-readiness-and-market-delivery'
     );`
);

// ── Build inserts ─────────────────────────────────────────────────────────────
const inserts = [];
let skipped = 0;
let added = 0;

// Track per-industry count to compute target_count for new industries
const newIndustryCount = {};

for (const agent of mbAgents) {
  const key = `${agent.section_slug}:${agent.agent_slug}`;
  const industrySlug = NAICS_MAP[key];

  if (industrySlug === undefined) {
    // Not in map — no mapping defined for this agent
    continue;
  }
  if (industrySlug === null) {
    // Intentionally skipped (duplicate or excluded)
    skipped++;
    continue;
  }

  const dupKey = `${industrySlug}:${agent.agent_slug}`;
  if (existing.has(dupKey)) {
    skipped++;
    continue;
  }

  const industryName = INDUSTRY_NAMES[industrySlug];
  if (!industryName) {
    console.error(`Unknown industry name for slug: ${industrySlug}`);
    process.exit(1);
  }

  // Use existing target_count for known industries; track count for new ones
  const targetCount = EXISTING_TARGET_COUNTS[industrySlug] ?? null;
  if (targetCount === null) {
    newIndustryCount[industrySlug] = (newIndustryCount[industrySlug] ?? 0) + 1;
  }

  inserts.push({
    industry: industryName,
    industry_slug: industrySlug,
    agent_name: agent.agent_name,
    agent_slug: agent.agent_slug,
    what_it_does: agent.what_it_does,
    target_count: targetCount,
    source_file: agent.section_slug === 'productization-saas-readiness-and-market-delivery'
      ? 'labor-commons/catalog_target.md'
      : 'labor-commons/functional-domain-specialists.md',
  });

  existing.add(dupKey);
  added++;
}

// Resolve target_count for new industries now that we know their sizes
for (const ins of inserts) {
  if (ins.target_count === null) {
    ins.target_count = newIndustryCount[ins.industry_slug];
  }
}

// ── Execute in a single transaction ──────────────────────────────────────────
if (inserts.length === 0) {
  console.log('Nothing to insert — all specialists are already cataloged.');
  process.exit(0);
}

const sql = [
  'BEGIN;',
  ...inserts.map(r =>
    `INSERT INTO industry_overlay_agents (industry, industry_slug, target_count, agent_name, agent_slug, what_it_does, status, source_file) VALUES ('${escape(r.industry)}', '${r.industry_slug}', ${r.target_count}, '${escape(r.agent_name)}', '${r.agent_slug}', '${escape(r.what_it_does)}', 'cataloged', '${r.source_file}');`
  ),
  'COMMIT;',
].join('\n');

exec(INDUSTRY_DB, sql);

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\nMigration complete.`);
console.log(`  Inserted : ${added}`);
console.log(`  Skipped  : ${skipped} (duplicates or excluded)`);

const byIndustry = {};
for (const ins of inserts) {
  byIndustry[ins.industry_slug] = (byIndustry[ins.industry_slug] ?? 0) + 1;
}
const newIndustries = Object.keys(byIndustry).filter(s => !EXISTING_TARGET_COUNTS[s]);
if (newIndustries.length) {
  console.log(`\nNew industries created:`);
  for (const s of newIndustries) {
    console.log(`  ${INDUSTRY_NAMES[s]} (${s}) — ${byIndustry[s]} specialists`);
  }
}
console.log(`\nSpecialists added per industry:`);
for (const [slug, count] of Object.entries(byIndustry).sort()) {
  const marker = !EXISTING_TARGET_COUNTS[slug] ? ' [NEW]' : '';
  console.log(`  ${slug}${marker}: +${count}`);
}
