const imgs = document.getElementById("imgs");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const img = document.querySelectorAll(".image-card img");

let idx = 0;

function slideImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.display = block;
}

nextBtn.addEventListener("click", () => {
  idx++;
  slideImage();
});

prevBtn.addEventListener("click", () => {
  idx--;
  slideImage();
});
