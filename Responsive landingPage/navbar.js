const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        navbar.classList.add('open');
        menuOpen = true;
    } else {
        navbar.classList.remove('open');
        menuOpen = false;
    }
});
