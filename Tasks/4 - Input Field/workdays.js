function calculateWorkingDays() {
  const daysInYearInput = document.getElementById("daysInYear");
  const holidaysInput = document.getElementById("holidays");
  const vacationInput = document.getElementById("vacation");
  const workingDaysOutput = document.getElementById("workingDays");

  const daysInYear = daysInYearInput.value;
  const holidays = holidaysInput.value;
  const vacation = vacationInput.value;

  const workingDays = daysInYear - holidays - vacation;

  workingDaysOutput.value = workingDays;
}

document.addEventListener("DOMContentLoaded", function() {
  const daysInYearInput = document.getElementById("daysInYear");
  const holidaysInput = document.getElementById("holidays");
  const vacationInput = document.getElementById("vacation");

  daysInYearInput.addEventListener("input", calculateWorkingDays);
  holidaysInput.addEventListener("input", calculateWorkingDays);
  vacationInput.addEventListener("input", calculateWorkingDays);
});