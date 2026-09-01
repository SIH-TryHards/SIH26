/* ============================================================
   tests/test_framework.js — Lightweight BDD Test Harness
   Zero-dependency Node.js ESM Test Runner
   Strict Zero-Emoji, High-Fidelity Diagnostic Reporting
   ============================================================ */

import assert from 'node:assert/strict';

export { assert };

class TestSuite {
  constructor(name) {
    this.name = name;
    this.tests = [];
  }

  addTest(name, fn) {
    this.tests.push({ name, fn });
  }

  async run() {
    const results = [];
    const startTime = performance.now();

    for (const test of this.tests) {
      const tStart = performance.now();
      try {
        await test.fn();
        const duration = performance.now() - tStart;
        results.push({
          name: test.name,
          passed: true,
          duration,
          error: null,
        });
      } catch (err) {
        const duration = performance.now() - tStart;
        results.push({
          name: test.name,
          passed: false,
          duration,
          error: err,
        });
      }
    }

    const duration = performance.now() - startTime;
    return {
      name: this.name,
      results,
      duration,
      passed: results.filter(r => r.passed).length,
      failed: results.filter(r => !r.passed).length,
      total: results.length,
    };
  }
}

const activeSuites = [];
let currentSuite = null;

export function describe(name, fn) {
  const suite = new TestSuite(name);
  currentSuite = suite;
  activeSuites.push(suite);
  fn();
  currentSuite = null;
  return suite;
}

export function it(name, fn) {
  if (!currentSuite) {
    throw new Error(`Test '${name}' must be defined inside a describe block.`);
  }
  currentSuite.addTest(name, fn);
}

export const test = it;

export async function runAllSuites(suites = activeSuites, options = {}) {
  const { verbose = false } = options;
  const suiteResults = [];
  const globalStart = performance.now();

  for (const suite of suites) {
    const result = await suite.run();
    suiteResults.push(result);
  }

  const globalDuration = performance.now() - globalStart;
  const totalTests = suiteResults.reduce((acc, s) => acc + s.total, 0);
  const passedTests = suiteResults.reduce((acc, s) => acc + s.passed, 0);
  const failedTests = suiteResults.reduce((acc, s) => acc + s.failed, 0);

  return {
    suites: suiteResults,
    totalSuites: suiteResults.length,
    totalTests,
    passedTests,
    failedTests,
    duration: globalDuration,
    allPassed: failedTests === 0,
  };
}

export function formatReport(summary, title = 'TEST RUN SUMMARY') {
  const lines = [];
  const divider = '='.repeat(68);
  const subDivider = '-'.repeat(68);

  lines.push(divider);
  lines.push(`  ${title}`);
  lines.push(divider);

  for (const suite of summary.suites) {
    const suiteStatus = suite.failed === 0 ? '[PASS]' : '[FAIL]';
    lines.push(`\n${suiteStatus} Suite: ${suite.name} (${suite.passed}/${suite.total} passed in ${suite.duration.toFixed(1)}ms)`);
    lines.push(subDivider);

    for (const res of suite.results) {
      if (res.passed) {
        lines.push(`  [PASS] ${res.name} (${res.duration.toFixed(1)}ms)`);
      } else {
        lines.push(`  [FAIL] ${res.name} (${res.duration.toFixed(1)}ms)`);
        lines.push(`         Error: ${res.error?.message || res.error}`);
        if (res.error?.stack) {
          const stackLines = res.error.stack.split('\n').slice(1, 4);
          stackLines.forEach(sl => lines.push(`         ${sl.trim()}`));
        }
      }
    }
  }

  lines.push('\n' + divider);
  lines.push(`  FINAL EXECUTION SUMMARY`);
  lines.push(divider);
  lines.push(`  Total Test Suites : ${summary.totalSuites}`);
  lines.push(`  Total Test Cases  : ${summary.totalTests}`);
  lines.push(`  Passed Test Cases : ${summary.passedTests}`);
  lines.push(`  Failed Test Cases : ${summary.failedTests}`);
  lines.push(`  Overall Duration  : ${summary.duration.toFixed(1)}ms`);
  lines.push(`  Execution Status  : ${summary.allPassed ? 'SUCCESS - ALL TESTS PASSED' : 'FAILURE - ONE OR MORE TESTS FAILED'}`);
  lines.push(divider);

  return lines.join('\n');
}

export function clearSuites() {
  activeSuites.length = 0;
  currentSuite = null;
}
