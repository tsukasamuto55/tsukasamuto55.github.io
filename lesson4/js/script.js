const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
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

const currentDay = weekday[date.getDay()];
const currentMonth = month[date.getMonth()];
const today = `${currentDay}, ${date.getDate()} ${currentMonth} ${currentYear}`;
document.querySelector("#currentDate").textContent = today;

// One way to make a hamburger menu button work//
// function toggleMenu() {
//   document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
// }

let navBar = document.querySelector(".navigation");
let menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("responsive");
});
