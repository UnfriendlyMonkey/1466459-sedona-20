var mainNav = document.querySelector(".main-nav");
var navClose = document.querySelector(".main-nav__close")
var openNav = document.querySelector(".page-header__open-menu")

window.onload = function() {
  if (mainNav.classList.contains("main-nav--appear")) {
      mainNav.classList.remove("main-nav--appear");
      openNav.classList.remove("visually-hidden");
      navClose.classList.remove("visually-hidden");
  }
};

navClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.remove("main-nav--appear");
  openNav.classList.remove("visually-hidden");
});

openNav.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.add("main-nav--appear");
  openNav.classList.add("visually-hidden");
})
