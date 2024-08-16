console.log("hello from infinite-slide.js");

function initInfiniteCarousel() {
  const carousel = document.querySelector(".partners-section .flex");
  const items = carousel.querySelectorAll(".partners-slide-item");
  const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

  // Clone the first set of items and append them to the end
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  let position = 0;

  function shiftLeft() {
    position -= itemWidth;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${position}px)`;

    if (position <= -itemWidth * items.length) {
      setTimeout(() => {
        carousel.style.transition = "none";
        position = 0;
        carousel.style.transform = `translateX(${position}px)`;

        void carousel.offsetWidth;

        carousel.style.transition = "transform 0.5s ease-in-out";
      }, 500);
    }
  }

  setInterval(shiftLeft, 1000);
}

document.addEventListener("DOMContentLoaded", initInfiniteCarousel);
