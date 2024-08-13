document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("header-nav-button");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.getElementById("main-content");

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("shifted");
    document.body.classList.toggle("no-scroll");
  }

  hamburgerButton.addEventListener("click", toggleSidebar);

  document.body.addEventListener("click", function (event) {
    if (this.classList.contains("no-scroll") && !sidebar.contains(event.target) && event.target !== hamburgerButton) {
      toggleSidebar();
    }
  });
});
