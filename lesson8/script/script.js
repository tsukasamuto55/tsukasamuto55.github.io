const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
const today = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.querySelector("#currentDate").textContent = today;

// Another way to format date, but this is long.
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const currentDay = days[date.getDay()];
// const currentMonth = months[date.getMonth()];
// const today = `${currentDay}, ${date.getDate()} ${currentMonth} ${currentYear}`;

// One way to make a hamburger menu button work//
// function toggleMenu() {
//   document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
// }

// Toggle between open button and close button
let navBar = document.querySelector(".navigation");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", () => {
  navBar.classList.add("responsive");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("responsive");
});

// Showing a banner on Friday only
let banner = document.querySelector(".banner");
document.addEventListener("DOMContentLoaded", () => {
  if (date.getDay() === 5) banner.style.display = "block";
});

// week 7 activity: Web Storage API
const storedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(date);
const showNumberOfDays = document.getElementById("different-days");
const firstVisitDate = localStorage.getItem("firstVisit");
const lastVisitDate = localStorage.getItem("lastVisit");
const diffFromFirstVisit = getNumberOfDays(firstVisitDate, storedDate);
const diffNumberOfDays = getNumberOfDays(lastVisitDate, storedDate);
// Check if a value of local storage I want to use exits or not.
if (!localStorage.getItem("firstVisit")) {
  showNumberOfDays.innerHTML = "This is your first time to visit this website!";
  // Store a data of when a user first visits this site
  localStorage.setItem("firstVisit", storedDate);
}

if (!localStorage.getItem("lastVisit")) {
  // Store a data of when a user last visits this site
  localStorage.setItem("lastVisit", storedDate);
} else {
  showNumberOfDays.innerHTML =
    `First visited on ${firstVisitDate} (${diffFromFirstVisit} days ago.)<br>` +
    `Last visited on ${lastVisitDate} (${diffNumberOfDays} days ago.)`;
}

// Get the number of days between two dates //
function getNumberOfDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  // Calculating the time difference between two dates in milliseconds
  const diffInTime = endDate.getTime() - startDate.getTime();
  //  Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));
  return diffInDays;
}

localStorage.setItem("lastVisit", storedDate);

/*****************Storm Center Page ***********************/
stormSlider = document.querySelector("#storm-slider");
stormOutput = document.querySelector("#storm-output");
stormOutput.textContent = stormSlider.value;

stormSlider.oninput = () => {
  stormOutput.textContent = stormSlider.value;
};
