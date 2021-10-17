import {MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG, OFFER_TITLE, OFFER_TYPE, OFFER_TIMES, OFFER_FEATURES, OFFER_DESCRIPTION, OFFER_PHOTOS} from './data.js';
import {randomInt, randomFloat, shuffle} from './utils.js';


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


const objects = [];

function arrayObjects (){
  for(let index=0; index <10; index++){
    objects.push (generateObject());
  }
}

arrayObjects();
