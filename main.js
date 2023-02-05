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
}, 10000);

/*==================== SKILLS ====================*/
const categories = [
    {
        name: 'Front-end',
        skills: [
            {
                name: 'FLUTTER',
                percent: 95,
            },
            {
                name: 'HTML',
                percent: 85,
            },
            {
                name: 'JAVA',
                percent: 65,
            },
        ],
    },
    {
        name: 'Back-end',
        skills: [
            {
                name: 'FLUTTER',
                percent: 85,
            },
            {
                name: 'JAVASCRIPT',
                percent: 30,
            },
            {
                name: 'JAVA',
                percent: 65,
            },
            {
                name: 'PYTHON',
                percent: 60,
            },
        ],
    },
    {
        name: 'Database',
        skills: [
            {
                name: 'FIREBASE',
                percent: 90,
            },
            {
                name: 'SQL',
                percent: 20,
            },
            
        ]
    }
]
function createCategory(category) {
    return `
<div class="skill__list" id="skill__${category.name}">
    <h2 class="skills__title">${category.name}</h2>
</div>
`
}

function createSkill(category, skill) {
    return `
<div class="skills__data">
    <div class="skills__name">
        <span class="skills__name">${skill.name}</span>
    </div>
    <div class="skills__bar" id="id__skills__${category.name}__${skill.name}"></div>
    <div>
        <span class="skills__percentage">${skill.percent}%</span>
    </div>
</div>
`
}

for (let index = 0; index < categories.length; index++) {
    const category = categories[index];

    /*====== ADD CATEGORY ======*/
    document.getElementById("skills-container").innerHTML += createCategory(category);

    for (let index = 0; index < category.skills.length; index++) {
        const skill = category.skills[index];
        
        /*====== ADD SKILL ======*/
        document.getElementById(`skill__${category.name}`).innerHTML += createSkill(category, skill);

        /*====== ADD BAR STYLE ======*/
        document.getElementById(`id__skills__${category.name}__${skill.name}`).style.width = `${skill.percent}%`
    }
}

