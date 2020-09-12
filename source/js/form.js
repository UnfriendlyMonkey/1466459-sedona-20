var reviewForm = document.querySelector(".review")
var formButton = document.querySelector(".review__button")
var inputUsername = reviewForm.querySelector(".review__input--username")
var inputSurname = reviewForm.querySelector(".review__input--surname")
var inputPhone = reviewForm.querySelector(".review__input--phone")
var inputEmail = reviewForm.querySelector(".review__input--email")

var popupSuccess = document.querySelector(".popup--success")
var popupFailure = document.querySelector(".popup--failure")
var successButton = popupSuccess.querySelector(".popup__button")
var failureButton = popupFailure.querySelector(".popup__button")


window.onload = function() {
  if (popupSuccess.classList.contains("popup--active")) {
    popupSuccess.classList.remove("popup--active");
  }
  if (popupFailure.classList.contains("popup--active")) {
    popupFailure.classList.remove("popup--active");
    reviewForm.classList.remove("review--error");
  }
  inputUsername.removeAttribute("required");
  inputSurname.removeAttribute("required");
  inputPhone.removeAttribute("required");
  inputEmail.removeAttribute("required");
};

reviewForm.addEventListener("submit", function (evt) {
  if (!inputUsername.value || !inputSurname.value || !inputPhone.value || !inputEmail.value) {
    evt.preventDefault();
    popupFailure.classList.add("popup--active");
    reviewForm.classList.add("review--error");
  } else {
    evt.preventDefault();
    popupSuccess.classList.add("popup--active");
    reviewForm.classList.remove("review--error");
  }
});

successButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup--active");
});

failureButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFailure.classList.remove("popup--active");
  // reviewForm.classList.remove("review--error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupSuccess.classList.contains("popup--active")) {
        evt.preventDefault();
        popupSuccess.classList.remove("popup--active");
      } else {
        if (popupFailure.classList.contains("popup--active")) {
          evt.preventDefault();
          popupFailure.classList.remove("popup--active");
          // reviewForm.classList.remove("review--error");
        }
      }
    }
});
