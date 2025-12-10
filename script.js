// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all activity cards, assignment items, and material categories
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.activity-card, .assignment-item, .material-category, .content-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Handle file download click events (for analytics or tracking purposes)
    document.querySelectorAll('.file-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const fileName = this.textContent.trim();
            // Here you can add analytics tracking or other functionality
            if (typeof window !== 'undefined' && window.console && window.console.log) {
                // Only log in development environment
            }
        });
    });
});



// Mobile menu toggle (if needed in future)
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        }
        
        lastScroll = currentScroll;
    });
}

initMobileMenu();

// Carousel functionality
let currentSlide = 0;
const slides = [
    'files/galeria/20250904_083157.jpg',
    'files/galeria/20251113_104750.jpg',
    'files/galeria/20251113_112607.jpg',
    'files/galeria/IMG-20250903-WA0071.jpg',
    'files/galeria/IMG-20250903-WA0100.jpg',
    'files/galeria/IMG-20251117-WA0194.jpg',
    'files/galeria/IMG-20251117-WA0245.jpg',
    'files/galeria/IMG-20251117-WA0351.jpg',
    'files/galeria/IMG-20251118-WA0337.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

function initCarousel() {
    const carouselIndicators = document.getElementById('carouselIndicators');
    if (carouselIndicators) {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => goToSlide(index);
            carouselIndicators.appendChild(dot);
        });
    }
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const carouselImage = document.getElementById('carouselImage');
    const slideCounter = document.getElementById('slideCounter');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (carouselImage) {
        carouselImage.src = slides[currentSlide];
        carouselImage.style.animation = 'fadeIn 0.5s ease-in-out';
    }
    
    if (slideCounter) {
        slideCounter.textContent = currentSlide + 1;
    }
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}
