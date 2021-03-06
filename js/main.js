var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1, //how you see card in slider
  loop: true, //infinity
  navigation: {
    nextEl: '.arrow' //button next custom       
  },
  breakpoints: {

    540: {
      slidesPerView: 2
    }
  }
});
var menuButton = document.querySelector('.menu-button');
var menuWrappBtn = document.querySelector('.header-wrapp-btn');
var menu = document.querySelector('.header');
menuWrappBtn.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})