let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n, n > 0 ? 'next' : 'prev');
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n, direction = 'auto') {
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0; // Устанавливаем прозрачность всех слайдов в 0
    }
    slides[slideIndex - 1].style.opacity = 1; // Устанавливаем прозрачность текущего слайда в 1

    // Добавляем классы анимации в зависимости от направления
    if (direction === 'next') {
        slides[slideIndex - 1].classList.add('slideInRight');
    } else if (direction === 'prev') {
        slides[slideIndex - 1].classList.add('slideInLeft');
    }

    // Удаляем классы анимации после завершения анимации
    setTimeout(() => {
        slides[slideIndex - 1].classList.remove('slideInRight', 'slideInLeft');
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});