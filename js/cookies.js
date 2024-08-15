const cookiesApp = document.querySelector(".cookies-app");
const acceptCookiesButton = document.getElementById("accept-cookies-button");
const manageConsentButton = document.querySelector(".manage-consent-button");

// Function to set a cookie

const setCookie = (name, value) => {
  document.cookie = `${name}=${value};path=/`;
};

// Check if the cookie exists and hide the cookies app if it does

if (document.cookie.includes("cookiesAccepted")) {
  cookiesApp.style.display = "none";
}

// Event listener for the accept cookies button to run the function and hide the cookies app

acceptCookiesButton.addEventListener("click", () => {
  setCookie("cookiesAccepted", true);
  cookiesApp.style.display = "none";
});

// Event listener for the manage consent button to activate the cookies app

manageConsentButton.addEventListener("click", () => {
  cookiesApp.style.display = "block";
});
