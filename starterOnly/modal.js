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
const modalClose = document.querySelectorAll('.cross');
const modalCloseBtn = document.querySelector('.close');
const registerForm = document.querySelector('#form');
const sendDataButton = document.querySelector('.send');
const registeredUser = document.querySelector('.register');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
modalClose.forEach((cross) => cross.addEventListener('click', closeModal));

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
  // registerForm.style.display = 'none';

  registeredUser.style.display = 'block';
}

sendDataButton.addEventListener('click', displayRegistered);

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

// DOM FORM INPUTS & VALIDATIONS
const form = document.querySelector('#form');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const locations = document.querySelector('#locations');
const userConditions = document.querySelector('#checkbox1');

// REGEX for VALIDATIONS
// with a-z A-Z with accents, at least 2 chars
const fullNameRegex =
  /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]{2,}$/;
//common emailRegex
// const emailRegex = /\S+@\S+\.\S+/;
const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
// max 99
const rangeRegex = /^[1-9]?[0-9]{1,1}$/;

// const isEmpty = (str) => !str.trim().length;

// document.getElementById('first').addEventListener('input', function () {
//   if (isEmpty(this.value)) {
//     console.log('NAME is invalid (Empty)');
//   } else {
//     console.log(`NAME value is: ${this.value}`);
//   }
// });
