// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        
        // Toggle icon between bars and times (X)
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(252, 250, 248, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    } else {
        navbar.style.backgroundColor = 'rgba(252, 250, 248, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
    }
});

// Simple reveal effect on scroll
const revealElements = document.querySelectorAll('.service-card, .stat-card, .mission-text');

// Initially hide elements by adding a small transform and opacity difference
// You could also do this fully via CSS classes, but here we do it dynamically for simplicity
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
});

const checkVisibility = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', checkVisibility);
// Trigger once on load
checkVisibility();
