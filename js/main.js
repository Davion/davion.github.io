let darkmode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


const enableDarkMode = () => {
    document.body.classList.add("darkmode");

    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");

    localStorage.setItem("darkMode", null);
}

const trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000)
}

if(darkmode === "enabled"){
    darkModeToggle.checked = true;
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkMode");
    if(darkmode !== "enabled"){
        trans();
        enableDarkMode();
    }else{
        trans();
        disableDarkMode();
    }
});