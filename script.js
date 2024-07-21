document.addEventListener('DOMContentLoaded', () => {
    // Initialize the canvas for the cosmos animation
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    function createStars() {
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                alpha: Math.random()
            });
        }
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.alpha += 0.02 * (Math.random() - 0.5);
            if (star.alpha < 0) star.alpha = 0;
            if (star.alpha > 1) star.alpha = 1;

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animateStars);
    }

    createStars();
    animateStars();

    // Animate the title and tree container
    anime({
        targets: '#tree-container',
        scaleY: [0, 1],
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutElastic(1, .8)'
    });

    anime({
        targets: '#title',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutBounce'
    });

    anime({
        targets: '.menu-item',
        translateX: [-100, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, {start: 500}),
        duration: 1000,
        easing: 'easeOutExpo'
    });

    document.getElementById('tarot-button').addEventListener('click', function() {
        // Create and play the sound
        const audio = new Audio('path_to_your_sound_file.mp3');
        audio.play();

        // Animate the transition
        anime({
            targets: '#tree-container',
            scaleY: [1, 0],
            opacity: [1, 0],
            duration: 2000,
            easing: 'easeInElastic(1, .8)',
            complete: function() {
                window.location.href = 'Tarot/index.html'; // Adjust the path as necessary
            }
        });
    });
});
