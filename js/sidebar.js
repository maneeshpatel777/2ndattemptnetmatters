console.log("hello from sidebar.js");

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButtons = document.querySelectorAll("#header-nav-button, .sticky-header #header-nav-button");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.getElementById("main-content");
  const stickyHeader = document.querySelector(".sticky-header");

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("shifted");
    document.body.classList.toggle("no-scroll");
    if (stickyHeader) {
      stickyHeader.classList.toggle("shifted");
      stickyHeader.classList.toggle("no-scroll");
    }
    hamburgerButtons.forEach((button) => button.querySelector(".hamburger-icon").classList.toggle("active"));
  }

  hamburgerButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleSidebar();
    });
    const hamburgerIcon = button.querySelector(".hamburger-icon");
    hamburgerIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleSidebar();
    });
  });

  document.body.addEventListener("click", function (event) {
    if (this.classList.contains("no-scroll") && !sidebar.contains(event.target) && event.target !== hamburgerButtons[0]) {
      toggleSidebar();
    }
  });
});
