let autoRun = setInterval(changeSlide, 3000);

function changeSlide() {
  const radioButtons = [...document.querySelectorAll(".slide-radios")];
  const currentIndex = radioButtons.findIndex((rb) => rb.checked);
  radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
}
