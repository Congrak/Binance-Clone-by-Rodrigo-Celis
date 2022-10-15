const grid = document.getElementById('#grid');
const a = document.getElementById('#dropdown-menu-grid');
const h = document.getElementById('#header');

h.addEventListener('click',() => {
  a.classList.toggle('scale');
})