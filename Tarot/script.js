document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    const scrollOffsetDesktop = 830; // Adjust scroll offset for better view on desktop
    const scrollOffsetMobile = -70; // Adjust scroll offset for better view on mobile

    // Show or hide the back-to-top button
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Smooth scroll to top when the button is clicked
    backToTopButton.onclick = () => {
        anime({
            targets: 'html, body',
            scrollTop: 0,
            duration: 1000,
            easing: 'easeInOutExpo'
        });
    };

    // Toggle the main menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');
    const closeMenuButton = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        menuToggle.style.display = 'none';
    });

    closeMenuButton.addEventListener('click', () => {
        menu.classList.remove('open');
        menuToggle.style.display = 'block';
    });

    // Toggle submenus
    document.querySelectorAll('.submenu-toggle').forEach(submenuToggle => {
        submenuToggle.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('active');
            const nestedSubmenu = this.nextElementSibling;
            if (nestedSubmenu.style.display === 'block') {
                nestedSubmenu.style.display = 'none';
            } else {
                nestedSubmenu.style.display = 'block';
            }
        });
    });

    // Smooth scroll for menu links
    document.querySelectorAll('nav ul a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const scrollOffset = window.innerWidth <= 768 ? scrollOffsetMobile : scrollOffsetDesktop;
                anime({
                    targets: 'html, body',
                    scrollTop: targetElement.offsetTop - scrollOffset,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });

                // Close all submenus
                document.querySelectorAll('.submenu, .nested-submenu').forEach(menu => {
                    menu.style.display = 'none';
                });
                document.querySelectorAll('.submenu-toggle').forEach(toggle => {
                    toggle.classList.remove('active');
                });

                // Close main menu for mobile
                if (window.innerWidth <= 768) {
                    menu.classList.remove('open');
                    menuToggle.style.display = 'block';
                }
            }
        });
    });

    // Modal functionality
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.card img').forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalContent.innerHTML = image.outerHTML + `<span class="close">&times;</span>`;
            anime({
                targets: '.modal',
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            });
        });
    });

    closeModal.onclick = () => {
        anime({
            targets: '.modal',
            opacity: [1, 0],
            easing: 'easeInOutQuad',
            duration: 500,
            complete: function() {
                modal.style.display = 'none';
            }
        });
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            anime({
                targets: '.modal',
                opacity: [1, 0],
                easing: 'easeInOutQuad',
                duration: 500,
                complete: function() {
                    modal.style.display = 'none';
                }
            });
        }
    };

    // Anime.js animations for header
    anime.timeline({loop: false})
        .add({
            targets: 'header h1',
            translateY: [-100, 0],
            opacity: [0, 1],
            easing: 'easeOutBounce',
            duration: 800,
        })
        .add({
            targets: 'nav button.menu-toggle',
            translateX: [-50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 600,
            offset: '-=400' // Starts 400ms before the previous animation ends
        })
        .add({
            targets: 'nav ul li',
            translateX: [-50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 500,
            delay: (el, i) => 50 * i, // Delay each item by 50ms
            offset: '-=400' // Starts 400ms before the previous animation ends
        });

    // Anime.js animations for card sections
    anime.timeline({loop: false})
        .add({
            targets: '.card-section .card',
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .8)',
            duration: 600,
            delay: (el, i) => 100 * i, // Delay each card by 100ms
        })
        .add({
            targets: '.card-section .card img',
            rotate: '1turn',
            easing: 'easeInOutSine',
            duration: 800,
            offset: '-=500' // Starts 500ms before the previous animation ends
        });

    // Anime.js animations for back-to-top button
    anime({
        targets: '#back-to-top',
        scale: [0, 1],
        rotate: '1turn',
        duration: 800,
        easing: 'easeInOutExpo'
    });

    // Create neon shapes
    for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.className = 'neon-shape';
        document.body.appendChild(shape);
    }

    // Animate neon shapes
    document.querySelectorAll('.neon-shape').forEach(shape => {
        anime({
            targets: shape,
            translateX: () => anime.random(-200, 200),
            translateY: () => anime.random(-200, 200),
            scale: () => anime.random(0.5, 1.5),
            rotate: () => anime.random(-360, 360),
            duration: 2000,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
        });
    });

    // Light tracing effect on header
    anime({
        targets: 'header',
        backgroundPosition: ['200% 0%', '0% 0%'],
        easing: 'easeInOutSine',
        duration: 2000,
        loop: true,
        direction: 'alternate',
    });
});
