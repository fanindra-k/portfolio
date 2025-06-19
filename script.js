const sideMenu = document.querySelector("#sideMenu");
const navBaar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const web3forms = "7910381d-6332-4425-b318-adbd8b25087b";

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  console.log("Scroll event fired");
  if (scrollY > 50) {
    navBaar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBaar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

// ----------Light Mode -----------
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}
function showFullDescription(btn) {
  document.getElementById("fullDescriptionText").textContent =
    btn.getAttribute("data-full");
  const gitUrl = btn.getAttribute("data-git");
  const gitLink = document.getElementById("fullDescriptionGit");
  if (gitUrl) {
    gitLink.href = gitUrl;
    gitLink.style.display = "inline-flex";
  } else {
    gitLink.style.display = "none";
  }
  document.getElementById("fullDescriptionModal").classList.remove("hidden");
}

// Close modal on overlay or close button click
function closeFullDescription(event) {
  if (!event || event.target === event.currentTarget) {
    document.getElementById("fullDescriptionModal").classList.add("hidden");
  }
}
