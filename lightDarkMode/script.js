import { get } from "./utilities.js";

const themeValue = document.documentElement;
const input = get("input");
const modeIcon = get(".mode-icon");
const modeText = get(".mode-text");
const image1 = get(".image1");
const image2 = get(".image2");
const image3 = get(".image3");

// images-Light-Dark
const imageMode = (color) => {
  image1.src = `./img/image1-${color}.svg`;
  image2.src = `./img/image2-${color}.svg`;
  image3.src = `./img/image3-${color}.svg`;
};
// Light-Darke-differentiation
const lightDark = (isDark) => {
  isDark === "dark"
    ? modeIcon.classList.replace("fa-sun", "fa-moon")
    : modeIcon.classList.replace("fa-moon", "fa-sun");
  modeText.textContent = isDark === "dark" ? "dark mode" : "light mode";
  isDark === "dark" ? imageMode("dark") : imageMode("light");
};

// Light-Dark-Controls
const switchTheme = (e) => {
  const switchDark = e.target;
  if (switchDark.checked) {
    themeValue.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    lightDark("dark");
  } else {
    themeValue.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightDark("light");
  }
};
// eventListener
input.addEventListener("change", switchTheme);

// localStorge
const themes = localStorage.getItem("theme");
if (themes) {
  themeValue.setAttribute("data-theme", themes);
}
if (themes === "dark") {
  input.checked = true;
  lightDark("dark");
}
