const burgerMenu = document.getElementById('burger-menu');
const desktopMenu = document.getElementById('desktop-menu');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const modalLinks = document.querySelectorAll('#modal a');


burgerMenu.addEventListener('click', function() {
  this.classList.toggle('open');
  modal.classList.toggle('open');
});

closeModal.addEventListener('click', function() {
  modal.classList.remove('open');
});

modalLinks.forEach(link => {
  link.addEventListener('click', function() {
    modal.classList.remove('open');
  });
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 750 && burgerMenu.classList.contains('open')) {
    burgerMenu.classList.remove('open');
    modal.classList.remove('open');
  }
});