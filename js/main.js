
const sidebarMenuLinks = document.querySelectorAll(".sidebar__menu a");

const contentSections = document.querySelectorAll('.content-section');


sidebarMenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Sahifaning zagruska bomasligini oldini olish
        e.preventDefault();
        const currentActiveLink = document.querySelector('.sidebar__item--active');
        if (currentActiveLink) {
            currentActiveLink.classList.remove('sidebar__item--active');
        }
        link.classList.add('sidebar__item--active');
        const targetSectionId = link.getAttribute('data-section');
        contentSections.forEach(section => {
            section.classList.remove('content-section--active');
        });
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.classList.add('content-section--active');
        }
    });
});




const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0'; 
    sidebar.style.display = 'block'; 

});

closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-100%';
    sidebar.style.display = 'none';
});

sidebarMenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.innerWidth <= 768) {
            sidebar.style.left = '-100%';
            sidebar.style.display = 'none';
        }
        const currentActiveLink = document.querySelector('.sidebar__item--active');
        if (currentActiveLink) {
            currentActiveLink.classList.remove('sidebar__item--active');
        }
        link.classList.add('sidebar__item--active');
        const targetSectionId = link.getAttribute('data-section');

        contentSections.forEach(section => {
            section.classList.remove('content-section--active');
        });

        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.classList.add('content-section--active');
        }
    });
});