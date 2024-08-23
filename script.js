document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const slideWidth = document.querySelector('.slider').offsetWidth;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++
            1`  `;
        if (currentIndex === slideCount) {
            currentIndex = 0;
        }
        const offset = -currentIndex * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextSlide, 3000);
});