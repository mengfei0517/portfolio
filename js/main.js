// ===========================
// Navigation Bar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Mobile Menu Toggle
// ===========================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle icon
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===========================
// Smooth Scroll for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Fade-in Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card');
animatedElements.forEach(el => observer.observe(el));

// ===========================
// Active Navigation Link Highlight
// ===========================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Add CSS for active link (dynamic)
// ===========================
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--accent-color);
    }
    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===========================
// Typing Effect for Hero Subtitle (Optional)
// ===========================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// const originalText = heroSubtitle.textContent;
// window.addEventListener('load', () => {
//     typeWriter(heroSubtitle, originalText, 80);
// });

// ===========================
// Load Animation on Page Load
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Dark Mode Toggle
// ===========================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Set initial icon
updateThemeIcon(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ===========================
// Print/Console welcome message
// ===========================
console.log(`
╔═══════════════════════════════════════╗
║   Welcome to Mengfei Fan's Portfolio  ║
║   Robotics & AI Engineer              ║
║   Built with ❤️ and JavaScript        ║
╚═══════════════════════════════════════╝
`);

// ===========================
// Slideshow Functionality
// ===========================
class Slideshow {
    constructor(windowElement, images, intervalTime = 3000) {
        this.window = windowElement;
        this.container = windowElement.querySelector('.slideshow-container');
        this.images = images;
        this.currentIndex = 0;
        this.intervalTime = intervalTime;
        this.interval = null;
        this.isPaused = false;

        this.init();
    }

    init() {
        // Create image elements
        this.images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Slide ${index + 1}`;
            img.className = 'slideshow-image';
            if (index === 0) {
                img.classList.add('active');
            }
            this.container.appendChild(img);
        });

        // Start slideshow
        this.start();

        // Add hover event listeners
        this.window.addEventListener('mouseenter', () => this.pause());
        this.window.addEventListener('mouseleave', () => this.resume());
    }

    start() {
        this.interval = setInterval(() => {
            if (!this.isPaused) {
                this.next();
            }
        }, this.intervalTime);
    }

    next() {
        const images = this.container.querySelectorAll('.slideshow-image');
        images[this.currentIndex].classList.remove('active');

        this.currentIndex = (this.currentIndex + 1) % this.images.length;

        images[this.currentIndex].classList.add('active');
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

// Initialize slideshows when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Image sets by category
    const cakeImages = [
        'images/cake/cake1.jpg',
        'images/cake/cake2.jpg',
        'images/cake/cake3.jpg',
        'images/cake/cake4.jpg',
        'images/cake/cake5.jpg',
        'images/cake/cake6.jpg',
        'images/cake/cake7.jpg',
        'images/cake/cake8.jpg',
        'images/cake/cake9.jpg',
        'images/cake/cake.png'
    ];

    const sportImages = [
        'images/sport/sport1.jpg',
        'images/sport/sport2.jpg',
        'images/sport/sport3.jpg',
        'images/sport/sport4.jpg',
        'images/sport/sport5.jpg',
        'images/sport/sport6.jpg',
        'images/sport/sport7.jpg',
        'images/sport/sport8.jpg'
    ];

    const breadImages = [
        'images/bread/bread1.jpg',
        'images/bread/bread2.jpg',
        'images/bread/bread3.jpg',
        'images/bread/bread4.jpg',
        'images/bread/bread5.jpg'
    ];

    const photoImages = [
        'images/photo/photograph1.jpg',
        'images/photo/photograph2.jpg',
        'images/photo/photograph3.jpg',
        'images/photo/photograph4.jpg',
        'images/photo/photograph5.jpg',
        'images/photo/photograph6.jpg'
    ];

    // Shuffle helper
    function shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    const windows = document.querySelectorAll('.slideshow-window');

    if (windows.length === 4) {
        // 1 => cake, 2 => sport, 3 => bread, 4 => photo
        new Slideshow(windows[0], shuffle(cakeImages), 2500);
        new Slideshow(windows[1], shuffle(sportImages), 3000);
        new Slideshow(windows[2], shuffle(breadImages), 3500);
        new Slideshow(windows[3], shuffle(photoImages), 2800);
    }
});