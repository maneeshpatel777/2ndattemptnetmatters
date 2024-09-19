//console.log("hello from sticky.js");

let lastScrollTop = 0;
const originalHeader = document.getElementById("header");
const stickyHeader = document.createElement("div");
stickyHeader.className = "sticky-header";
stickyHeader.innerHTML = originalHeader.innerHTML;

document.body.appendChild(stickyHeader);

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const originalHeaderHeight = originalHeader.offsetHeight;

  if (scrollTop === 0) {
    stickyHeader.classList.remove("visible");
    stickyHeader.style.top = "-100%";
    stickyHeader.style.transition = "none";
  } else if (scrollTop > lastScrollTop) {
    if (scrollTop > originalHeaderHeight) {
      stickyHeader.classList.remove("visible");
      stickyHeader.style.top = "-100%";
    }
  } else {
    if (scrollTop > originalHeaderHeight) {
      stickyHeader.classList.add("visible");
      stickyHeader.style.top = "0";
      stickyHeader.style.transition = "";
    }
  }

  if (scrollTop !== 0 && stickyHeader.style.transition === "none") {
    stickyHeader.style.transition = "";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
