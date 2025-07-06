// Auto-slide Testimonials
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial() {
    testimonials.forEach((testi, i) => {
        testi.classList.toggle('active', i === index);
    });
    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 3000);

// Smooth Scroll (Optional)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

