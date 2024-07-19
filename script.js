const createStars = () => {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        stars.appendChild(star);
    }
};

const createShootingStars = () => {
    const shootingStars = document.querySelector('.shooting-stars');
    for (let i = 0; i < 20; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.animationDelay = `${Math.random() * 5}s`;
        shootingStar.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        shootingStars.appendChild(shootingStar);
    }
};

const playBackgroundMusic = () => {
    const audio = new Audio('Enigma - Principles of Lust.mp3');
    audio.loop = true;
    audio.autoplay = true;
    audio.preload = 'auto';
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
};

const setupParallax = () => {
    const parallax = document.querySelector('.parallax');
    const layers = parallax.children;

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;

        Array.from(layers).forEach(layer => {
            const depth = layer.getAttribute('data-depth');
            const movementX = x * depth * 30;
            const movementY = y * depth * 30;
            layer.style.transform = `translate3d(${movementX}px, ${movementY}px, 0)`;
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createShootingStars();
    playBackgroundMusic();
    setupParallax();
});
