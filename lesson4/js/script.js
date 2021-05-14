const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;

const currentDay = days[date.getDay()];
const currentMonth = months[date.getMonth()];
const today = `${currentDay}, ${date.getDate()} ${currentMonth} ${currentYear}`;
document.querySelector("#currentDate").textContent = today;

// One way to make a hamburger menu button work//
// function toggleMenu() {
//   document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
// }

let navBar = document.querySelector(".navigation");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("responsive");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.toggle("responsive");
  closeBtn.classList.toggle("responsive");
});

let banner = document.querySelector(".banner");

document.addEventListener("DOMContentLoaded", () => {
  if (currentDay === "Friday") banner.style.display = "block";
});
