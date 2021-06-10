const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
const today = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.querySelector("#currentDate").textContent = today;
let compiledDate = new Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(date);
document.querySelector("#compliedDate").textContent = compiledDate;
