const themeBtn = document.getElementById("theme-btn");

// Check system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Load theme from localStorage or use system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.toggle("dark", savedTheme === "dark");
} else if (prefersDark) {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save to localStorage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const mobileMenuButton = document.getElementById("mobile-menu");
const mobileMenuDialog = document.getElementById("mobile-menu-dialog");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenuDialog.style.display =
    mobileMenuDialog.style.display === "block" ? "none" : "block";
});

closeMobileMenuButton.addEventListener("click", () => {
  mobileMenuDialog.style.display = "none";
});
