const darkModeToggle = document.querySelector("#switch");
const sunIcon = document.querySelector("#sunIcon");
const moonIcon = document.querySelector("#moonIcon");


darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
});