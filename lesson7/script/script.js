const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);

const today = document.querySelector("#currentDate");
today.textContent = fulldate;

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

// Check if a value of local storage I want to use exits or not.
if (!localStorage.getItem("currentDate")) {
  // Store a data of when a user visits this site
  localStorage.setItem("currentDate", fulldate);
}

let storedDate = localStorage.getItem("currentDate");

// Get the number of days between two dates //
function getNumberOfDays(first, second) {
  const date1 = new Date(first);
  const date2 = new Date(second);
  // one day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  //  Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

let diffNumberOfDays = getNumberOfDays(storedDate, fulldate);
let showNumberOfDays = document.getElementById("different-days");
console.log(diffNumberOfDays);

if (diffNumberOfDays === 1) {
  showNumberOfDays.textContent = `(You first visited this site on ${storedDate} which was ${diffNumberOfDays} day ago.)`;
} else {
  showNumberOfDays.textContent = `(You first visited this site on ${storedDate} which was ${diffNumberOfDays} days ago.)`;
}
