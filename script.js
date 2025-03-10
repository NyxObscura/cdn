// Efek hover animasi pada link footer
const footerLinks = document.querySelectorAll('.footer-links a');

footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.05)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});