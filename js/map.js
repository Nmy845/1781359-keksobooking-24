import {activatePage} from './form.js';
import { generateObject } from './utils.js';
import { generateCard } from './cards.js';

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView([35.738528254599984, 139.78927363327273], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  {
    lat: 35.73852,
    lng: 139.78927,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  const adress = evt.target.getLatLng();
  const adressField = document.querySelector('#address');
  adressField.value = `${adress.lng}, ${adress.lat}`;
});

const classicPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

for (let i=0;i<10;i++){
  const object = generateObject();
  const card = generateCard(object.offer,object.author);
  const marker = L.marker(
    {
      lat: object.location.lat,
      lng: object.location.lng,
    },
    {
      draggable: false,
      icon: classicPinIcon,
    },
  );
  marker.addTo(map)
    .bindPopup(card);
}


