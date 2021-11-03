const form = document.querySelector('.ad-form');
const formType = form.querySelector('#type');
const formPrice = form.querySelector('#price');
const formRooms = form.querySelector('#room_number');
const formCapacity = form.querySelector('#capacity');

formType.addEventListener('change', (event) => {
  switch(event.target.value) {
    case 'flat':
      formPrice.min=1000;
      formPrice.placeholder=1000;
      break;
    case 'bungalow':
      formPrice.min=0;
      formPrice.placeholder=0;
      break;
    case 'hotel':
      formPrice.min=3000;
      formPrice.placeholder=3000;
      break;
    case 'house':
      formPrice.min=5000;
      formPrice.placeholder=5000;
      break;
    case 'palace':
      formPrice.min=10000;
      formPrice.placeholder=10000;
      break;
  }
},
);

const formFrom = form.querySelector('#timein');
const formAfter = form.querySelector('#timeout');

formFrom.addEventListener('change', (event) => {
  const formValue = event.target.value;
  formAfter.querySelector(`option[value="${formValue}"]`).selected='selected';
});

formAfter.addEventListener('change', (event) => {
  const formValue = event.target.value;
  formFrom.querySelector(`option[value="${formValue}"]`).selected='selected';
});

formRooms.addEventListener('change', (event) => {
  const options = formCapacity.querySelectorAll('option');
  for (let i=0;i<options.length;i++){
    options[i].disabled=false;
  }
  switch(event.target.value) {
    case '3':
      formCapacity.querySelector('option[value="0"]').disabled=true;
      break;
    case '2':
      formCapacity.querySelector('option[value="3"]').disabled=true;
      formCapacity.querySelector('option[value="0"]').disabled=true;
      break;
    case '1':
      formCapacity.querySelector('option[value="3"]').disabled=true;
      formCapacity.querySelector('option[value="2"]').disabled=true;
      formCapacity.querySelector('option[value="0"]').disabled=true;
      break;
    case '100':
      formCapacity.querySelector('option[value="3"]').disabled=true;
      formCapacity.querySelector('option[value="2"]').disabled=true;
      formCapacity.querySelector('option[value="1"]').disabled=true;
      break;
  }
});
