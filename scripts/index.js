const menu = document.querySelector('.header__menu'),
  menuButton = document.querySelector('.header__menu-btn'),
  menuLinks = menu.querySelectorAll('a[href^="#"]'),
  mobileMenuOptions = document.querySelectorAll('.header__menu-option'),
  submitButton = document.querySelector('.footer__submit-btn'),
  menuList = document.querySelector('.header__menu-options'),
  slidesContainer = document.querySelector(".highway__carousel"),
  prevButton = document.querySelector('.highway__btn_left'),
  nextButton = document.querySelector('.highway__btn_right');
let touchStart;

menuButton.addEventListener('click', (event) => {
  if (event.target.classList.contains('header__menu-btn_close')) {
    hideMenu();
  } else {
    showMenu();
  }
});

// скрывается мобильное меню при переходе по якорной ссылке
for (const link of mobileMenuOptions) {
  link.addEventListener('click', () => {
    hideMenu()
  });
}

showMenu = () => {
  menuList.style.display = "flex";
  menuButton.classList.add('header__menu-btn_close');
};

hideMenu = () => {
  menuList.style.display = "none";
  menuButton.classList.remove('header__menu-btn_close');
};

//плавная прокрутка страницы по якорю с учетом высоты fixed элемента
for (const link of menuLinks) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = menu.getBoundingClientRect().bottom;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}

//появление кнопки отправки формы при активации поля ввода e-mail
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('footer__input-email')) {
    submitButton.style.display = "block";
  }
  else {
    submitButton.style.display = "none";
  }
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: ".highway__btn_right",
    prevEl: ".highway__btn_left"
  }
});

// //смещение слайда тапом по сенсорному экрану
// slidesContainer.addEventListener("touchstart", (e) => {
//   touchStart = e.touches[0].clientX;
// });
//
// slidesContainer.addEventListener("touchend", (e) => {
//   let touchEnd = e.changedTouches[0].clientX;
//   if (touchStart > touchEnd) {
//     swipeSlide(true);
//   } else {
//     swipeSlide(false);
//   }
// });
//
// //смещение слайда по клику на кнопки
// nextButton.addEventListener("click", () => {
//   swipeSlide(true);
// });
//
// prevButton.addEventListener("click", () => {
//   swipeSlide(false);
// });
//
// swipeSlide = (forward) => {
//   let currentSlide = slidesContainer.querySelector('.current-slide');
//   let nextSlide = currentSlide.nextElementSibling;
//   let currentPosition = currentSlide.getBoundingClientRect().left;
//   let nextPosition = nextSlide.getBoundingClientRect().left;
//
//   if (forward) {
//     slidesContainer.scrollLeft += nextPosition - currentPosition;
//   } else {
//     slidesContainer.scrollLeft -= nextPosition - currentPosition;
//   }
// }