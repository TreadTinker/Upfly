let closeBurger = document.querySelector('.nav_close');
let navBurger = document.querySelector('.header__nav-burger');
let nav = document.querySelector('.header__nav');
let social = document.querySelector('.header-social');

$(document).ready(function () {
  $('.header__nav-burger').click(function (event) {
    $('.header__nav-burger,.header__nav,.header-social').toggleClass('active');
  });
});

closeBurger.addEventListener('click',() => { // Вешаем обработчик на крестик
  navBurger.classList.remove('active'); // Убираем активный класс с фона
  nav.classList.remove('active'); // И с окна
  social.classList.remove('active');
});
