const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navLinks.classList.add('close');
        menuToggle.classList.remove('open');
    }
    else {
        navLinks.classList.remove('close');
        navLinks.classList.add('open');
        menuToggle.classList.add('open');
    }
});