import {activatePage} from './form.js';
import { generateCard } from './cards.js';
import { showError } from './utils.js';
import { filterFormData, saveData } from './filter.js';

const mapZoom = 11;
const DEFAULT_LAT = 35.73852;
const DEFAULT_LNG = 139.78927;
const location = document.querySelector('#address');
let markers = [];

location.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, mapZoom);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  const adress = evt.target.getLatLng();
  location.value = `${adress.lng.toFixed(5)}, ${adress.lat.toFixed(5)}`;
});

const classicPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const mapReset = () => {
  mainPinMarker.setLatLng({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });
  map.setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, mapZoom);
  location.value = `${DEFAULT_LNG}, ${DEFAULT_LAT}`;
  map.closePopup();
};

export function clearMarkers() {
  for (let iIndex = 0; iIndex < markers.length ; iIndex++){
    map.removeControl(markers[iIndex]);
  }
  markers = [];
}

export function drawMarkers (data){
  clearMarkers();
  for (let iIndex=0;iIndex<data.length;iIndex++){
    const card = generateCard(data[iIndex].offer,data[iIndex].author);
    const marker = L.marker(
      {
        lat: data[iIndex].location.lat,
        lng: data[iIndex].location.lng,
      },
      {
        draggable: false,
        icon: classicPinIcon,
      },
    );
    const newMarker = marker.bindPopup(card);
    markers.push(newMarker);
    map.addControl(newMarker);
  }
}

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    showError('Ошибочка вышла');
    throw new Error('Ошибка загрузки сервера!');
  })
  .then ((data) => {
    saveData(data);
    return filterFormData();
  })
  .then((data) => {
    drawMarkers(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
