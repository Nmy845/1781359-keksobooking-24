export{generateCards};

function generateCard (offer,author){

  const card = document.createElement('div');
  card.classList.add('card');

  const cardArticle = document.createElement('article');
  cardArticle.classList.add('popup');
  card.appendChild(cardArticle);

  const cardImg = document.createElement('img');
  cardImg.classList.add('popup__avatar');
  cardImg.setAttribute('src',author.avatar);
  cardImg.setAttribute('width','70');
  cardImg.setAttribute('heigth','70');
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

  for (let i=0;i<offer.features.length;i++){

    const cardFeature = document.createElement('li');
    cardFeature.classList.add('popup__feature',`popup__feature--${offer.features[i]}`);
    cardFeatures.appendChild(cardFeature);

  }

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('popup_description');
  cardDescription.textContent = offer.description;
  cardArticle.appendChild(cardDescription);


  const cardPhotos = document.createElement('div');
  cardPhotos.classList.add('popup_photos');
  for(let i=0;i < offer.photos.length;i++){
    cardPhotos.setAttribute('src',offer.photos[i]);
    cardPhotos.setAttribute('width','45');
    cardPhotos.setAttribute('height','40');
    cardPhotos.setAttribute('alt','Фотография жилья');
    cardDescription.appendChild(cardPhotos);
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


  return card;
}


function hideEmpty (field,element){
  if (field == '' || field == undefined) {
    element.style.display = 'none';
  }


}


function generateCards(objects){
  const generatedCards = [];
  objects.forEach((object) => {
    const card = generateCard(object.offer,object.author);
    generatedCards.push(card);
  });
  return generatedCards;

}


