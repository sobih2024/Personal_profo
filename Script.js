// ========================== toggle icon navbar======================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

// ==========================scroll section avtive Link======================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        };
    });


    // ================================ sticky navbar =================================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



    // ================================ remove Toggle Icon and navbar when click navbar link (scroll) =================================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


// ================================ Scroll Reveal =================================

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ================================ typed Js =================================
const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Designer' , 'writer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});


// ======================================contact form =====================

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        
    }
    emailjs.send("service_933h03d", "template_rhc5cfm", parms).then(function(){
        alert("Your message has been sent successfully!");
        document.getElementById('contactForm').reset();
    })
    .catch(function(error){
        alert("Failed to send the message. Please try again later.");
        console.error("Error sending email:", error);
    });
    
    
}
// ===========================================================Script for Dark Mode Toggle=========================================

// Theme toggle logic
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return; // Prevent errors if button not found
    const icon = toggleBtn.querySelector('i');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    function setTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
        } else {
            document.body.classList.remove('light-mode');
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
        }
        localStorage.setItem('theme', theme);
    }
    setTheme(savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light'));
    toggleBtn.onclick = () => {
        const isLight = document.body.classList.contains('light-mode');
        setTheme(isLight ? 'dark' : 'light');
    };
});








