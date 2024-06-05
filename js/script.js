// Flight Booking Js Code

const departing = document.getElementById("departing-id");
const returning = document.getElementById("returning-id");
const passegersAndClass = document.getElementById("passegersAndClass");
const passenger = document.getElementById("passenger");
const passClass = document.getElementById("pass-class");

passegersAndClass.addEventListener("click", function () {
  passegersAndClass.classList.toggle("bordered");

  passenger.classList.toggle("visible");
  passenger.classList.toggle("hidden");
  passClass.classList.toggle("pass-class");

  // departing.style.border ="none";
  // returning.style.border = "none";
  // // passenger.style.display = "flex";
});

const flightInputId = document.getElementById("flight-input-from");
const fromInput = document.getElementById("from-input");
const flightTypeId = document.getElementById("flight-type-id");
const flightDdepartId = document.getElementById("flight-depart-id");

flightInputId.addEventListener("click", function () {
  flightInputId.classList.toggle("bordered");
  flightTypeId.classList.add("visible");
  // flightTypeId.classList.toggle("hidden");
  flightDdepartId.classList.add("visible");
  // flightDdepartId.classList.toggle("hidden");
});

const flightInputTo = document.getElementById("flight-input-to");

flightInputTo.addEventListener("click", function () {
  flightInputTo.classList.add("bordered");
  flightTypeId.classList.add("visible");
  // flightTypeId.classList.toggle("hidden");
  flightDdepartId.classList.add("visible");
});

returning.addEventListener("click", function () {
  returning.classList.add("bordered");
});

departing.addEventListener("click", function () {
  departing.classList.add("bordered");
});

const btnContinue = document.getElementById("btn-continue");

btnContinue.addEventListener("click", function (event) {
  event.preventDefault();
  passenger.classList.toggle("hidden");
  passenger.classList.toggle("visible");
});

const roundTrip = document.getElementById("round-trip");
const oneWay = document.getElementById("one-way");

roundTrip.addEventListener("click", function () {
  roundTrip.checked = true;
  oneWay.checked = false;
  roundTrip.style.height = "20px";
  roundTrip.style.width = "20px";
  roundTrip.style.background = "blue";
  returning.style.display = "flex";
});

oneWay.addEventListener("click", function () {
  roundTrip.checked = false;
  oneWay.checked = true;
  oneWay.style.height = "20px";
  oneWay.style.width = "20px";
  oneWay.style.background = "blue";
  returning.style.display = "none";
});
