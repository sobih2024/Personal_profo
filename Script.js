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
    strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});


// ======================================contact form =====================

function sendMail()
 {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        recipient: "email"
    };

    emailjs.send("service_933h03d", "template_rhc5cfm", parms)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Thank you for your message!!");
            // document.getElementById('contactForm').reset(); // Reset the form only after the email is successfully sent
        }, 
        
        function (error) {
            console.log("FAILED...", error);
            alert("Failed to send the message. Please try again.");
        });

        document.getElementById('contactForm').reset();
}













//---------------------------------------------------test--------------------------------------

// function sendMail() {
//     let parms = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,

//     };
//     email
//     // emailjs.send("service_933h03d", "template_rhc5cfm", parms).then(alert("Thank you for your message!"))
// }


// document.getElementById('contactForm').reset();






