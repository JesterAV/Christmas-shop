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