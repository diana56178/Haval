

// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
//   loop: true,
//   paginationClickable: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   spaceBetween : 0,
//   autoHeight: true,
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//   }
// });

// const mainSwiper = new Swiper('.swiper-main', {
//   autoplay: {
//       delay: 5000,
//   },
//   loop: true,
//   autoHeight: true,
//   slidesPerView: 'auto',
// });

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  paginationClickable: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween : 0,
  autoHeight: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  }
});

const mainSwiper = new Swiper('.swiper-main', {
  autoplay: {
      delay: 5000,
  },
  loop: true,
  autoHeight: true,
  slidesPerView: 'auto',
  // spaceBetween : 0,
  // autoHeight: true,
});

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggler');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

Fancybox.bind("[data-fancybox]", {
 // Your custom options
});