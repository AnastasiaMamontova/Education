function calculateWorkingDays() {
  var daysInYearInput = document.getElementById("daysInYear");
  var holidaysInput = document.getElementById("holidays");
  var vacationInput = document.getElementById("vacation");
  var workingDaysOutput = document.getElementById("workingDays");

  var daysInYear = daysInYearInput.value;
  var holidays = holidaysInput.value;
  var vacation = vacationInput.value;

  var workingDays = daysInYear - holidays - vacation;

  workingDaysOutput.value = workingDays;
}

document.addEventListener("DOMContentLoaded", function() {
  var daysInYearInput = document.getElementById("daysInYear");
  var holidaysInput = document.getElementById("holidays");
  var vacationInput = document.getElementById("vacation");

  daysInYearInput.addEventListener("input", calculateWorkingDays);
  holidaysInput.addEventListener("input", calculateWorkingDays);
  vacationInput.addEventListener("input", calculateWorkingDays);
});