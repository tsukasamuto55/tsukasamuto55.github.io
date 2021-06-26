// Showing a banner on Friday only
let banner = document.querySelector(".banner");
document.addEventListener("DOMContentLoaded", () => {
  if (date.getDay() === 5) banner.style.display = "block";
});
