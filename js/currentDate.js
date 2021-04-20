// toLocaleDateString
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

document.querySelector("span").textContent = new Date().toLocaleDateString(
  "en-US",
  options
);

`${dayName}, ${todaysdate.getDate()} ${monthName}, ${todaysdate.getFullYear()}`;
