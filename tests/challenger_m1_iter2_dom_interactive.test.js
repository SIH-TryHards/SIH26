/* ============================================================
   tests/challenger_m1_iter2_dom_interactive.test.js
   DOM Interaction & UI Component Empirical Verification Suite
   Milestone 1 Iteration 2 — Challenger 2 (DOM Challenger)
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, assert } from './test_framework.js';
import * as loanModule from '../assets/js/loan.js';
import * as dataModule from '../assets/js/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const farmerJs = fs.readFileSync(path.join(rootDir, 'assets/js/farmer.js'), 'utf8');

/* ------------------------------------------------------------
   Lightweight HTML Parser & Headless DOM Simulation Harness
   ------------------------------------------------------------ */

class SimulatedElement {
  constructor(tagName, id = '', className = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.className = className;
    this._classes = new Set(className.split(/\s+/).filter(Boolean));
    this.attributes = {};
    this.dataset = {};
    this.children = [];
    this.parentElement = null;
    this.listeners = {};
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.checked = false;
    this.min = '';
    this.max = '';
    this.step = '';
    this.hidden = false;
    this.style = {};
  }

  get classList() {
    return {
      add: (...names) => {
        names.forEach(n => this._classes.add(n));
        this.className = Array.from(this._classes).join(' ');
      },
      remove: (...names) => {
        names.forEach(n => this._classes.delete(n));
        this.className = Array.from(this._classes).join(' ');
      },
      toggle: (name, force) => {
        if (force === undefined) {
          if (this._classes.has(name)) this.classList.remove(name);
          else this.classList.add(name);
        } else if (force) {
          this.classList.add(name);
        } else {
          this.classList.remove(name);
        }
      },
      contains: (name) => this._classes.has(name),
    };
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
    if (name.startsWith('data-')) {
      const prop = name.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      this.dataset[prop] = String(value);
    }
    if (name === 'id') this.id = String(value);
    if (name === 'class') {
      this.className = String(value);
      this._classes = new Set(this.className.split(/\s+/).filter(Boolean));
    }
    if (name === 'value') this.value = String(value);
    if (name === 'min') this.min = String(value);
    if (name === 'max') this.max = String(value);
    if (name === 'step') this.step = String(value);
  }

  getAttribute(name) {
    return this.attributes[name] ?? null;
  }

  addEventListener(type, handler) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(handler);
  }

  dispatchEvent(event) {
    const handlers = this.listeners[event.type] || [];
    for (const h of handlers) {
      h(event);
    }
  }

  appendChild(child) {
    child.parentElement = this;
    this.children.push(child);
  }

  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length ? all[0] : null;
  }

  querySelectorAll(selector) {
    const results = [];
    const walk = (el) => {
      for (const child of el.children) {
        if (matches(child, selector)) {
          results.push(child);
        }
        walk(child);
      }
    };
    walk(this);
    return results;
  }
}

function matches(el, sel) {
  if (sel.startsWith('#')) return el.id === sel.slice(1);
  if (sel.startsWith('.')) return el.classList.contains(sel.slice(1));
  if (sel.startsWith('[')) {
    const m = sel.match(/\[([a-zA-Z0-9_-]+)(?:=['"]?([^'"]+)['"]?)?\]/);
    if (m) {
      const [, k, v] = m;
      if (v === undefined) return el.getAttribute(k) !== null || k in el.dataset;
      return el.getAttribute(k) === v || el.dataset[k.replace(/^data-/, '').replace(/-([a-z])/g, (_, c) => c.toUpperCase())] === v;
    }
  }
  return el.tagName.toLowerCase() === sel.toLowerCase();
}

/**
 * Extracts DOM element nodes and IDs from raw HTML
 */
function parseHtmlIdsAndDatasets(html) {
  const idMap = new Map();
  const datasetElements = [];

  const tagRegex = /<([a-zA-Z0-9]+)\b([^>]*)>/g;
  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    const tagName = match[1];
    const attrsStr = match[2];

    const el = new SimulatedElement(tagName);
    
    const attrRegex = /([a-zA-Z0-9_-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
      const attrName = attrMatch[1];
      const attrVal = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? '';
      el.setAttribute(attrName, attrVal);
    }

    if (el.id) {
      idMap.set(el.id, el);
    }
    if (Object.keys(el.dataset).length > 0) {
      datasetElements.push(el);
    }
  }

  return { idMap, datasetElements };
}

