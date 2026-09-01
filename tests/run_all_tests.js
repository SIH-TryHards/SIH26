/* ============================================================
   tests/run_all_tests.js — Master Automated Test Runner
   Kisan Saathi Precision Agronomy & I18N Localization Platform
   Zero-Emoji, High-Fidelity Diagnostic Test Harness
   ============================================================ */

import { runAllSuites, formatReport, clearSuites } from './test_framework.js';

const targetArg = (process.argv[2] || '').toLowerCase().trim();

async function main() {
  console.log('\n' + '='.repeat(68));
  console.log('  KISAN SAATHI PRECISION AGRONOMY — AUTOMATED TEST SUITE');
  console.log('='.repeat(68));
  console.log(`  Invoked Target : ${targetArg || 'ALL TIERS'}`);
  console.log(`  Runtime        : Node.js ${process.version} (ESM)`);
  console.log(`  Timestamp      : ${new Date().toISOString()}`);
  console.log('='.repeat(68) + '\n');

  clearSuites();

  const loadTier1 = !targetArg || targetArg === 'tier1' || targetArg === 'feature' || targetArg === 'structure';
  const loadTier2 = !targetArg || targetArg === 'tier2' || targetArg === 'boundary' || targetArg === 'math';
  const loadTier3 = !targetArg || targetArg === 'tier3' || targetArg === 'i18n' || targetArg === 'parity';
  const loadTier4 = !targetArg || targetArg === 'tier4' || targetArg === 'urls' || targetArg === 'schemes';
  const loadOracle = !targetArg || targetArg === 'oracle' || targetArg === 'math_oracle' || targetArg === 'tier2';
  const loadChallengerDom = !targetArg || targetArg === 'dom' || targetArg === 'challenger' || targetArg === 'reactive' || targetArg === 'tier5';

  if (loadTier1) {
    await import('./tier1_feature_structure.test.js');
  }
  if (loadTier2) {
    await import('./tier2_boundary_math.test.js');
  }
  if (loadOracle) {
    await import('./loan_math_oracle.test.js');
  }
  if (loadChallengerDom) {
    await import('./challenger_dom_reactive.test.js');
    await import('./challenger_m1_iter2_dom_interactive.test.js');
    await import('./challenger_m1_iter2_adversarial_stress.test.js');
  }
  if (loadTier3) {
    await import('./tier3_i18n_parity.test.js');
  }
  if (loadTier4) {
    await import('./tier4_schemes_urls.test.js');
  }

  const summary = await runAllSuites();
  const report = formatReport(summary, 'AUTOMATED TEST HARNESS REPORT');
  console.log(report);

  if (!summary.allPassed) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error('\n[FATAL ERROR IN TEST RUNNER]:', err);
  process.exitCode = 1;
});
