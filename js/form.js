function deactivatePage(){
  const elements = document.getElementsByClassName('ad-form');
  const formElement = elements[0];
  formElement.classList.add('ad-form--disabled');

  let fieldSets = formElement.getElementsByTagName('fieldset');
  for (let i=0;i<fieldSets.length;i++) {
    fieldSets[i].disabled=true;
  }

  const elementsMap = document.getElementsByClassName('map__filters');
  const mapElement = elementsMap[0];
  mapElement.classList.add('map__filters--disabled');

  fieldSets = mapElement.getElementsByTagName('fieldset');
  for (let i=0;i<fieldSets.length;i++) {
    fieldSets[i].disabled=true;
  }

  fieldSets = mapElement.getElementsByTagName('select');
  for (let i=0;i<fieldSets.length;i++) {
    fieldSets[i].disabled=true;
  }
}

function activatePage(){
  const elements = document.getElementsByClassName('ad-form');
  const formElement = elements[0];
  formElement.classList.remove('ad-form--disabled');

  let fieldSets = formElement.getElementsByTagName('fieldset');
  for (let i=0;i<fieldSets.length;i++) {
    fieldSets[i].disabled=false;
  }

  const elementsMap = document.getElementsByClassName('map__filters');
  const mapElement = elementsMap[0];
  mapElement.classList.remove('map__filters--disabled');

  fieldSets = mapElement.getElementsByTagName('fieldset');
  for (let i=0;i<fieldSets.length;i++) {
    fieldSets[i].disabled=false;
  }

  fieldSets = mapElement.getElementsByTagName('select');
  for (let i=0;i<fieldSets.length;i++) {
    fieldSets[i].disabled=false;
  }
}
export {deactivatePage , activatePage};
