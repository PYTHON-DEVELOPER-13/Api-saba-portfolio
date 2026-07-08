// ============================================
// SMOOTH SCROLLING ENHANCEMENT
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// NAVBAR ANIMATION ON SCROLL
// ============================================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow effect on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(113, 201, 206, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(113, 201, 206, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// SECTION VISIBILITY ANIMATION
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeIn 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe elements with animation data attributes
document.querySelectorAll('[data-animation]').forEach(el => {
    observer.observe(el);
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================
window.addEventListener('scroll', updateActiveNavLink);

function updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--color-teal)';
        } else {
            link.style.color = 'var(--color-gray)';
        }
    });
}

// ============================================
// MOBILE HAMBURGER MENU
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// MOUSE FOLLOW EFFECT FOR PROFILE FRAME
// ============================================
const profileFrame = document.querySelector('.profile-frame');

if (profileFrame) {
    document.addEventListener('mousemove', function(e) {
        const rect = profileFrame.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = 20;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        profileFrame.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', function() {
        profileFrame.style.transform = 'translate(0, 0)';
    });
}

// ============================================
// STAGGERED TEXT ANIMATION
// ============================================
function animateText(element, delay = 0) {
    const words = element.textContent.split(' ');
    element.innerHTML = '';
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = word + ' ';
        span.style.animationDelay = (delay + index * 0.1) + 's';
        element.appendChild(span);
    });
}

// ============================================
// SKILL TAG INTERACTION
// ============================================
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statNumbers.forEach(statNum => {
                const target = parseInt(statNum.textContent);
                animateCounter(statNum, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statNumbers.length > 0) {
    statsObserver.observe(statNumbers[0].closest('.about-stats'));
}

// ============================================
// PARALLAX EFFECT FOR FLOATING SHAPES
// ============================================
const floatingShapes = document.querySelectorAll('.shape');

if (floatingShapes.length > 0) {
    window.addEventListener('mousemove', function(e) {
        floatingShapes.forEach((shape, index) => {
            const move = (e.clientX * (index + 1)) / 100;
            shape.style.transform = `translateX(${move}px)`;
        });
    });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const revealElements = document.querySelectorAll(
    '.project-card, .skill-category, .stat-card, .timeline-item, .contact-method'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// ============================================
// RIPPLE EFFECT ON BUTTONS
// ============================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple style
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce scroll events for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to parallax effect
const debouncedParallax = debounce(function(e) {
    floatingShapes.forEach((shape, index) => {
        const move = (e.clientX * (index + 1)) / 100;
        shape.style.transform = `translateX(${move}px)`;
    });
}, 16);

window.addEventListener('mousemove', debouncedParallax);

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================
// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .nav-link:focus,
    .btn:focus,
    a:focus {
        outline: 2px solid var(--color-teal);
        outline-offset: 2px;
    }

    button:focus {
        outline: 2px solid var(--color-teal);
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================
const footerYear = document.querySelector('.footer p:first-child');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.textContent = `© ${year} Saba Sohail Mirza. All rights reserved.`;
}

console.log('[v0] Portfolio loaded successfully with all animations and interactions enabled!');