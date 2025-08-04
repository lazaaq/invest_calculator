function calculate() {
  const capital = parseFloat(document.getElementById('capital').value);
  const target = parseFloat(document.getElementById('target').value);
  const ratio = parseFloat(document.getElementById('ratio').value) / 100 + 1;

  if (isNaN(capital) || isNaN(target) || isNaN(ratio) || capital <= 0 || target <= 0 || ratio < 0) {
    alert("Please enter valid numbers for capital, target, and ratio.");
    return;
  }

  const logarithmic_value = (target / capital) * ((ratio - 1) / ratio) + 1;
  const base = ratio;
  const months = Math.log(logarithmic_value) / Math.log(base);
  const roundedMonths = Math.ceil(months);
  const result = roundedMonths + 12; // need 1 year to start having returns
  const resultYear = Math.floor(result / 12);
  const resultMonth = result % 12;

  const yearlyRetiredIncome = target * (ratio - 1);
  const monthlyRetiredIncome = Math.floor(yearlyRetiredIncome / 12);

  document.getElementById('result_year').textContent = resultYear;
  document.getElementById('result_month').textContent = resultMonth;
  document.getElementById('retired_income').textContent = monthlyRetiredIncome;
  document.querySelector('#result_display').style.display = 'block';
}