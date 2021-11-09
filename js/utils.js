import { MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG, OFFER_TITLE, OFFER_TYPE, OFFER_TIMES, OFFER_FEATURES, OFFER_DESCRIPTION, OFFER_PHOTOS } from './data.js';

const ALERT_TIME = 3000;

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
      checkin: OFFER_TIMES[randomInt(0, OFFER_TIMES.length - 1)],
      checkout: OFFER_TIMES[randomInt(0, OFFER_TIMES.length - 1)],
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

function showError(text) {
  const errorContainer = document.createElement('div');
  const errorMessage = document.createElement('p');
  errorContainer.appendChild(errorMessage);
  errorMessage.textContent = text;
  errorContainer.style.position = 'fixed';
  errorContainer.style.width = '100%';
  errorContainer.style.height = '40px';
  errorContainer.style.backgroundColor = '#FFCDD2';
  errorContainer.style.color = '#BF360C';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.left = '0';
  errorContainer.style.top = '0';
  errorContainer.style.zIndex = '1000';
  errorMessage.style.margin = '10px';

  document.body.appendChild(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  },
  ALERT_TIME);
}

export { randomInt, randomFloat, shuffle , generateObject , showError };
