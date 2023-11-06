const sliderLine = document.querySelector('.slider__slider-line');
const nextButton = document.querySelector('.slider__nav-right-arrow-button');
const prevButton = document.querySelector('.slider__nav-left-arrow-button');
const navDots = document.querySelectorAll('.slider__nav-button');
const navLinks = document.querySelectorAll('.slider__nav-link');

let position = 0;
let slideIndex = 0;

// Functions

const nextSlide = () => {
    if(position < ((navDots.length - 1) * 1570)) {
        position += 1570;
        slideIndex++;
    }else {
        position = 0;
        slideIndex = 0;
    }
    sliderLine.style.right = position + 'px';
    makeNavActive(slideIndex);
}

const prevSlide = () => {
    if(position > 0) {
    position -= 1570;
    slideIndex--;
    }else {
        position = ((navDots.length - 1) * 1570);
        slideIndex = navDots.length - 1;
    }
    sliderLine.style.right = position + 'px';
    makeNavActive(slideIndex);
}

const makeNavActive = (index) => {
    for(let dot of navDots) {
        dot.classList.remove('active-nav-button')
    }
    for(let link of navLinks) {
        link.classList.remove('active-nav-link')
    }
    navLinks[index].classList.add('active-nav-link')
    navDots[index].classList.add('active-nav-button')
}

// Listiners

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 1570 * index;
        sliderLine.style.right = position + 'px';
        slideIndex = index;
        makeNavActive(slideIndex);
    })
})

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        position = 1570 * index;
        sliderLine.style.right = position + 'px';
        slideIndex = index;
        makeNavActive(slideIndex);
    })
})