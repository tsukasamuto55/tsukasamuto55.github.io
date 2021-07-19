const imgs = document.getElementById("imgs");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const img = document.querySelectorAll(".image-card img");

let idx = 0;

let interval = setInterval(autoSlide, 2500);

function autoSlide() {
  idx++;
  slideImage();
}

function slideImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 100}%)`;
}

function cancelInterval() {
  clearInterval(interval);
  interval = setInterval(autoSlide, 2500);
}

nextBtn.addEventListener("click", () => {
  idx++;
  slideImage();
  cancelInterval();
});

prevBtn.addEventListener("click", () => {
  idx--;
  slideImage();
  cancelInterval();
});
