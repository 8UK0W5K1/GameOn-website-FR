function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalClose = document.querySelector('.cross');
const modalCloseBtn = document.querySelector('.close');
const registerForm = document.querySelector('#form');
const sendDataButton = document.querySelector('.send');
const registeredUser = document.querySelector('.register');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
modalClose.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// Click to close the Modal
modalCloseBtn.addEventListener('click', closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

// display register modal after data send
function displayRegistered() {
  registerForm.style.display = 'none';

  registeredUser.style.display = 'block';
}

sendDataButton.addEventListener('click', displayRegistered);

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
