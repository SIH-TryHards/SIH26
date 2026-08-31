/* ============================================================
   loan.js — pure functional engine for EMI, distress index,
   and monthly installment amortization schedule (Module 5).
   Never touches the DOM or window.
   ============================================================ */

export function calculateEMI(principal, annualRate, months) {
  const p = Math.max(0, Number(principal) || 0);
  const r = Math.max(0, Number(annualRate) || 0);
  const m = Math.max(0, parseInt(months, 10) || 0);

  if (m <= 0 || p <= 0) return 0;
  if (r <= 0) return p / m;

  const monthlyRate = r / 12 / 100;
  const emi = (p * monthlyRate * Math.pow(1 + monthlyRate, m)) / (Math.pow(1 + monthlyRate, m) - 1);
  return emi;
}

export function calculateDistressScore(rainForecastMm = 0, mandiPrice = 2425, mspPrice = 2425, daysUntilDue = 15, stateName = '') {
  const rain = Number(rainForecastMm) || 0;
  const mPrice = Number(mandiPrice) || 0;
  const msp = Math.max(1, Number(mspPrice) || 1);
  const days = Number(daysUntilDue) || 0;

  // 1. Rain Stress Subscore (0-100)
  let sRain = 10;
  if (rain <= 2.0) {
    sRain = Math.min(100, Math.round(85 + (2.0 - rain) * 7.5));
  } else if (rain >= 60.0) {
    sRain = Math.min(100, Math.round(75 + (rain - 60.0) * 0.8));
  } else if (rain < 10.0) {
    sRain = Math.max(10, Math.round(35 - rain * 2.0));
  }

  // 2. Price Realization Subscore (0-100)
  let sPrice = 10;
  if (mPrice < msp) {
    const deficitPct = ((msp - mPrice) / msp) * 100;
    sPrice = Math.min(100, Math.round(50 + deficitPct * 2.2));
  } else if (mPrice <= msp * 1.04) {
    sPrice = 25;
  } else {
    sPrice = 10;
  }

  // 3. Loan Due Proximity Subscore (0-100)
  let sLoan = 10;
  if (days <= 7) {
    sLoan = 98;
  } else if (days <= 15) {
    sLoan = 85;
  } else if (days <= 30) {
    sLoan = 65;
  } else if (days <= 60) {
    sLoan = 38;
  } else {
    sLoan = 10;
  }

  // Weighted composite score (0-100)
  const compositeScore = Math.max(0, Math.min(100, Math.round(
    0.35 * sRain + 0.35 * sPrice + 0.30 * sLoan
  )));

  // Risk band level
  const level = compositeScore > 80 ? 'critical' : compositeScore >= 51 ? 'watch' : 'low';

  // Spike root-cause reasons
  const rootCauses = [];
  if (sRain >= 70) {
    if (rain <= 2.0) {
      rootCauses.push({
        id: 'drought',
        icon: '🌧️',
        title: 'Severe Rainfall Deficit (Drought Stress)',
        desc: `3-day rainfall forecast is critically low at ${rain.toFixed(1)} mm, causing acute crop moisture stress and potential yield loss.`
      });
    } else {
      rootCauses.push({
        id: 'excess_rain',
        icon: '🌊',
        title: 'Excessive Rainfall & Inundation Hazard',
        desc: `Forecast of ${rain.toFixed(1)} mm rainfall over 3 days poses severe waterlogging and root aeration danger.`
      });
    }
  }

  if (sPrice >= 50) {
    const deficitPct = Math.round(((msp - mPrice) / msp) * 100);
    rootCauses.push({
      id: 'price_crash',
      icon: '📉',
      title: 'Mandi Realization Below MSP',
      desc: `Effective market rate of ₹${Math.round(mPrice).toLocaleString('en-IN')}/Qtl is ${deficitPct}% below Government MSP (₹${Math.round(msp).toLocaleString('en-IN')}/Qtl), impacting repayment capacity.`
    });
  }

  if (sLoan >= 65) {
    rootCauses.push({
      id: 'loan_due',
      icon: '⏳',
      title: 'Imminent Loan Repayment Due Date',
      desc: `Only ${days} days remaining until the next KCC / bank installment due date with tight liquidity buffer.`
    });
  }

  return {
    score: compositeScore,
    level,
    sRain,
    sPrice,
    sLoan,
    rootCauses,
    breakdown: [
      { factorKey: 'rain', score: sRain, weight: 0.35 },
      { factorKey: 'price', score: sPrice, weight: 0.35 },
      { factorKey: 'loan', score: sLoan, weight: 0.30 },
    ]
  };
}

