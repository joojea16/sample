const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 200;
let slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector("next");

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
}
