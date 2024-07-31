// Configura el intervalo para avanzar automáticamente cada 3 segundos
const carouselImages = document.querySelectorAll('.carousel img');
let counter = 0;

function nextSlide() {
    counter = (counter + 1) % carouselImages.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = counter * -carouselImages[0].clientWidth;
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transition = 'transform 0.4s ease-in-out';
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos