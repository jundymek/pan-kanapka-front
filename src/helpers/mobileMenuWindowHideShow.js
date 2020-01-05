export function mobileMenuWindowHideShow() {
    const nav = document.getElementById('hamburger-nav');
    const burger = document.getElementById('burger');
    // const loginMobile = document.querySelector('.login-mobile')
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    document.body.classList.toggle("no-scroll")
    // loginMobile.classList.toggle('is-open');

  }
  