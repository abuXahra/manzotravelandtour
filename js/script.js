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
  if ((returning.style.display = "flex")) {
    passenger.style.right = "245px";
  }
});

oneWay.addEventListener("click", function () {
  roundTrip.checked = false;
  oneWay.checked = true;
  oneWay.style.height = "20px";
  oneWay.style.width = "20px";
  oneWay.style.background = "blue";
  returning.style.display = "none";
  if ((returning.style.display = "none")) {
    passenger.style.right = "430px";
  }
});

// select Number of passengers and trip class
const passengerValue = document.getElementById("passengerValue");
const classValue = document.getElementById("classValue");

// Get references to all relevant elements
const adultValueElement = document.getElementById("adultValue");
const childrenValueElement = document.getElementById("childrenValue");
const infantValueElement = document.getElementById("infantValue");
const infantonSeatValueElement = document.getElementById("infantonSeatValue");
const passengerValueElement = document.getElementById("passengerValue");

// Function to update passenger count
function updatePassengerCount() {
  const adultCount = parseInt(adultValueElement.textContent);
  const childrenCount = parseInt(childrenValueElement.textContent);
  const infantCount = parseInt(infantValueElement.textContent);
  const infantonSeatCount = parseInt(infantonSeatValueElement.textContent);
  const totalPassengers =
    adultCount + childrenCount + infantCount + infantonSeatCount;
  passengerValueElement.textContent = totalPassengers;
}

// Add event listeners to each button to update passenger count when clicked
document
  .getElementById("adultAddBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    adultValueElement.textContent = parseInt(adultValueElement.textContent) + 1;
    updatePassengerCount();
  });

document
  .getElementById("adultReduceBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (parseInt(adultValueElement.textContent) > 0) {
      adultValueElement.textContent =
        parseInt(adultValueElement.textContent) - 1;
      updatePassengerCount();
    }
  });

document
  .getElementById("childrenAddBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    childrenValueElement.textContent =
      parseInt(childrenValueElement.textContent) + 1;
    updatePassengerCount();
  });

document
  .getElementById("childrenReduceBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (parseInt(childrenValueElement.textContent) > 0) {
      childrenValueElement.textContent =
        parseInt(childrenValueElement.textContent) - 1;
      updatePassengerCount();
    }
  });

document
  .getElementById("infantAddBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    infantValueElement.textContent =
      parseInt(infantValueElement.textContent) + 1;
    updatePassengerCount();
  });

document
  .getElementById("infantReduceBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (parseInt(infantValueElement.textContent) > 0) {
      infantValueElement.textContent =
        parseInt(infantValueElement.textContent) - 1;
      updatePassengerCount();
    }
  });

document
  .getElementById("infantonSeatAddBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    infantonSeatValueElement.textContent =
      parseInt(infantonSeatValueElement.textContent) + 1;
    updatePassengerCount();
  });

document
  .getElementById("infantonSeatReduceBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (parseInt(infantonSeatValueElement.textContent) > 0) {
      infantonSeatValueElement.textContent =
        parseInt(infantonSeatValueElement.textContent) - 1;
      updatePassengerCount();
    }
  });

const guestClass = document.getElementById("guestClass");
const businessClass = document.getElementById("businessClass");
const firstClass = document.getElementById("firstClass");

guestClass.addEventListener("click", function () {
  guestClass.checked = true;
  businessClass.checked = false;
  firstClass.checked = false;
  classValue.textContent = "Guest Class";
});

businessClass.addEventListener("click", function () {
  businessClass.checked = true;
  guestClass.checked = false;
  firstClass.checked = false;
  classValue.textContent = "Business Class";
});

firstClass.addEventListener("click", function () {
  firstClass.checked = true;
  businessClass.checked = false;
  guestClass.checked = false;
  classValue.textContent = "First Class";
});
