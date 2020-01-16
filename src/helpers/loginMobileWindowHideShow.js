export function loginMobileWindowHideShow() {
    const loginMobileWindow = document.querySelector(".loginMobile--js");
    const loginMobileForm = document.querySelector(".loginMobile-form")
    loginMobileWindow.classList.toggle("loginMobile--active");
    loginMobileForm.classList.toggle("loginMobile-form--active");
    document.body.classList.toggle("no-scroll")
  }
  