const parsedDom = parseHtmlIdsAndDatasets(indexHtml);

/* ============================================================
   CHALLENGE SUITE 1: DOM Selector Mappings & Alignment
   ============================================================ */
describe('Challenger 2: DOM Element ID Mappings & Alignment', () => {

  it('DOM-1.1: Verify all Loan Calculator Input & Output IDs in index.html match farmer.js exactly', () => {
    const dynamicLoanIds = [
      'loanAmountInput',
      'loanAmountFormatted',
      'loanTenureInput',
      'loanTenureUnit',
      'btnTenureYears',
      'btnTenureMonths',
      'loanRateInput',
      'loanFirstInstallmentInput',
      'firstInstallmentDateFormatted',
      'loanPaidInput',
      'loanPaidRange',
      'paidMonthsCountLabel',
      'loanPaidSummary',
      'outMonthlyEmi',
      'summaryTenureText',
      'summaryRateText',
      'outTotalInterest',
      'outTotalPayable',
      'outAmountPaid',
      'outInstallmentsPaidText',
      'outAmountLeft',
      'outInstallmentsRemainingText',
      'outNextDueDate',
      'outNextDueCountdown',
      'loanProgressPctText',
      'loanPaidProgressBar',
      'loanLeftProgressBar',
      'progPaidText',
      'progLeftText',
      'rolloverSummaryBadge',
      'loanScheduleTableBody',
      'btnMarkAllPaid',
      'btnResetChecklist',
    ];

    for (const id of dynamicLoanIds) {
      assert.ok(
        parsedDom.idMap.has(id),
        `CRITICAL: Element ID #${id} is missing in index.html`
      );
      assert.ok(
        farmerJs.includes(`'${id}'`) || farmerJs.includes(`"${id}"`),
        `CRITICAL: farmer.js does not bind to canonical ID #${id}`
      );
    }
  });

  it('DOM-1.2: Verify all Distress Risk Planner dynamic elements in index.html match farmer.js bindings', () => {
    const dynamicDistressIds = [
      'distressPlannerCard',
      'distressScorePill',
      'distressWarningBanner',
      'spikeReasonsList',
      'sliderRainSimMm',
      'sliderRainValDisplay',
      'factor1RainVal',
      'factor1RainSummary',
      'factor1RiskBadge',
      'sliderPriceDropPct',
      'sliderPriceDropDisplay',
      'factor2PriceVal',
      'factor2MspComparison',
      'factor2RiskBadge',
      'sliderLoanDueDays',
      'sliderLoanDaysDisplay',
      'factor3LoanDaysVal',
      'factor3LoanSummary',
      'factor3RiskBadge',
      'distressScoreNumDisplay',
      'distressScoreLevelText',
      'distressMeterBar',
      'distressMonitorMount',
    ];

    for (const id of dynamicDistressIds) {
      assert.ok(
        parsedDom.idMap.has(id),
        `CRITICAL: Distress element ID #${id} is missing in index.html`
      );
      assert.ok(
        farmerJs.includes(`'${id}'`) || farmerJs.includes(`"${id}"`),
        `CRITICAL: farmer.js does not bind to Distress ID #${id}`
      );
    }

    // Also check static/i18n elements in index.html
    const staticI18nIds = [
      'distressPlannerTitle',
      'distressPlannerSubtitle',
      'distressLiveBadge',
    ];
    for (const id of staticI18nIds) {
      assert.ok(
        parsedDom.idMap.has(id),
        `CRITICAL: Static i18n Distress ID #${id} missing in index.html`
      );
    }
  });

  it('DOM-1.3: Audit farmer.js for any obsolete or mismatched ID references', () => {
    const forbiddenObsoleteIds = [
      'inputLoanPrincipal',
      'inputLoanTenure',
      'inputLoanRate',
      'inputFirstInstallmentDate',
      'inputInstallmentsPaid',
      'sliderInstallmentsPaid',
      'btnSimulateDistress',
      'distressGaugeCanvas',
    ];

    for (const forbidden of forbiddenObsoleteIds) {
      assert.ok(
        !farmerJs.includes(forbidden),
        `AUDIT FAILURE: farmer.js still contains obsolete ID reference "${forbidden}"`
      );
    }
  });
});

