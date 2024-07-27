document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the "Play Music" button
    const playButton = document.getElementById('playMusic');
    const audio = document.getElementById('background-music');
    
    playButton.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log("Playback failed:", error);
        });
        playButton.style.display = 'none'; // Optionally hide the button after clicking
    });

    // Smooth scrolling for navigation links with offset control
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 150; // Adjust this value to control the scroll offset
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Create and add the "Back to Top" button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.id = 'backToTop';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '1em';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';  // Dark semi-transparent background
    backToTopButton.style.color = '#fff';
    backToTopButton.style.fontSize = '1.5em';
    backToTopButton.style.display = 'none'; // Hidden by default
    backToTopButton.style.zIndex = '1000';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    document.body.appendChild(backToTopButton);

    // Show the "Back to Top" button when the nav bar scrolls off screen
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav && window.pageYOffset > nav.offsetTop + nav.offsetHeight) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll back to top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
