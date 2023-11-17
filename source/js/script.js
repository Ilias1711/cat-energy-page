let navMain = document.querySelector('main-nav');
let navToggle = document.querySelector('main-nav__toggle');

navToggle.addEventListener ('clic', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
})
