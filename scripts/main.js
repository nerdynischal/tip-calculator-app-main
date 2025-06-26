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

//calculate the amounts to display
function calculateEverything() {
  const totalTip = calculateTotalTip(totalBill, tipPercent);
  const tipPerPerson = calculateTipPerPerson(totalTip, totalPeople);
  const billPerPerson = calculateBillPerPerson(totalBill, totalPeople);
  const totalPerPerson = calculateTotalPerPerson(tipPerPerson, billPerPerson);

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

function assignBillValue() {
  totalBill = this.value;
  calculateEverything();
}

function assignTotalPeople() {
  totalPeople = this.value;
  calculateEverything();
}

function assignTip() {
  tipPercent = this.value;
  calculateEverything();
}

function uncheckRadioOptions() {
  tipRadioInput.forEach((option) => {
    option.checked = false;
  });
}

//to validate
//bill
//custom
//people -- cannot be zero
//should be postive Number if not error message
