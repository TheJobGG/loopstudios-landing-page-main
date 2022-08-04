const menu = document.querySelector('.icons>svg:nth-child(1)');
const close = document.querySelector('.icons>svg:nth-child(2)');
const mobileMenu = document.querySelector('.mobile-menu');

menu.addEventListener('click', (event) => {
    menu.classList.toggle('deactivated');
    close.classList.toggle('deactivated');
    mobileMenu.style.display = 'flex';
    document.body.style.overflow = "hidden";
    document.body.style.position = 'fixed';
});

close.addEventListener('click', (event) => {
    menu.classList.toggle('deactivated');
    close.classList.toggle('deactivated');
    mobileMenu.style.display = 'none';
    document.body.style.overflow = "auto";
    document.body.style.position = 'static';
});