export function generateSchedule(principal, annualRate, months, startDate = new Date(), installmentsPaid = 0) {
  const p = Math.max(0, Number(principal) || 0);
  const r = Math.max(0, Number(annualRate) || 0);
  const m = Math.max(1, parseInt(months, 10) || 12);
  const emi = calculateEMI(p, r, m);
  let balance = p;
  const schedule = [];
  const monthlyRate = r / 12 / 100;

  let baseDate = new Date(startDate);
  if (isNaN(baseDate.getTime())) {
    baseDate = new Date();
    baseDate.setDate(1);
    baseDate.setMonth(baseDate.getMonth() + 1);
  }

  const paidCount = Math.max(0, Math.min(m, Number(installmentsPaid) || 0));
  let unpaidArrears = 0;
  let unpaidRolloversCount = 0;
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  let nextUnpaidDate = null;
  let nextDueDaysRemaining = null;

  for (let i = 1; i <= m; i++) {
    const instDate = new Date(baseDate);
    instDate.setMonth(baseDate.getMonth() + (i - 1));

    const interest = balance * monthlyRate;
    let principalPart = emi - interest;

    // Adjust final payment precision
    if (i === m) {
      principalPart = balance;
    }

    balance -= principalPart;
    if (balance < 0) balance = 0;

    const isPaid = i <= paidCount;
    const isDue = instDate <= today;
    const rolloverArrears = isPaid ? 0 : unpaidArrears;
    const totalDue = isPaid ? 0 : emi + rolloverArrears;

    let status = isPaid ? 'Paid' : (isDue ? 'Overdue' : 'Upcoming');
    if (!isPaid && rolloverArrears > 0) {
      status = 'Overdue (rolled)';
      unpaidRolloversCount++;
    } else if (!isPaid && isDue) {
      unpaidRolloversCount++;
    }

    if (!isPaid && isDue) {
      unpaidArrears += emi;
    }

    if (!isPaid && !nextUnpaidDate) {
      nextUnpaidDate = instDate;
      const diffMs = instDate.getTime() - today.getTime();
      nextDueDaysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    }

    schedule.push({
      month: i,
      date: instDate.toISOString().slice(0, 10),
      emi,
      principal: principalPart,
      interest,
      balance,
      isPaid,
      isDue,
      rolloverArrears,
      totalDue,
      status,
    });
  }

  const totalPayment = emi * m;
  const totalInterest = Math.max(0, totalPayment - p);
  const amountPaid = emi * paidCount;
  const amountLeft = Math.max(0, totalPayment - amountPaid);
  const progressPct = m > 0 ? Math.round((paidCount / m) * 100) : 0;

  return {
    emi,
    totalPayment,
    totalInterest,
    amountPaid,
    amountLeft,
    progressPct,
    paidCount,
    totalMonths: m,
    unpaidRolloversCount,
    nextDueDate: nextUnpaidDate ? nextUnpaidDate.toISOString().slice(0, 10) : null,
    nextDueDaysRemaining: nextDueDaysRemaining !== null ? nextDueDaysRemaining : 0,
    schedule
  };
}

export const generateLoanSchedule = generateSchedule;

