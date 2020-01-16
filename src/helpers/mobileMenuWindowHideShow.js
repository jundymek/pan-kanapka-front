export function mobileMenuWindowHideShow() {
    const nav = document.getElementById('hamburger-nav');
    const burger = document.getElementById('burger');
    const loggedHamburger = document.querySelector('.hamburger-nav-logged')
    const bb = document.querySelector('.hamburger-wrapper')
    bb.classList.toggle('hamburger-wrapper--open')
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    if (loggedHamburger) {
        loggedHamburger.classList.toggle('hamburger-nav-logged--is-open');
    }
  }
  