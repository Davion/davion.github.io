const darkModeToggle = document.querySelector("#dark-mode-icon");
const sunIcon = document.querySelector("#sunIcon");
const moonIcon = document.querySelector("#moonIcon");


darkModeToggle.addEventListener("click", () => {
    sunIcon.classList.toggle("hide");
    sunIcon.classList.toggle("show");
    moonIcon.classList.toggle("hide");
    moonIcon.classList.toggle("show");
});