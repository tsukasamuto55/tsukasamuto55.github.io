const imgs = document.getElementById("imgs");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dot = document.querySelectorAll(".dot");
const img = document.querySelectorAll(".image-card img");

let idx = 0;

function slideImage(idx) {
  img[idx].style.zIndex = -idx * "15";
}

dot[0].addEventListener("click", () => {
  slideImage(0);
});

dot[1].addEventListener("click", () => {
  slideImage(1);
});

dot[2].addEventListener("click", () => {
  slideImage(2);
});
