// GSAP Animation
gsap.from('.background', { duration: 1, opacity: 0, scale: 0.5, ease: 'power4.out' });
gsap.from('header', { duration: 1, opacity: 0, y: -50, delay: 0.5, ease: 'power4.out' });
gsap.from('.menu', { duration: 1, opacity: 0, y: -50, delay: 0.7, ease: 'power4.out' });
gsap.from('.Name', { duration: 1, opacity: 0, y: 50, delay: 1, ease: 'power4.out' });

// Particle Animation
particlesJS('particles', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#fff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: '#fff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
    },
    retina_detect: true,
});

// Get the menu and menu toggle elements
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');

// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Close the menu when a menu item is clicked (for smoother navigation)
menu.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Close the menu when the user clicks outside of it (for better mobile experience)
document.addEventListener('click', (event) => {
    const isMenuClick = menu.contains(event.target) || menuToggle.contains(event.target);
    if (!isMenuClick) {
        menu.classList.remove('active');
    }
});

