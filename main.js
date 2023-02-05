/*==================== NAV ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*====== MENU SHOW ======*/
navClose.classList.add('hidden')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.add('hidden')
        navClose.classList.remove('hidden')
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navToggle.classList.remove('hidden')
        navClose.classList.add('hidden')
        navMenu.classList.remove('show-menu')
    })
}

/*====== REMOVE MENU MOBILE ======*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navToggle.classList.remove('hidden')
    navClose.classList.add('hidden')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== HERO ====================*/
const slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll('.slider__section');
let lastSliderSection = sliderSection[sliderSection.length - 1];

const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

slider.insertAdjacentElement('afterbegin', lastSliderSection);

function next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 700)
}

function prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let lastSliderSection = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", lastSliderSection);
        slider.style.marginLeft = "-100%";
    }, 700)
}

btnRight.addEventListener('click', function() {next()})

btnLeft.addEventListener('click', function() {prev()})

/*====== TIMER ======*/

let temp = setInterval(() => {
    next()
}, 5000);