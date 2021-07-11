// Toggle between open button and close button
let navBtn = document.querySelectorAll(".nav-btn");
let menuBtn = document.querySelector("#menu");
let closeButton = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", () => {
  for (const button of navBtn) {
    button.classList.add("responsive");
  }
});

closeButton.addEventListener("click", () => {
  for (const button of navBtn) {
    button.classList.remove("responsive");
  }
});
