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
