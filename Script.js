// ========================== SELECTORS ==========================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// ========================== NAVBAR TOGGLE ==========================
menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// ========================== SCROLL BEHAVIOR ==========================
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    // Highlight active nav link
    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(
                `header nav a[href*='${id}']`
            );
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', scrollY > 100);

    // Close mobile menu while scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// ========================== SCROLL REVEAL ==========================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ========================== TYPED JS ==========================
new Typed('.multiple-text', {
    strings: ['Developer', 'Designer', 'Writer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ========================== EMAILJS – CONTACT FORM ==========================
function sendMail() {
    const parms = {
        name: document.getElementById("name")?.value,
        email: document.getElementById("email")?.value,
        phone: document.getElementById("phone")?.value,
        subject: document.getElementById("subject")?.value,
        message: document.getElementById("message")?.value,
    };

    emailjs.send("service_933h03d", "template_rhc5cfm", parms)
        .then(() => {
            alert("Your message has been sent successfully!");
            document.getElementById("contactForm")?.reset();
        })
        .catch((error) => {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });
}

// ========================== DARK MODE TOGGLE ==========================
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('i');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-mode', isLight);

        icon.classList.remove(isLight ? 'bx-moon' : 'bx-sun');
        icon.classList.add(isLight ? 'bx-sun' : 'bx-moon');

        localStorage.setItem('theme', theme);
    }

    applyTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-mode');
        applyTheme(isLight ? 'dark' : 'light');
    });
});






