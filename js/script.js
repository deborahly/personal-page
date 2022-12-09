'use strict';

// if (module.hot) module.hot.accept();

// DOM elements
const cardBtns = document.querySelectorAll('.card__btn');
const navCheckBox = document.querySelector('.navigation__checkbox');
const navBackground = document.querySelector('navigation__background');
const nav = document.querySelector('navigation__nav');
const navLinks = document.querySelectorAll('.navigation__link');

/////////////Runtime
let mediaQueryTabLand = window.matchMedia('(max-width: 75em)');

// Event listeners
//== When change to Tab Land
mediaQueryTabLand.addEventListener('change', handleTabLandChange);

//== When click on navigation checkbox
navCheckBox.addEventListener('click', () => {
  navCheckBox.toggleAttribute('checked');
});

//== When click on navigation link
navLinks.forEach(element => {
  element.addEventListener('click', () => {
    navCheckBox.toggleAttribute('checked');
  });
});

// Initial check
handleTabLandChange(mediaQueryTabLand);

// Functions
function handleTabLandChange(mediaQuery) {
  if (!mediaQuery.matches) {
    console.log('does not match');
    cardBtns.forEach(element => {
      element.classList.remove('btn--blue');
      element.classList.add('btn--white');
    });
  }

  if (mediaQuery.matches) {
    console.log('matches');
    cardBtns.forEach(element => {
      element.classList.remove('btn--white');
      element.classList.add('btn--blue');
    });
  }
}
