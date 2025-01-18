// Get elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const linkItems = document.querySelectorAll('#nav-links a');

// Scroll event to change navbar styles
window.onscroll = function() {
    if (window.scrollY > 50) {  // When scrolled 50px or more
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Smooth scrolling for anchor links
linkItems.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Toggle hamburger menu on mobile
hamburger.addEventListener('click', function() {
    navbar.classList.toggle('open');
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
});