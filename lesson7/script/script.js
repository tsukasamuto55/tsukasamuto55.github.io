const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.querySelector("#currentDate").textContent = fulldate;

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
if (!localStorage.getItem("firstVisit")) {
  // Store a data of when a user first visits this site
  localStorage.setItem("firstVisit", fulldate);
}

if (!"lastVisit" in localStorage) {
  // Store a data of when a user last visits this site
  localStorage.setItem("lastVisit", fulldate);
}

const firstVisitDate = localStorage.getItem("firstVisit");
const lastVisitDate = localStorage.getItem("lastVisit");
const diffFromFirstVisit = getNumberOfDays(firstVisitDate, fulldate);
const diffNumberOfDays = getNumberOfDays(lastVisitDate, fulldate);

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

const showNumberOfDays = document.getElementById("different-days");

if (diffNumberOfDays === 1) {
  showNumberOfDays.textContent = `(You first visited this site on ${firstVisitDate} which was ${diffFromFirstVisit} day ago.<br> Your last visit on this site was ${lastVisitDate} which was ${diffNumberOfDays} day ago.)`;
} else {
  showNumberOfDays.innerHTML =
    `(You first visited this site on ${firstVisitDate} which was ${diffFromFirstVisit} days ago.<br>` +
    `Your last visit on this site was ${lastVisitDate} which was ${diffNumberOfDays} days ago.)`;
}

localStorage.setItem("lastVisit", fulldate);
