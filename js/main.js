
function randomInt(from, to) {
  if (from < 0 || to < 0) {
    return 'Параметры диапазона должны быть неотрицательными';
  }
  if (from > to) {
    return Math.ceil(Math.random() * (from - to) + to);
  }
  return Math.ceil(Math.random() * (to - from) + from);
}

function randomFloat(from, to, decimals) {
  if (from < 0 || to < 0) {
    return 'Параметры диапазона должны быть неотрицательными';
  }
  let number;
  const lengthNumber = Math.ceil(decimals);
  if (from > to) {
    number = (Math.random() * (from - to) + to) * Math.pow(10, lengthNumber);
  }
  else {
    number = (Math.random() * (to - from) + from) * Math.pow(10, lengthNumber);
  }
  return Math.ceil(number) / Math.pow(10, lengthNumber);
}

randomInt(1, 10);
randomFloat(1.1, 1.2, 10);

const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const OFFER_TITLE = ['Купить Квартиру', 'Купить комнату', 'Купить и сразу продать', 'Продам гараж'];

const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const OFFER_TIMES = ['12:00', '13:00', '14:00'];


const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const OFFER_DESCRIPTION = ['На всю стену — огромное окно, через которое к комнате утром заглядывает солнышко. Посреди помещения — круглый стол коричневого цвета, с изысканной резьбой, украшенный красными гвоздиками в керамическом весе.',
  'Когда я вхожу в эту комнату, то в глаза сразу бросается большое металлопластиковое окно. Оно выходит во двор. На подоконнике стоят в горшках цветы. Мне нравится зимними вечерами любоваться их зеленью'];

const OFFER_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

//Функция была взята из интернета и изменена
//ссылка на источник https://learn.javascript.ru/task/shuffle

function shuffle(array) {
  for (let iIndex = array.length - 1; iIndex > 0; iIndex--) {
    const jIndex = Math.floor(Math.random() * (iIndex + 1));
    [array[iIndex], array[jIndex]] = [array[jIndex], array[iIndex]];
  }
}


function generateObject() {
  let avatarId = randomInt(1, 10);
  avatarId = (avatarId < 10) ? `0${avatarId}` : avatarId;

  const lng = randomFloat(MIN_LNG, MAX_LNG, 5);
  const lat = randomFloat(MIN_LAT, MAX_LAT, 5);
  shuffle(OFFER_FEATURES);
  shuffle(OFFER_PHOTOS);
  return {
    author: {
      avatar: `img/avatars/user${avatarId}.png`,
    },
    offer: {
      title: OFFER_TITLE[randomInt(0, OFFER_TITLE.length - 1)],
      address: `${lat}, ${lng}`,
      price: randomInt(1, 99999),
      type: OFFER_TYPE[randomInt(0, OFFER_TYPE.length - 1)],
      rooms: randomInt(1, 6),
      guests: randomInt(1, 4),
      checkin: OFFER_CHECKIN[randomInt(0, OFFER_TIMES.length - 1)],
      checkout: OFFER_CHECKOUT[randomInt(0, OFFER_TIMES.length - 1)],
      features: OFFER_FEATURES.slice(0, randomInt(1, OFFER_FEATURES.length)),
      description: OFFER_DESCRIPTION[randomInt(0, OFFER_DESCRIPTION.length - 1)],
      photos: OFFER_PHOTOS.slice(0, randomInt(1, OFFER_PHOTOS.length)),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
}


const objects = [];

function arrayObjects (){
  for(let index=0; index <10; index++){
    objects.push (generateObject());
  }
}

arrayObjects();
