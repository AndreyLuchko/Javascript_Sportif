

// =========================Burger menu====================================

const iconMenu = document.querySelector(".menu__icon"),
    menuNav = document.querySelector(".menu__nav"),
    menuSearch = document.querySelector (".menu__search");

iconMenu.addEventListener('click', showMenu);

function showMenu(e) {
    e.preventDefault();
    menuNav.classList.toggle("active");
    iconMenu.classList.toggle("active");
    menuSearch.classList.toggle("active");
    document.body.classList.toggle("lock"); 
}

// ==========================Scroll on top==================================

const scrolBtn = document.querySelector(".arrow-btn");

scrolBtn.addEventListener('click', () => {
    window.scroll(0, 0);
});

