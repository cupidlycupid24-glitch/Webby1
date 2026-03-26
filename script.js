// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Animate sections on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Simple carousel slider
let carousel = document.getElementById('carousel');
let images = carousel.querySelectorAll('img');
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}, 3000);