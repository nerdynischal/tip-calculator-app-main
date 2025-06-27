let totalBill = 0;
let totalPeople = 1; //minimum of one
let tipPercent = 5; //get from user, can also be custom amount

function calculateTotalTip(totalBill, tipPercent) {
  return totalBill * (tipPercent / 100);
}

function calculateTipPerPerson(totalTip, totalPeople) {
  return totalTip / totalPeople;
}

function calculateBillPerPerson(totalBill, totalPeople) {
  return totalBill / totalPeople;
}

function calculateTotalPerPerson(tipPerPerson, billPerPerson) {
  return tipPerPerson + billPerPerson;
}

function roundTwoDecimalPlaces(num) {
  return num.toFixed(2);
}

let tipAmountDisplay = document.querySelector(".form__tip-value");
let totalAmountDisplay = document.querySelector(".form__total-value");

//calculate the amounts to display
function calculateEverything() {
  const totalTip = calculateTotalTip(totalBill, tipPercent);
  const tipPerPerson = calculateTipPerPerson(totalTip, totalPeople);
  const billPerPerson = calculateBillPerPerson(totalBill, totalPeople);
  const totalPerPerson = calculateTotalPerPerson(tipPerPerson, billPerPerson);

  tipAmountDisplay.textContent = "$" + roundTwoDecimalPlaces(tipPerPerson);
  totalAmountDisplay.textContent = "$" + roundTwoDecimalPlaces(totalPerPerson);

  console.log("Total tip per person: " + roundTwoDecimalPlaces(tipPerPerson));
  console.log("Total per person: " + roundTwoDecimalPlaces(totalPerPerson));
  console.log("Tip percent " + tipPercent);
}

//get input data from UI
const billInput = document.getElementById("totalbill");
const peopleInput = document.getElementById("totalpeople");
const tipRadioInput = document.getElementsByName("tip");
const customTipInput = document.getElementById("customtip");

billInput.addEventListener("keyup", assignBillValue);
peopleInput.addEventListener("keyup", assignTotalPeople);
tipRadioInput.forEach((option) => {
  option.addEventListener("change", assignTip);
});
customTipInput.addEventListener("click", uncheckRadioOptions);
customTipInput.addEventListener("keyup", assignTip);

const errorMsgs = document.querySelectorAll(".form__error-msg");

function assignBillValue() {
  if (validateInputs(this.value) == false) {
    errorMsgs[0].style.display = "initial";
    billInput.style.borderColor = "var(--red-500)";
    return;
  }
  errorMsgs[0].style.display = "none";
  billInput.style.borderColor = "var(--grey-50)";

  totalBill = this.value;
  calculateEverything();
}

function assignTotalPeople() {
  if (validateInputs(this.value) == false) {
    errorMsgs[1].style.display = "initial";
    peopleInput.style.borderColor = "var(--red-500)";
    return;
  }
  errorMsgs[1].style.display = "none";
  peopleInput.style.borderColor = "var(--grey-50)";

  totalPeople = this.value;
  calculateEverything();
}

function assignTip() {
  if (validateInputs(this.value) == false) {
    return;
  }
  tipPercent = this.value;
  calculateEverything();
}

function uncheckRadioOptions() {
  tipRadioInput.forEach((option) => {
    option.checked = false;
  });
}

function validateInputs(input) {
  if (isNaN(input)) {
    console.log("Please enter a number");
    return false;
  }
  if (input <= 0) {
    console.log("Please enter a number greater than 1");
    return false;
  }
}

const resetButton = document.querySelector(".form__reset-button");
resetButton.addEventListener("click", () => {
  tipAmountDisplay.textContent = "$0.00";
  totalAmountDisplay.textContent = "$0.00";
});
