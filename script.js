const manageBtn = document.getElementById("manageProfiles");
const body = document.body;

let manageMode = false;

manageBtn.addEventListener("click", () => {
    manageMode = !manageMode;

    if (manageMode) {
        body.classList.add("manage-mode");
        manageBtn.textContent = "Concluir";
    } else {
        body.classList.remove("manage-mode");
        manageBtn.textContent = "Gerenciar perfis";
    }
});

const themeBtn = document.getElementById("toggleTheme");

// carregar tema salvo
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.add("light-mode");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// alternar tema
themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    const isLight = body.classList.contains("light-mode");

    if (isLight) {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "🌙";
    }
});