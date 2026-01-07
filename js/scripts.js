const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar');
const close = document.getElementById('cross');


if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}
