// Lógica del Carrusel (solo para cambiar la imagen)
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    
    // Función para cambiar de diapositiva
    function showNextSlide() {
        // 1. Ocultar la diapositiva actual
        slides[currentIndex].classList.remove('active');
        
        // 2. Calcular el nuevo índice (circular)
        currentIndex = (currentIndex + 1) % slides.length;
        
        // 3. Mostrar la nueva diapositiva (con la transición CSS de opacidad)
        slides[currentIndex].classList.add('active');
    }

    // Iniciar el carrusel para que cambie cada 4 segundos
    setInterval(showNextSlide, 4000); 
});