document.addEventListener ("DOMContentLoaded", () => {
    // sleccion de elementos DOM
    const toggleButton = document.querySelector(".navbar-toggle-btn")
    const mobileMenu = document.querySelector(".nav-list-mobile")
    
    // funciones de si o no se usa el botn de menu
    const toggleMenu = () => {
        mobileMenu.style.display =
        mobileMenu.style.display == "none" || mobileMenu.style.display === ""
        ? "flex"
        : "none"
    }

    const hideMenuResize = () => {
        mobileMenu.style.display = "none"
    }

    toggleButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", hideMenuResize);
    window.addEventListener("load", hideMenuResize);
});