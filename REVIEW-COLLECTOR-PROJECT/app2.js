const themeMode = document.querySelector("#theme-mode");
const body = document.querySelector("body");

themeMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})