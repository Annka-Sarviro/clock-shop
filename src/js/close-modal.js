'use strict';

(() => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const openMenuBtn = document.querySelector('#modal-open-btn');
  const closeMenuBtn = document.querySelector('#modal-close-btn');
  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('visually-hidden');
    openMenuBtn.classList.toggle('--is-open');
    // closeMenuBtn.classList.toggle('visually-hidden');
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();
