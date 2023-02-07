const burgerMenu = document.querySelector('.toggler');
const ulMenu = document.querySelector('.nav__menu');
const serachBar = document.querySelector('.nav__search');
burgerMenu.addEventListener('click',()=>{
    burgerMenu.classList.toggle('OnToggler');
    ulMenu.classList.toggle('hasShown');
    serachBar.classList.toggle('hasShown')
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextBtn',
      prevEl: '.prevBtn',
    },
    breakpoints:{
        1150:{
            slidesPerView : 4
        },
        850:{
            slidesPerView: 3
        },
        560:{
            slidesPerView:2
        },
        else:{
            slidesPerView:1
        }
    }
  });

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints:{
        1150:{
            slidesPerView : 4
        },
        870:{
            slidesPerView: 3
        },
        600:{
            slidesPerView:2
        },
        else:{
            slidesPerView:1
        }
    }
  });

const swiper1_ = document.querySelector('.swiper1').swiper;
setInterval(()=>swiper1_.slideNext(),2000)