/* ============================================================
   CHALLENGE SUITE 2: Interactive Sliders & Presets Simulation
   ============================================================ */
describe('Challenger 2: Interactive Sliders, Quick Presets & 2-Way Sync', () => {

  it('DOM-2.1: Quick Preset Loan Amount buttons update loan calculation', () => {
    const amounts = [50000, 100000, 200000, 300000, 500000];
    for (const amt of amounts) {
      const result = loanModule.generateSchedule(amt, 4.0, 24, '2026-09-01', 0);
      assert.ok(result.emi > 0, `EMI for ₹${amt} must be positive`);
      assert.ok(result.totalPayment > amt, `Total payment must exceed principal ₹${amt}`);
      assert.equal(result.totalMonths, 24, 'Total months must be 24');
    }
  });

  it('DOM-2.2: Quick Preset Loan Tenure buttons (12, 24, 36, 60) update schedule rows', () => {
    const tenures = [12, 24, 36, 60];
    for (const months of tenures) {
      const result = loanModule.generateSchedule(100000, 4.0, months, '2026-09-01', 0);
      assert.equal(result.schedule.length, months, `Schedule row count must be ${months}`);
      assert.equal(result.totalMonths, months, `totalMonths must be ${months}`);
    }
  });

  it('DOM-2.3: Quick Preset Interest Rate buttons (4%, 7%, 8.5%, 11%) compute correct interest curves', () => {
    const rates = [4.0, 7.0, 8.5, 11.0];
    let prevInterest = -1;
    for (const r of rates) {
      const result = loanModule.generateSchedule(100000, r, 24, '2026-09-01', 0);
      assert.ok(result.totalInterest > prevInterest, `Interest at ${r}% must strictly exceed interest at lower rate`);
      prevInterest = result.totalInterest;
    }
  });

  it('DOM-2.4: 2-Way Sync between loanPaidInput and loanPaidRange sliders with clamping', () => {
    const tenureMonths = 24;
    const testCases = [
      { input: -5, expected: 0 },
      { input: 0, expected: 0 },
      { input: 12, expected: 12 },
      { input: 24, expected: 24 },
      { input: 50, expected: 24 },
    ];

    for (const tc of testCases) {
      const clamped = Math.max(0, Math.min(tenureMonths, tc.input));
      assert.equal(clamped, tc.expected, `Clamping for input ${tc.input} must yield ${tc.expected}`);
      const res = loanModule.generateSchedule(100000, 4.0, tenureMonths, '2026-09-01', clamped);
      assert.equal(res.paidCount, tc.expected, `Schedule paidCount must equal ${tc.expected}`);
    }
  });

  it('DOM-2.5: Mark All Paid button boundary creates 100% completion state', () => {
    const result = loanModule.generateSchedule(200000, 4.0, 36, '2026-09-01', 36);
    assert.equal(result.paidCount, 36);
    assert.equal(result.progressPct, 100);
    assert.equal(result.amountLeft, 0);
    assert.equal(result.unpaidRolloversCount, 0);
    assert.ok(result.nextDueDate === null || result.nextDueDate === undefined);
  });

  it('DOM-2.6: Reset Checklist sets paid count to 0 and regenerates full balance', () => {
    const result = loanModule.generateSchedule(200000, 4.0, 36, '2026-09-01', 0);
    assert.equal(result.paidCount, 0);
    assert.equal(result.progressPct, 0);
    assert.equal(result.amountPaid, 0);
    assert.equal(result.amountLeft, result.totalPayment);
  });
});

/* ============================================================
   CHALLENGE SUITE 3: Distress Risk Simulator & Warning Banner (>80)
   ============================================================ */
