// ========================== SELECTORS ==========================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// ========================== MENU TOGGLE ==========================
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// ========================== REMOVE MENU ON SCROLL ==========================
window.onscroll = () => {
    navbar.classList.remove('active');

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Active navigation link
    document.querySelectorAll('section').forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });
};

// ========================== SCROLLREVEAL ANIMATIONS ==========================
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ========================== TYPED TEXT ANIMATION ==========================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Software Developer', 'IT Technician'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});

// ========================== THEME TOGGLE ==========================
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Change icon
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});

