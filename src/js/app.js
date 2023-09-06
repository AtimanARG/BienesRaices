document.addEventListener("DOMContentLoaded", function() {
    eventListener();
    darkMode();
});

function darkMode() {

    /** Cambiar a modo oscuro, replicando modo de Windows **/
    const prefiereDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    if(prefiereDarkMode.matches){
        document.body.classList.add("dark-mode");
    }
    else {
        document.body.classList.remove("dark-mode");
    }

    /* Modo automatico -> Cambia al instante que el usuario cambia el modo claro/oscuro de Windows */
    prefiereDarkMode.addEventListener("change", function() {
        if(prefiereDarkMode.matches){
            document.body.classList.add("dark-mode");
        }
        else {
            document.body.classList.remove("dark-mode");
        }
    });
    /** FIN **/

    const botonDarkMode = document.querySelector(".dark-mode-boton");
    botonDarkMode.addEventListener("click", function() {
        const body = document.querySelector("body");
        body.classList.toggle("dark-mode");
    });
}

function eventListener(){
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector(".navegacion");
    navegacion.classList.toggle("mostrar");
}