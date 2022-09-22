function toggleNav() {
  let menu = document.getElementById('navMenu');
  menu.classList.toggle('site-header__nav__menu--active');
}

let navToggleButton = document.getElementById('navMenuToggle');
navToggleButton.addEventListener('click', toggleNav);
