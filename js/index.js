document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', (e) => {
        e.preventDefault(); 

        const name = profile.getAttribute('data-name');
        const img = profile.getAttribute('data-img');

        console.log("SALVANDO:", name, img); 

        localStorage.setItem('userName', name);
        localStorage.setItem('userImg', `/Projeto-Netlix/${img}`);

        
        window.location.href = "./netflix-plataform-main/netflix-plataform-main/catalogo/catalogo.html";
    });
});
