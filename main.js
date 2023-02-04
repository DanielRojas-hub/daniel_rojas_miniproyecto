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