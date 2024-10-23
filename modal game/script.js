'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//compressing showmodal function
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//FOR LOOP
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', showModal);
//   btnsOpenModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

//compressing closemodal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
overlay.addEventListener('click', closeModal);
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//SETTING ESC & BACKSPACE KEY TO CLOSE A POPUP
document.addEventListener('keydown', function (e) {
  if (
    (e.key === 'Escape', 'Backspace' && !modal.classList.contains('hidden'))
  ) {
    closeModal(); //CALLING closeModal function
  }
});
