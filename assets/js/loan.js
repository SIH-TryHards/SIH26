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

export function generateSchedule(principal, annualRate, months, startDate = new Date()) {
  const emi = calculateEMI(principal, annualRate, months);
  let balance = principal;
  const schedule = [];
  const r = annualRate / 12 / 100;
  
  let currentDate = new Date(startDate);

  for (let i = 1; i <= months; i++) {
    currentDate.setMonth(currentDate.getMonth() + 1);
    const interest = balance * r;
    let principalPart = emi - interest;
    
    // Adjust final payment precision
    if (i === months) {
      principalPart = balance;
    }
    
    balance -= principalPart;
    if (balance < 0) balance = 0;

    schedule.push({
      month: i,
      date: currentDate.toISOString().slice(0, 10),
      emi: emi,
      principal: principalPart,
      interest: interest,
      balance: balance
    });
  }

  return {
    emi,
    totalPayment: emi * months,
    totalInterest: (emi * months) - principal,
    schedule
  };
}
