export function loginWindowHideShow() {
  const formWindow = document.querySelector(".signUp--js");
  const form = document.querySelector(".signUp-form")
  formWindow.classList.toggle("signUp--active");
  form.classList.toggle("signUp-form--active");
  document.body.classList.toggle("no-scroll")
}
