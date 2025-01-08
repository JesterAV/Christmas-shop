const menu = document.getElementById('menu');
const menuSection = document.getElementById('menu_section');
const menuParagraph = document.querySelectorAll('.menu_paragraph a');

function openAndCloseMenu() {
    menu.classList.toggle('active');
    menuSection.classList.toggle('active');
}

menu.addEventListener('click', openAndCloseMenu);

menuParagraph.forEach(link => {
    link.addEventListener('click', function(event) {

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({behavior: 'smooth'})

        openAndCloseMenu();
    });
});

//Modal Window
const modalWindow = document.getElementById('modal_window');
const overlay = document.getElementById('overlay');
const crossButton = document.getElementById('cross_button');
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
const giftsContainer = document.querySelectorAll('.gifts_item');
giftsContainer.forEach(gift => {
    gift.addEventListener('click', openModalWindow);
});
overlay.addEventListener('click', closeModalWindow);
crossButton.addEventListener('click', closeModalWindow);

function closeModalWindow() {
    modalWindow.classList.remove('visible');
    workImage.style.display = 'none';
    healthImage.style.display = 'none';
    harmonyImage.style.display = 'none';
    workList.style.display = 'none';
    healthList.style.display = 'none';
    harmonyList.style.display = 'none';
    overlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
}

function openModalWindow(event) {
    const targetId = event.currentTarget.id;
    overlay.classList.toggle('visible');
    document.body.classList.toggle('no-scroll');

    if (targetId === workGift.id) {
        modalWindow.classList.toggle('visible');
        workImage.style.display = 'block';
        windowName.innerText = 'for work';
        windowName.style.color = '#4361FF';
        windowTitle.innerText = 'Console.log Guru';
        windowText.innerText = 'Uses console.log like a crystal ball to find any issue.';
        workList.style.display = 'block';
    } else if (targetId === healthGift.id) {
        modalWindow.classList.toggle('visible');
        healthImage.style.display = 'block';
        windowName.innerText = 'for health';
        windowName.style.color = '#06A44F';
        windowTitle.innerText = 'Step Master';
        windowText.innerText = 'Gets 10,000 steps a day even while sitting at the computer.';
        healthList.style.display = 'block';
    } else if (targetId === harmonyGift.id) {
        modalWindow.classList.toggle('visible');
        harmonyImage.style.display = 'block';
        windowName.innerText = 'for harmony';
        windowName.style.color = '#FF43F7';
        windowTitle.innerText = 'Error Laugher';
        windowText.innerText = 'Laughs at code errors like they’re jokes instead of getting angry.';
        harmonyList.style.display = 'block';
    } else {
        console.error(`Error: activeModalWindow don't work`)
    }
}