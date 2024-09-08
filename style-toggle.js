const toggleButton = document.getElementById("toggle-button");
const stylesheet = document.getElementById("theme-stylesheet");

const stylesheets = ["style_primary.css", "style_secondary.css"];

let currentStylesheet = localStorage.getItem("currentStylesheet")
  ? parseInt(localStorage.getItem("currentStylesheet"))
  : 0;

stylesheet.setAttribute("href", stylesheets[currentStylesheet]);

toggleButton.addEventListener("click", () => {
  currentStylesheet = (currentStylesheet + 1) % stylesheets.length;
  stylesheet.setAttribute("href", stylesheets[currentStylesheet]);
  localStorage.setItem("currentStylesheet", currentStylesheet);
});
