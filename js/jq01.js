let mainText = document.querySelector("h1");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 200) {
    mainText.style.animation = "disa 1s ease-out forwards";
  } else {
    mainText.style.animation = "slide 1s ease-out";
  }
});
