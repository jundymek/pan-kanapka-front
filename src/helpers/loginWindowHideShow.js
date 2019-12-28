export function loginWindowHideShow() {
    const form = document.querySelector(".signUp-wrapper");
    const mainApp = document.querySelector(".App");
    disableButtonsOnLoginWindowShow()
    form.classList.toggle("signUp-wrapper--active");
    mainApp.classList.toggle("App--blurred");
    
  }

function disableButtonsOnLoginWindowShow() {
  const allButtons = [...document.querySelectorAll("button")]
  const filteredButtons = allButtons.filter((btn) => !['signUp__exit', 'signUp-form__button', 'logout-button--js'].includes(btn.className));
  filteredButtons.forEach((item) => item.disabled === true ? item.disabled = false : item.disabled = true)
}
