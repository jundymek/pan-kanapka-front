export function loginWindowHideShow() {
    const form = document.querySelector(".login-wrapper");
    const mainApp = document.querySelector(".App");
    disableButtonsOnLoginWindowShow()
    form.classList.toggle("login-wrapper--active");
    mainApp.classList.toggle("App--blurred");
    
  }

function disableButtonsOnLoginWindowShow() {
  console.log('dupa')
  const allButtons = [...document.querySelectorAll("button")]
  const filteredButtons = allButtons.filter((btn) => !['login__exit', 'login-form__button', 'logout-button--js'].includes(btn.className));
  console.log(filteredButtons)
  filteredButtons.forEach((item) => item.disabled === true ? item.disabled = false : item.disabled = true)
}
