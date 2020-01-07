export function mobileMenuWindowHideShow() {
    const nav = document.getElementById('hamburger-nav');
    const burger = document.getElementById('burger');
    const loggedHamburger = document.querySelector('.hamburger-nav-logged')
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    document.body.classList.toggle("no-scroll")
    if (loggedHamburger) {
        loggedHamburger.classList.toggle('hamburger-nav-logged--is-open');
    }
  }
  