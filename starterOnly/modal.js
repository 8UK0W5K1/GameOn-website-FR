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
  registerForm.style.display = 'none';

  registeredUser.style.display = 'block';
}

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
const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
// max 99
const rangeRegex = /^[1-9]?[0-9]{1,1}$/;

// VALIDATIONS
const isEmpty = (str) => !str.trim().length;
const emptyError = 'Désolé ce champ doit être rempli';
const firstError = 'Veuillez entrez au minimum 2 caractères';
const lastError = 'Veuillez entrez au minimum 2 caractères';
const emailError = 'Désolé, Le format "email" ne correspond pas';
const birthdateError = 'Désolé, vous devez selectionner une date';
const quantityError = 'Désolé, le nombre doit être compris entre 0 et 99';
const locationsError = 'Désolé, vous devez choisir une ville';
const userConditionsError =
  'Désolé, vous devez accepter les conditions utilisateur';

// document.getElementById('first').addEventListener('input', function () {
//   if (isEmpty(this.value)) {
//     console.log('NAME is invalid (Empty)');
//   } else {
//     console.log(`NAME value is: ${this.value}`);
//   }
// });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validates();
});

// DISPLAY ERROR FUNCTION
const setError = (element, message) => {
  const inputForm = element.parentElement;
  const displayError = inputForm.querySelector('.error');
  displayError.innerText = message;
  inputForm.classList.add('error');
  inputForm.classList.remove('success');
};

const setSuccess = (element) => {
  const inputForm = element.parentElement;
  const displayError = inputForm.querySelector('.error');
  displayError.innerText = '';
  inputForm.classList.add('success');
  inputForm.classList.remove('error');
};

// REGEX VERIFICATIONS

const isFirstValid = (firstName) => {
  return fullNameRegex.test(String(firstName).toLowerCase());
};
const isLastValid = (lastName) => {
  return fullNameRegex.test(String(lastName).toLowerCase());
};
const isEmailValid = (email) => {
  return emailRegex.test(String(email).toLowerCase());
};
const isQuantityValid = (quantity) => {
  return rangeRegex.test(String(quantity).toLowerCase());
};

// VERIFICATIONS VALIDATES

const validates = () => {
  const firstValue = firstName.value.trim();
  const lastValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
  const userConditionsValue = userConditions.checked;
  if (!isFirstValid(firstValue)) {
    setError(firstName, firstError);
  } else {
    setSuccess(firstName);
  }
  if (!isLastValid(lastValue)) {
    setError(lastName, lastError);
  } else {
    setSuccess(lastName);
  }
  if (!isEmailValid(emailValue)) {
    setError(email, emailError);
  } else {
    setSuccess(email);
  }
  if (!birthdateValue) {
    setError(birthdate, birthdateError);
  } else {
    setSuccess(birthdate);
  }
  if (!isQuantityValid(quantityValue)) {
    setError(quantity, quantityError);
  } else {
    setSuccess(quantity);
  }
  if (document.querySelectorAll('[name="location"]:checked').length < 1) {
    setError(locations, locationsError);
  } else {
    setSuccess(locations);
  }
  if (!userConditionsValue) {
    setError(userConditions, userConditionsError);
  } else {
    setSuccess(userConditions);
  }
  if (document.querySelectorAll('.success').length == 7) {
    displayRegistered();
  }
};
