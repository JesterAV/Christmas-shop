// Clock

function updateTime() {
    const new_year = new Date('2025-01-01T00:00:00');
    const realTime = new Date();

    const m_seconds = 1000;
    const minute = 1000 * 60;
    const hour = 1000 * 60 * 60;
    const days = 1000 * 60 * 60 * 24;

    const result = new_year - realTime;

    const resultSeconds = Math.floor((result % minute) / m_seconds);
    const resultMinutes = Math.floor((result % hour) / minute);
    const resultHours = Math.floor((result % days) / hour);
    const resultDays = Math.floor(result / days);

    document.getElementById('seconds').textContent = String(resultSeconds).padStart(2, '0');
    document.getElementById('minutes').textContent = String(resultMinutes).padStart(2, '0');
    document.getElementById('hours').textContent = String(resultHours).padStart(2, '0');
    document.getElementById('days').textContent = String(resultDays).padStart(2, '0');
}

setInterval(updateTime, 1000);

updateTime();

// Menu

const menu = document.getElementById('menu');
const menuSection = document.getElementById('menu_section');
const menuParagraph = document.querySelectorAll('.menu_paragraph a')

function openAndCloseMenu() {
    menu.classList.toggle('active');
    menuSection.classList.toggle('active');
}

menuParagraph.forEach (link => {
    link.addEventListener('click', function (event) {

        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView ({behaivor: 'smooth'});

        openAndCloseMenu();
    });

    document.querySelector('.menu').addEventListener('click', openAndCloseMenu);

});

//Slider

const width = document.getElementById('main_width');
const sliderContainerWidth = document.getElementById('slider_container_width').clientWidth;
const slider = document.getElementById('slider');
const sliderWidth = slider.clientWidth;
const right = document.getElementById('right_arrow_button');
const left = document.getElementById('left_arrow_button');
const maxWidthClicks = 3;
const minWidthClicks = 6;
const atBoot_positionSliderinAxes_X = slider.getBoundingClientRect().left;
const fixedPosition = atBoot_positionSliderinAxes_X;
const nowWidth = width.clientWidth;

let distanceMovie = 0;
let resultMovie = 0;
let position = atBoot_positionSliderinAxes_X;
let a = 0;
let workButton = 0;

console.log(position);

if (nowWidth >= 769) {
    distanceMovie = (sliderWidth - sliderContainerWidth) / maxWidthClicks;
    workButton = distanceMovie * maxWidthClicks;
} else {
    distanceMovie = (sliderWidth - sliderContainerWidth) / minWidthClicks;
    workButton = distanceMovie * minWidthClicks;
}

checkButtons();

right.addEventListener('click', () => {
    resultMovie -= distanceMovie;
    slider.style.transform = `translateX(${resultMovie}px)`;
    position -= distanceMovie;
    console.log(position);
    checkButtons();
});

left.addEventListener('click', () => {
    resultMovie += distanceMovie;
    slider.style.transform = `translateX(${resultMovie}px)`;
    position += distanceMovie;
    console.log(position);
    checkButtons();
});

function checkButtons() {
    function checkLeftButton() {
        if (position == fixedPosition) {
            left.disabled = true;
            left.classList.toggle('disabled');
        } else if (position < fixedPosition) {
            left.disabled = false;
            left.classList.remove('disabled');
        } else {
            console.log('Не работает твой код')
        }
    }

    function checkRightButton() {
        if (position == (fixedPosition - workButton)) {
            right.disabled = true;
            right.classList.toggle('disabled');
        } else if (position > (fixedPosition - workButton)) {
            right.disabled = false;
            right.classList.remove('disabled');
        } else {
            (console.log('Не работает твой код'));
        }
    }

    checkLeftButton();
    checkRightButton();
}