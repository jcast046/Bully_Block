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

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    });
});