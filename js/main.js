
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






const themeToggle = document.getElementById('themeToggle'); // Asosiy div element
const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');
const body = document.body; // Butun sahifaning stilini o'zgartirish uchun


themeToggle.addEventListener('click', () => {
    // Agar hozirgi rejim Light Mode bo'lsa (ya'ni, uning ikonkasi aktiv bo'lsa)
    if (lightMode.classList.contains('theme-toggler__icon--active')) {
        // Dark Mode ga o'tish
        body.classList.add('dark-theme-variables');

        // Ikonka aktivligini almashtirish
        lightMode.classList.remove('theme-toggler__icon--active');
        darkMode.classList.add('theme-toggler__icon--active');
    } else {
        // Light Mode ga o'tish
        body.classList.remove('dark-theme-variables');

        // Ikonka aktivligini almashtirish
        darkMode.classList.remove('theme-toggler__icon--active');
        lightMode.classList.add('theme-toggler__icon--active');
    }
});
