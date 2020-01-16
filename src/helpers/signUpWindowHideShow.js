export function signUpWindowHideShow() {
  const signUpWindow = document.querySelector(".signUp--js");
  const signUpForm = document.querySelector(".signUp-form")
  signUpWindow.classList.toggle("signUp--active");
  signUpForm.classList.toggle("signUp-form--active");
  document.body.classList.toggle("no-scroll")
}
