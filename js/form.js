import {mapReset} from './map.js';

const form = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

function resetForm(){
  form.reset();
  filterForm.reset();
  mapReset();
}

function activatePage(){
  const elements = document.getElementsByClassName('ad-form');
  const formElement = elements[0];
  formElement.classList.remove('ad-form--disabled');

  let fieldSets = formElement.getElementsByTagName('fieldset');
  for (let iIndex=0;iIndex<fieldSets.length;iIndex++) {
    fieldSets[iIndex].disabled=false;
  }

  const elementsMap = document.getElementsByClassName('map__filters');
  const mapElement = elementsMap[0];
  mapElement.classList.remove('map__filters--disabled');

  fieldSets = mapElement.getElementsByTagName('fieldset');
  for (let iIndex=0;iIndex<fieldSets.length;iIndex++) {
    fieldSets[iIndex].disabled=false;
  }

  fieldSets = mapElement.getElementsByTagName('select');
  for (let iIndex=0;iIndex<fieldSets.length;iIndex++) {
    fieldSets[iIndex].disabled=false;
  }
}

function deactivatePage(){
  const elements = document.getElementsByClassName('ad-form');
  const formElement = elements[0];
  formElement.classList.add('ad-form--disabled');

  let fieldSets = formElement.getElementsByTagName('fieldset');
  for (let iIndex=0;iIndex<fieldSets.length;iIndex++) {
    fieldSets[iIndex].disabled=true;
  }

  const elementsMap = document.getElementsByClassName('map__filters');
  const mapElement = elementsMap[0];
  mapElement.classList.add('map__filters--disabled');

  fieldSets = mapElement.getElementsByTagName('fieldset');
  for (let iIndex=0;iIndex<fieldSets.length;iIndex++) {
    fieldSets[iIndex].disabled=true;
  }

  fieldSets = mapElement.getElementsByTagName('select');
  for (let iIndex=0;iIndex<fieldSets.length;iIndex++) {
    fieldSets[iIndex].disabled=true;
  }
}

function formSubmit (){
  const body = document.querySelector('body');
  const success = document.querySelector('#success').content.querySelector('.success');
  const error = document.querySelector('#error').content.querySelector('.error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: new FormData(event.target),
      })
      .then((response) => {
        if (response.ok) {
          body.appendChild(success.cloneNode(true));
        }
        else {
          body.appendChild(error.cloneNode(true));
        }
      });
  });
}

window.onkeydown = (evt) => {
  const newSuccess = document.querySelector('body .success');
  const newError = document.querySelector('body .error');
  if (newError !== null){
    if (evt.code === 'Escape') {
      evt.preventDefault();
      resetForm();
      newError.remove();
    }
  }
  if (newSuccess !== null){
    if (evt.code === 'Escape') {
      evt.preventDefault();
      resetForm();
      newSuccess.remove();
    }
  }
};

window.onclick = () => {
  const newSuccess = document.querySelector('body .success');
  const newError = document.querySelector('body .error');
  if (newError !== null){
    resetForm();
    newError.remove();
  }
  if (newSuccess !== null){
    resetForm();
    newSuccess.remove();
  }
};

export {deactivatePage , activatePage , formSubmit};
