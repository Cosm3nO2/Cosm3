document.addEventListener('DOMContentLoaded', function() {
    var navbarToggle = document.getElementById('navbarToggle');
    var navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('collapse');
    });

    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', function() {
            card.style.transform = 'scale(1)';
        });
    });
});
