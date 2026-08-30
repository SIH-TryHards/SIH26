/* ============================================================
   loan.js — pure functional engine for EMI and schedule (Module 5)
   Never touches the DOM or window.
   ============================================================ */

export function calculateEMI(principal, annualRate, months) {
  if (months <= 0 || principal <= 0) return 0;
  if (annualRate <= 0) return principal / months;

  const r = annualRate / 12 / 100;
  const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  return emi;
}

export function generateSchedule(principal, annualRate, months, startDate = new Date(), installmentsPaid = 0) {
  const emi = calculateEMI(principal, annualRate, months);
  let balance = principal;
  const schedule = [];
  const r = annualRate / 12 / 100;
  let currentDate = new Date(startDate);
  const paidCount = Math.max(0, Math.min(months, Number(installmentsPaid) || 0));
  let unpaidArrears = 0;
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  for (let i = 1; i <= months; i++) {
    if (i > 1) currentDate.setMonth(currentDate.getMonth() + 1);
    const interest = balance * r;
    let principalPart = emi - interest;
    
    // Adjust final payment precision
    if (i === months) {
      principalPart = balance;
    }
    
    balance -= principalPart;
    if (balance < 0) balance = 0;

    const isPaid = i <= paidCount;
    const isDue = currentDate <= today;
    const rolloverArrears = isPaid ? 0 : unpaidArrears;
    const totalDue = isPaid ? 0 : emi + rolloverArrears;
    let status = isPaid ? 'Paid' : (isDue ? 'Overdue' : 'Upcoming');
    if (!isPaid && rolloverArrears > 0) status = 'Overdue (rolled)';
    if (!isPaid && isDue) unpaidArrears += emi;

    schedule.push({
      month: i,
      date: currentDate.toISOString().slice(0, 10),
      emi: emi,
      principal: principalPart,
      interest: interest,
      balance: balance,
      isPaid,
      rolloverArrears,
      totalDue,
      status,
    });
  }

  return {
    emi,
    totalPayment: emi * months,
    totalInterest: (emi * months) - principal,
    schedule
  };
}
