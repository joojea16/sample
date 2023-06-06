let hunder = document.getElementById("hunder");
let hmenu = document.querySelectorAll("nav:nth-child(1) a");

hmenu.forEach((menu) => menu.addEventListener("mouseenter", (e) => horizon(e)));

function horizon(e) {
  hunder.style.left = e.currentTarget.offsetLeft + "px";
  hunder.style.width = e.currentTarget.offsetWidth + "px";
  hunder.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

let vunder = document.getElementById("vunder");
let vmenu = document.querySelectorAll("nav:nth-child(2) a");

vmenu.forEach((menu) => menu.addEventListener("click", (e) => hei(e)));

function hei(e) {
  vunder.style.left = e.currentTarget.offsetLeft + "px";
  vunder.style.width = e.currentTarget.offsetWidth + "px";
  vunder.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}
