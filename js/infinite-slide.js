console.log("hello from infinite-slide.js");

function initInfiniteCarousel(sectionClass, itemClass) {
  const carousel = document.querySelector(`.${sectionClass} .flex`);
  const items = carousel.querySelectorAll(`.${itemClass}`);

  // Clone the first set of items and append them to the end
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  function shiftToNextItem() {
    // Check if any item is being hovered
    const isHovered = carousel.querySelector(`.${itemClass}:hover`);
    if (isHovered) return; // Do nothing if an item is hovered

    const firstItem = carousel.querySelector(`.${itemClass}`);
    const itemWidth = firstItem.offsetWidth + parseInt(getComputedStyle(firstItem).marginRight);

    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${itemWidth}px)`;

    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.appendChild(firstItem);
      carousel.style.transform = "translateX(0)";
      // Force reflow
      carousel.offsetHeight;
      carousel.style.transition = "transform 0.5s ease-in-out";
    }, 500);
  }

  setInterval(shiftToNextItem, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  initInfiniteCarousel("partners-section", "partners-slide-item");
  initInfiniteCarousel("clients-section", "clients-item");
});
