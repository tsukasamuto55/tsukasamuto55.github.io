const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

window.addEventListener("load", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.code == "Escape") {
    modal.classList.remove("open");
    overlay.classList.remove("open");
  }
});
