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

let navBar = document.querySelector(".navigation");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", () => {
  navBar.classList.add("responsive");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("responsive");
});

let banner = document.querySelector(".banner");
document.addEventListener("DOMContentLoaded", () => {
  if (date.getDay() === 5) banner.style.display = "block";
});
