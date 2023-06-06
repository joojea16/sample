const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["prev", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
  constructor(container, item, controls) {
    this.CarouselContainer = container;
    this.CarouselControls = controls;
    this.CarouselArray = [...item];
  }

  updateGallery() {
    this.CarouselArray.forEach((el) => {
      el.classList.remove("gallery-item1");
      el.classList.remove("gallery-item2");
      el.classList.remove("gallery-item3");
      el.classList.remove("gallery-item4");
      el.classList.remove("gallery-item5");
    });

    this.CarouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className == "gallery-controls-prev") {
      this.CarouselArray.unshift(this.CarouselArray.pop());
    } else {
      this.CarouselArray.push(this.CarouselArray.shift());
    }
    this.updateGallery();
  }
  setControls() {
    this.CarouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(
        document.createElement("button")
      ).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText =
        control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(
  galleryContainer,
  galleryItems,
  galleryControls
);

exampleCarousel.setControls();
exampleCarousel.useControls();
