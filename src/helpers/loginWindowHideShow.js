export function loginWindowHideShow() {
  const form = document.querySelector(".signUp-wrapper--js");
  const mainApp = document.querySelector(".App--js");
  const header = document.querySelector(".header--js");
  header.classList.toggle("header--disabled");
  form.classList.toggle("signUp-wrapper--active");
  mainApp.classList.toggle("App--blurred");
}
