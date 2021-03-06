const CARD_WIDTH = '45';
const CARD_HEIGHT = '40';
const IMG_WIDTH = '70';
const IMG_HEIGHT = '70';

function hideEmpty (field,element){
  if (field ==='' || field === undefined) {
    element.style.display = 'none';
  }
}

function generateCard (offer,author){
  const cardArticle = document.createElement('article');
  cardArticle.classList.add('popup');

  const cardImg = document.createElement('img');
  cardImg.classList.add('popup__avatar');
  cardImg.setAttribute('src',author.avatar);
  cardImg.setAttribute('width',IMG_WIDTH);
  cardImg.setAttribute('heigth',IMG_HEIGHT);
  cardImg.setAttribute('alt','Аватар пользователя');
  cardArticle.appendChild(cardImg);

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('popup_title');
  cardTitle.textContent = offer.title;
  cardArticle.appendChild(cardTitle);

  const cardAdress = document.createElement('p');
  cardAdress.classList.add('popup__text','popup__text--address');
  cardAdress.textContent = offer.address;
  cardArticle.appendChild(cardAdress);

  const cardPrice = document.createElement('p');
  cardPrice.classList.add('popup__text','popup__text--price');
  cardPrice.textContent = `${offer.price} ₽/ночь`;
  cardArticle.appendChild(cardPrice);

  const cardType = document.createElement('h4');
  cardType.classList.add('popup__type');
  switch(offer.type){
    case 'flat':
      cardType.textContent = 'Квартира';
      break;
    case 'bungalow':
      cardType.textContent = 'Бунгало';
      break;
    case 'house':
      cardType.textContent = 'Дом';
      break;
    case 'palace':
      cardType.textContent = 'Дворец';
      break;
    case 'hotel':
      cardType.textContent = 'Отель';
      break;
  }
  cardArticle.appendChild(cardType);

  const cardCapacity = document.createElement('p');
  cardCapacity.classList.add('popup__text','popup__text--capacity');
  cardCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardArticle.appendChild(cardCapacity);

  const cardTime = document.createElement('p');
  cardTime.classList.add('popup__text','popup__text--time');
  cardTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardArticle.appendChild(cardTime);

  const cardFeatures = document.createElement('ul');
  cardFeatures.classList.add('popup_features');
  cardArticle.appendChild(cardFeatures);

  if (offer.features !== undefined){
    for (let iIndex=0;iIndex<offer.features.length;iIndex++){
      const cardFeature = document.createElement('li');
      cardFeature.classList.add('popup__feature',`popup__feature--${offer.features[iIndex]}`);
      cardFeatures.appendChild(cardFeature);
    }
  }
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('popup_description');
  cardDescription.textContent = offer.description;
  cardArticle.appendChild(cardDescription);

  const cardPhotos = document.createElement('img');
  cardPhotos.classList.add('popup_photos');

  if(offer.photos !== undefined){
    for(let iIndex=0;iIndex < offer.photos.length;iIndex++){
      cardPhotos.setAttribute('src',offer.photos[iIndex]);
      cardPhotos.setAttribute('width',CARD_WIDTH);
      cardPhotos.setAttribute('height',CARD_HEIGHT);
      cardPhotos.setAttribute('alt','Фотография жилья');
      cardDescription.appendChild(cardPhotos);
    }
  }
  hideEmpty(offer.title,cardTitle);
  hideEmpty(offer.address,cardAdress);
  hideEmpty(offer.price,cardPrice);
  hideEmpty(offer.type,cardType);
  hideEmpty(offer.rooms,cardCapacity);
  hideEmpty(offer.guests,cardCapacity);
  hideEmpty(offer.checkin,cardTime);
  hideEmpty(offer.checkout,cardTime);
  hideEmpty(offer.features,cardFeatures);
  hideEmpty(offer.description,cardDescription);
  hideEmpty(offer.price,cardPhotos);

  return cardArticle;
}

export{generateCard};
