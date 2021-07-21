const alerts = document.querySelector("#alerts");
const closeBtn = document.querySelector("#close-alerts-btn");
const overlay = document.querySelector("#overlay");

window.addEventListener("load", () => {
  alerts.classList.add("open");
  overlay.classList.add("open");
});

function closeAlerts() {
  alerts.classList.remove("open");
  overlay.classList.remove("open");
}

closeBtn.addEventListener("click", closeAlerts);

overlay.addEventListener("click", closeAlerts);

document.addEventListener("keydown", (event) => {
  if (event.code == "Escape" || event.code == "Enter") {
    alerts.classList.remove("open");
    overlay.classList.remove("open");
  }
});
