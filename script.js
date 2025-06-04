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

  let element3 = document.body.querySelector(
    ".mobile-media-main-section-not-implemented"
  );

  if (element1.classList.contains("--disable")) {
    element1.classList.toggle("--disable");
    element2.classList.add("--disable");
    element3.classList.add("--disable");
  }
}

function replaceMenu2(this__menu_btn) {
  let element1 = document.body.querySelector(
    ".media-main-mobile-cards-container"
  );

  let element2 = document.body.querySelector(
    ".mobile-media-main-section-project-card-container"
  );

  let element3 = document.body.querySelector(
    ".mobile-media-main-section-not-implemented"
  );

  if (element2.classList.contains("--disable")) {
    element1.classList.add("--disable");
    element2.classList.toggle("--disable");
    element3.classList.add("--disable");
  }
}

function replaceMenu3(this__menu_btn) {
  let element1 = document.body.querySelector(
    ".media-main-mobile-cards-container"
  );

  let element2 = document.body.querySelector(
    ".mobile-media-main-section-project-card-container"
  );
  let element3 = document.body.querySelector(
    ".mobile-media-main-section-not-implemented"
  );

  element1.classList.add("--disable");
  element2.classList.add("--disable");
  element3.classList.remove("--disable");

  // if (!element1.classList.contains("--disable")) {
  //   console.log(element1);
  //   element1.classList.toggle("--disable");
  // }
  // if (!element2.classList.contains("--disable")) {
  //   console.log(element2);
  //   element2.classList.toggle("--disable");
  // }
}

let header_info_buttons = document.body.querySelectorAll(
  "button.cards-items-list__button"
);

header_info_buttons.forEach((btn, idx) => {
  btn.addEventListener("click", card_select);
});

function card_select() {
  let btn_parrent = document.body.querySelector(".main__cards");

  header_info_buttons.forEach((btn) => {
    btn.classList.remove("one__header-info--active");
    if (
      btn_parrent
        .querySelector(`.${btn.dataset.card}`)
        .classList.contains("main__cards-items__item--active")
    ) {
      btn_parrent
        .querySelector(`.${btn.dataset.card}`)
        .classList.remove("main__cards-items__item--active");
    }
  });

  this.classList.add("one__header-info--active");
  let card = btn_parrent.querySelector(`.${this.dataset.card}`);

  card.classList.add("main__cards-items__item--active");
}
