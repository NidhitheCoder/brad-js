// listen submit
document
  .querySelector("#loan-form")
  .addEventListener("submit", calculateResult);

// function caluculateResult
function calculateResult(e) {
  console.log("Calculating....");
  // UI VARS
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayment = parseFloat(years.value) * 12;

  // compute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayment);
  const monthly = (principal * x * calculateInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayment).toFixed(2);
    totalInterest.value = (monthly * calculatePayment - principal).toFixed(2);
  } else {
    // console.log("please check your  numbers");
    showError("Please check your numbers");
  }
  e.preventDefault();
}

// show error
function showError(error) {
  // create a div
  const errorDiv = document.createElement("div");

  // get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // add class
  errorDiv.className = "alert alert-danger";

  // create  text node and append
  errorDiv.appendChild(document.createTextNode(error));

  // insert errordiv above heading
  card.insertBefore(errorDiv, heading);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// clear error
// function clearError() {lister
document.querySelector(".alert").remove();
