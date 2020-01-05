export function mobileMenuWindowHideShow() {
    const nav = document.getElementById('main-nav');
    const burger = document.getElementById('burger');
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');

  }
  