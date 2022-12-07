'use strict';

// if (module.hot) module.hot.accept();

// DOM elements
const cardBtns = document.querySelectorAll('.card__btn');
const navLinks = document.querySelectorAll('.navigation__link');
const navCheckBox = document.querySelector('.navigation__checkbox');

/////////////Runtime
let mediaQueryTabLand = window.matchMedia('(max-width: 75em)');

// Event listeners
//== When change to Tab Land
mediaQueryTabLand.addEventListener('change', handleTabLandChange);

//== When click on navigation link
navLinks.forEach(element => {
  element.addEventListener('click', handleNavLinkClick);
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

function handleNavLinkClick() {
  console.log('link clicked');
  navCheckBox.checked = true;
}
