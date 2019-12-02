export function loginWindowHideShow() {
    const form = document.querySelector(".login-wrapper");
    const mainApp = document.querySelector(".App");
    form.classList.toggle("login-wrapper--active");
    mainApp.classList.toggle("App--blurred");
  }
