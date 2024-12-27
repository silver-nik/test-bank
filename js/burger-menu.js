const setBurgerMenu = (burgerBtnClass, burgerMenuClass, burgerCloseBtnClass) => {
    const burgerBtn = document.querySelector(burgerBtnClass),
          burgerMenu = document.querySelector(burgerMenuClass),
          burgerCloseBtn = burgerMenu.querySelectorAll(burgerCloseBtnClass);

    burgerBtn.addEventListener("click", () => burgerMenu.classList.add("active"))

    burgerCloseBtn.forEach(btn => {
        btn.addEventListener("click", () => burgerMenu.classList.remove("active"))
    });
}

setBurgerMenu(".header__menu-icon", ".burger-menu", ".burger-menu__close-icon");