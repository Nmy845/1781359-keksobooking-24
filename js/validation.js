const form = document.querySelector('.ad-form');
const formType = form.querySelector('#type');
const formPrice = form.querySelector('#price');
const formRooms = form.querySelector('#room_number');
const formCapacity = form.querySelector('#capacity');
const flatPrice = 1000;
const bungalowPrice = 0;
const hotelPrice = 3000;
const housePrice = 5000;
const palacePrice = 10000;

formType.addEventListener('change', (event) => {
  switch(event.target.value) {
    case 'flat':
      formPrice.min=flatPrice;
      formPrice.placeholder=flatPrice;
      break;
    case 'bungalow':
      formPrice.min=bungalowPrice;
      formPrice.placeholder=bungalowPrice;
      break;
    case 'hotel':
      formPrice.min=hotelPrice;
      formPrice.placeholder=hotelPrice;
      break;
    case 'house':
      formPrice.min=housePrice;
      formPrice.placeholder=housePrice;
      break;
    case 'palace':
      formPrice.min=palacePrice;
      formPrice.placeholder=palacePrice;
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

const palace = formCapacity.querySelector('option[value="0"]');
const oneRoom = formCapacity.querySelector('option[value="3"]');
const twoRoom = formCapacity.querySelector('option[value="2"]');
const threeRoom =  formCapacity.querySelector('option[value="1"]');

function roomValidation () {
  oneRoom.disabled=true;
  twoRoom.disabled=true;
  palace.disabled=true;
}
roomValidation(); //фикс того,что до обработки события даёт выбрать любое количество мест. Можно сделать через поиск по Selected ,а selected по умолчанию 1 комната.

formRooms.addEventListener('change', (event) => {
  const options = formCapacity.querySelectorAll('option');
  for (let i=0;i<options.length;i++){
    options[i].disabled=false;
  }
  switch(event.target.value) {
    case '3':
      palace.disabled=true;
      break;
    case '2':
      oneRoom.disabled=true;
      palace.disabled=true;
      break;
    case '1':
      oneRoom.disabled=true;
      twoRoom.disabled=true;
      palace.disabled=true;
      break;
    case '100':
	 	oneRoom.disabled=true;
	 	twoRoom.disabled=true;
	 	threeRoom.disabled=true;
      break;
  }
});
