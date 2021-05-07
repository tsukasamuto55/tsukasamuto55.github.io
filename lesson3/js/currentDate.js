// // // Different way to display the last modified date
// const options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// };

// const lastModified = new Date().toLocaleDateString("en-US", options);

// document.querySelector("span").textContent = lastModified;

const lastModif = document.lastModified;
document.querySelector("#currentDate").textContent = lastModif;

const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
