'use strict';

// if (module.hot) module.hot.accept();

// DOM elements
const cardBtns = document.querySelectorAll('.card__btn');

/////////////Runtime
let mediaQueryTabLand = window.matchMedia('(max-width: 75em)');

// Register event listener
mediaQueryTabLand.addEventListener('change', handleTabLandChange);

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
