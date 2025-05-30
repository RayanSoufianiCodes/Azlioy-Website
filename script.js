const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Scan Animation
const startScanBtn = document.getElementById('startScanBtn');
const scanProgress = document.getElementById('scanProgress');
const progressBar = document.getElementById('progressBar');
const safeResult = document.getElementById('safeResult');
const threatResult = document.getElementById('threatResult');

startScanBtn.addEventListener('click', () => {
    safeResult.style.display = 'none';
    threatResult.style.display = 'none';
    progressBar.style.width = '0%';
    scanProgress.style.display = 'block';
    startScanBtn.disabled = true;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            startScanBtn.disabled = false;
            
            const showThreat = Math.random() > 0.5;
            if (showThreat) {
                threatResult.style.display = 'block';
            } else {
                safeResult.style.display = 'block';
            }
        }
    }, 50);
});

const sliderDots = document.querySelectorAll('.slider-dot');
const slides = document.querySelectorAll('.testimonial-slide');

sliderDots.forEach(dot => {
    dot.addEventListener('click', () => {
        sliderDots.forEach(d => d.classList.remove('active'));
        slides.forEach(s => s.classList.remove('active'));
        
        dot.classList.add('active');
        
        const slideId = dot.getAttribute('data-slide');
        document.getElementById(slideId).classList.add('active');
    });
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
