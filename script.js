document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const navbar = document.querySelector('.navbar');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    let isNavbarVisible = false;

    // Función para alternar la visibilidad del navbar
    function toggleNavbar() {
        if (isNavbarVisible) {
            hideNavbar(); // Ocultar si ya está visible
        } else {
            showNavbar(); // Mostrar si está oculto
        }
        isNavbarVisible = !isNavbarVisible; // Cambiar estado
    }

    // Función para mostrar el navbar
    function showNavbar() {
        navbar.style.transform = 'translateX(0)'; // Mostrar el navbar
        const items = navbar.querySelectorAll('ul li'); // Seleccionar los elementos del menú
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show'); // Agregar clase para mostrar
            }, index * 300); // Retraso basado en el índice
        });
    }

    // Función para ocultar el navbar
    function hideNavbar() {
        const items = navbar.querySelectorAll('ul li'); // Seleccionar los elementos del menú
        items.forEach((item) => {
            item.classList.remove('show'); // Remover clase para ocultar
        });
        
        setTimeout(() => {
            navbar.style.transform = 'translateX(-100%)'; // Ocultar el navbar después de la animación
        }, items.length * 300); // Esperar a que todas las animaciones de salida terminen
    }

    logo.addEventListener('click', toggleNavbar); // Manejar clic en el logo

    // Funciones para el carrusel de videos
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`; // Desplazar el carrusel
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % items.length; // Calcular el siguiente índice
        updateCarousel(); // Actualizar la posición del carrusel
    }

    // Iniciar la transición automática cada 5 segundos
    setInterval(showNextItem, 5000);
});