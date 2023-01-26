const burgerMenu = document.querySelector('.toggler');
const ulMenu = document.querySelector('.nav__menu');
const serachBar = document.querySelector('.nav__search');
burgerMenu.addEventListener('click',()=>{
    burgerMenu.classList.toggle('OnToggler');
    ulMenu.classList.toggle('hasShown');
    serachBar.classList.toggle('hasShown')
})