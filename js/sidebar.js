document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("header-nav-button");
  const hamburgerIcon = hamburgerButton.querySelector(".hamburger-icon");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.getElementById("main-content");

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("shifted");
    document.body.classList.toggle("no-scroll");
    hamburgerIcon.classList.toggle("active");
  }

  hamburgerButton.addEventListener("click", toggleSidebar);
  hamburgerIcon.addEventListener("click", function (event) {
    // Prevent the event from bubbling up and toggling the sidebar function again in the button (as the hamburger icon is inside the button), thus stopping it from working
    event.stopPropagation();
    toggleSidebar();
  });

  document.body.addEventListener("click", function (event) {
    if (this.classList.contains("no-scroll") && !sidebar.contains(event.target) && event.target !== hamburgerButton) {
      toggleSidebar();
    }
  });
});
