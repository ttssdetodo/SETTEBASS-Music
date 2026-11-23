// 1. Función de Scroll suave para los Carruseles
function scrollCarousel(id, amount) {
    const container = document.getElementById(id);
    if (container) {
        container.scrollBy({ left: amount, behavior: 'smooth' });
    }
}

// 2. Control del Reproductor Flotante Interactivo
document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.btn-play');
    const playerBar = document.getElementById('audio-player-bar');
    const mainAudio = document.getElementById('main-audio');
    const playerTitle = document.getElementById('player-title');
    const closePlayerBtn = document.getElementById('close-player');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioSrc = button.getAttribute('data-audio');
            const trackTitle = button.getAttribute('data-title');

            if (audioSrc) {
                mainAudio.src = audioSrc;
                playerTitle.textContent = trackTitle;
                playerBar.classList.remove('hidden');
                mainAudio.play();
            }
        });
    });

    closePlayerBtn.addEventListener('click', () => {
        mainAudio.pause();
        playerBar.classList.add('hidden');
    });

    // 3. Animaciones al deslizar la página (Scroll Reveal)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // 4. Autoplay suave del carrusel cada 5 segundos
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let scrollAmount = 0;
        setInterval(() => {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 6000);
    });
});