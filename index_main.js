// Clock

function updateTime() {
    const new_year = new Date('2025-02-10T00:00:00');
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
const sliderContainer = document.getElementById('slider_container_width').clientWidth;
const slider = document.getElementById('slider');
const sliderWidth = document.getElementById('slider').clientWidth;
const right = document.getElementById('right_arrow_button');
const left = document.getElementById('left_arrow_button');
const maxWidthClicks = 3;
const minWidthClicks = 6;
const atBoot_positionSliderinAxes_X = slider.getBoundingClientRect().left;
const fixedPosition = atBoot_positionSliderinAxes_X;
const nowWidth = width.clientWidth;

let clicks = 0;
let distanceMovie = 0;
let movie = 0;
let minClicks;
let maxClicks;

if (width.clientWidth >= 769) {
    distanceMovie = (slider.clientWidth - sliderContainer) / maxWidthClicks;
    maxClicks = 3;
} else if (width.clientWidth <= 768) {
    distanceMovie = (slider.clientWidth - sliderContainer) / minWidthClicks;
    minClicks = 6;
} else {
    console.log("Error: resolution definition")
}

chekButtons();

right.addEventListener('click', () => {
    movie -= distanceMovie;
    slider.style.transform = `translateX(${movie}px)`;
    
    if (maxClicks != undefined) {
        maxClicks -= 1;
    } else {
        minClicks -= 1;
    }

    chekButtons();
});

left.addEventListener('click', () => {
    movie += distanceMovie;
    slider.style.transform = `translateX(${movie}px)`;
    
    if (maxClicks != undefined) {
        maxClicks += 1;
    } else {
        minClicks += 1;
    }

    chekButtons();
});

function chekButtons() {
    function checkLeftButton() {
        if (maxClicks == 3 || minClicks == 6) {
            left.disabled = true;
            left.classList.toggle('disabled');
        } else {
            left.disabled = false;
            left.classList.remove('disabled');
        }
    }

    function checkRightButton() {
        if (minClicks == 0 || maxClicks == 0) {
            right.disabled = true;
            right.classList.toggle('disabled');
        } else {
            right.disabled = false;
            right.classList.remove('disabled');
        }
    }

    checkLeftButton();
    checkRightButton();
}

//Modal Window
const modalWindow = document.getElementById('modal_window');
const overlay = document.getElementById('overlay');
//Gifts
const workGift = document.getElementById('container_for_work');
const healthGift = document.getElementById('container_for_health');
const harmonyGift = document.getElementById('container_for_harmony');
// Images
const workImage = document.getElementById('image_for_work');
const healthImage = document.getElementById('image_for_health');
const harmonyImage = document.getElementById('image_for_harmony');
// Lists
const workList = document.getElementById('work_list');
const healthList = document.getElementById('health_list');
const harmonyList = document.getElementById('harmony_list');
// Text
const windowName = document.getElementById('window_name');
const windowTitle = document.getElementById('window_title');
const windowText = document.getElementById('window_text');
// Add event
const giftsContainer = document.querySelectorAll('.gifts_container');
giftsContainer.forEach(gift => {
    gift.addEventListener('click', openModalWindow);
});

function openModalWindow(event) {
    const targetId = event.currentTarget.id;

    if (targetId === workGift.id) {
        overlay.classList.toggle('visible');
        document.body.classList.toggle('no-scroll');
        modalWindow.classList.toggle('visible');
        workImage.style.display = 'block';
        windowName.innerText = 'for work';
        windowName.style.color = '#4361FF';
        windowTitle.innerText = 'Console.log Guru';
        windowText.innerText = 'Uses console.log like a crystal ball to find any issue.';
        workList.style.display = 'block';
    } else if (targetId === healthGift.id) {
        overlay.classList.toggle('visible');
        modalWindow.classList.toggle('visible');
    } else if (targetId === harmonyGift.id) {
        overlay.classList.toggle('visible');
        modalWindow.classList.toggle('visible');
    } else {
        console.error(`Error: activeModalWindow don't work`)
    }
}