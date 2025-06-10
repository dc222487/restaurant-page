import "./styles.css";
import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";

// Clear current content
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

// Setup navigation
function setupNav() {
  document.getElementById("homeBtn").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.getElementById("menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.getElementById("contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

// Initial page load
document.addEventListener("DOMContentLoaded", () => {
  loadHome(); // Load home by default
  setupNav();
});