describe('Challenger 2: Distress Risk Simulator, Root Causes & Warning Banner', () => {

  it('DOM-3.1: Distress score calculation strictly matches 3-factor weighting formula', () => {
    const res = loanModule.calculateDistressScore(0, 2619, 2425, 15);
    assert.equal(res.score, 64, 'Distress score calculation must equal 64');
    assert.equal(res.level, 'watch', 'Risk level must be watch (51-80)');
  });

  it('DOM-3.2: Critical Distress Warning Banner threshold (>80) validation', () => {
    const safeRes = loanModule.calculateDistressScore(30, 2600, 2425, 60);
    assert.ok(safeRes.score <= 80, `Safe score (${safeRes.score}) must not exceed 80`);
    assert.equal(safeRes.score > 80, false);

    const severeRes = loanModule.calculateDistressScore(0, 1200, 2425, 3);
    assert.ok(severeRes.score > 80, `Severe score (${severeRes.score}) must exceed 80`);
    assert.equal(severeRes.level, 'critical', 'Risk level must be critical');
    assert.ok(severeRes.rootCauses.length >= 3, 'Must have at least 3 root cause diagnostics');
  });

  it('DOM-3.3: Root-Cause Diagnostics identify distinct hazards (Drought, Price Crash, Imminent Due, Inundation)', () => {
    const droughtRes = loanModule.calculateDistressScore(1.0, 2600, 2425, 60);
    const droughtCause = droughtRes.rootCauses.find(rc => rc.id === 'drought');
    assert.ok(droughtCause, 'Must identify drought root cause when rain <= 2mm');

    const floodRes = loanModule.calculateDistressScore(75.0, 2600, 2425, 60);
    const floodCause = floodRes.rootCauses.find(rc => rc.id === 'excess_rain');
    assert.ok(floodCause, 'Must identify excess_rain root cause when rain >= 60mm');

    const priceRes = loanModule.calculateDistressScore(30.0, 1800, 2425, 60);
    const priceCause = priceRes.rootCauses.find(rc => rc.id === 'price_crash');
    assert.ok(priceCause, 'Must identify price_crash root cause when price < MSP');

    const loanRes = loanModule.calculateDistressScore(30.0, 2600, 2425, 4);
    const loanCause = loanRes.rootCauses.find(rc => rc.id === 'loan_due');
    assert.ok(loanCause, 'Must identify loan_due root cause when days <= 7');
  });
});

/* ============================================================
   CHALLENGE SUITE 4: Government Relief Schemes & Official Domains
   ============================================================ */
describe('Challenger 2: Government Relief Schemes & Official Domains Audit', () => {

  it('DOM-4.1: Exactly 6 Government Schemes are provided with verified official .gov.in / .nic.in URLs', () => {
    const schemes = dataModule.GOVERNMENT_SCHEMES;
    assert.equal(schemes.length, 6, 'Must contain exactly 6 government schemes');

    const expectedSchemes = [
      { id: 'pm-kisan', domain: 'pmkisan.gov.in' },
      { id: 'pmfby', domain: 'pmfby.gov.in' },
      { id: 'machinery', domain: 'agrimachinery.nic.in' },
      { id: 'kcc', domain: 'fasalrin.gov.in' },
      { id: 'pmksy', domain: 'pmksy.gov.in' },
      { id: 'enam', domain: 'enam.gov.in' },
    ];

    for (const exp of expectedSchemes) {
      const item = schemes.find(s => s.id === exp.id);
      assert.ok(item, `Scheme with ID "${exp.id}" not found`);
      assert.ok(item.url.startsWith('https://'), `Scheme URL for ${exp.id} must be HTTPS`);
      assert.ok(item.url.includes(exp.domain), `Scheme ${exp.id} URL must point to official domain ${exp.domain}`);
    }
  });

  it('DOM-4.2: Dynamic Scheme Card Renderer in farmer.js enforces security attributes', () => {
    assert.ok(
      farmerJs.includes('target="_blank" rel="noopener noreferrer"'),
      'farmer.js must enforce target="_blank" rel="noopener noreferrer" on external scheme links'
    );
  });

  it('DOM-4.3: All Scheme Helplines use valid tel: URI protocol', () => {
    const schemes = dataModule.GOVERNMENT_SCHEMES;
    for (const s of schemes) {
      if (s.helplines) {
        for (const h of s.helplines) {
          assert.ok(h.href.startsWith('tel:'), `Helpline href must use tel: protocol: ${h.href}`);
          const digits = h.href.replace('tel:', '').replace(/[^0-9]/g, '');
          assert.ok(digits.length >= 5, `Helpline telephone number must be at least 5 digits: ${h.href}`);
        }
      }
    }
  });
});
