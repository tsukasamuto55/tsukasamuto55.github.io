const lastModif = document.lastModified;
document.querySelector("#currentDate").textContent = lastModif;

const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
