import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});

document.querySelectorAll(".carousel").forEach(carousel => {
    const row = carousel.querySelector(".movie-row");
    const btnLeft = carousel.querySelector(".btn.left");
    const btnRight = carousel.querySelector(".btn.right");

    btnRight.addEventListener("click", () => {
        row.scrollBy({
            left: row.clientWidth,
            behavior: "smooth"
        });
    });

    btnLeft.addEventListener("click", () => {
        row.scrollBy({
            left: -row.clientWidth,
            behavior: "smooth"
        });
    });
});

document.querySelectorAll(".carousel").forEach(carousel => {
    const row = carousel.querySelector(".movie-row");
    const btnLeft = carousel.querySelector(".btn.left");
    const btnRight = carousel.querySelector(".btn.right");

    btnRight.addEventListener("click", () => {
        row.scrollBy({ left: row.clientWidth, behavior: "smooth" });
    });

    btnLeft.addEventListener("click", () => {
        row.scrollBy({ left: -row.clientWidth, behavior: "smooth" });
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem('userName');
    const img = localStorage.getItem('userImg');

    if (name) {
        document.getElementById('userName').innerText = name;
    }

    if (img) {
        document.getElementById('userImg').src = img;
    }
});

document.getElementById("userName").onclick = function () {
    window.location.href = "/Projeto-Netlix/index.html";
};
