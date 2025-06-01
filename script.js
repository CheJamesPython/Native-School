addEventListener("scroll", scrollTop);

let currentMenuBtn = document.body.querySelector(".menu-btn__icon--active");

let burger_btn = document.body.querySelector(".burger-btn");
burger_btn.addEventListener("click", popupOpen);

let buttons = document.body.querySelectorAll(".menu-btn");

for (let button of buttons) {
  button.addEventListener("click", clicker);
}

function clicker(...args) {
  currentMenuBtn.src = currentMenuBtn.dataset.init_path;
  currentMenuBtn.classList.toggle(".menu-btn__icon--active");

  let menuBtnIcon = this.querySelector(".menu-btn__icon");

  menuBtnIcon.src = menuBtnIcon.dataset.gradient_path;
  menuBtnIcon.classList.toggle(".menu-btn__icon--active");

  currentMenuBtn = menuBtnIcon;
}

function scrollTop(...args) {
  let element1 = document.body.querySelector(".media-burger-btn-wrapper");
  let element2 = document.body.querySelector(".mobile-header__button");
  for (let element of [element1, element2]) {
    if (window.pageYOffset) {
      element.classList.add("media-burger-btn--follow");
    } else {
      element.classList.remove("media-burger-btn--follow");
    }
  }
}

function popupOpen(...args) {
  let btn_element1 = document.body.querySelector(".media-burger-btn-wrapper");
  let btn_element2 = document.body.querySelector(".mobile-header__button");
  let popup_element = document.body.querySelector(".media-popup-menu");

  if (popup_element.classList.contains("popup-menu--open")) {
    popup_element.classList.remove("popup-menu--open");
    for (let btn_element of [btn_element1, btn_element2]) {
      if (!window.pageYOffset) {
        btn_element.classList.remove("media-burger-btn--follow");
      }
    }
  } else {
    popup_element.classList.add("popup-menu--open");
    for (let btn_element of [btn_element1, btn_element2]) {
      btn_element.classList.add("media-burger-btn--follow");
    }
  }
}

function replaceMenu1(this__menu_btn) {
  let element1 = document.body.querySelector(
    ".media-main-mobile-cards-container"
  );

  let element2 = document.body.querySelector(
    ".mobile-media-main-section-project-card-container"
  );

  if (element1.classList.contains("--disable")) {
    element1.classList.toggle("--disable");
    element2.classList.toggle("--disable");
  }
}

function replaceMenu2(this__menu_btn) {
  let element1 = document.body.querySelector(
    ".media-main-mobile-cards-container"
  );

  let element2 = document.body.querySelector(
    ".mobile-media-main-section-project-card-container"
  );

  if (element2.classList.contains("--disable")) {
    element1.classList.toggle("--disable");
    element2.classList.toggle("--disable");
  }
}
