import { debounce } from './utils/debounce.js';
import { drawMarkers } from './map.js';

const MAX_MARKER_COUNT = 10;

let savedData = [];
const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const featuresFilter = mapFilters.querySelector ('#housing-features');

const filterData = {
  type: typeFilter.value,
  price: priceFilter.value,
  rooms: roomsFilter.value,
  guests: guestsFilter.value,
  features: [],
};

typeFilter.addEventListener('change', (event) => {
  filterData.type = event.target.value;
  filterFormData();
});
priceFilter.addEventListener('change', (event) => {
  filterData.price = event.target.value;
  filterFormData();
});
roomsFilter.addEventListener('change', (event) => {
  filterData.rooms = event.target.value;
  filterFormData();
});
guestsFilter.addEventListener('change', (event) => {
  filterData.guests = event.target.value;
  filterFormData();
});
featuresFilter.addEventListener('change', (event) => {
  const index = filterData.features.indexOf(event.target.value);
  if (index !== -1){
    filterData.features.splice(index, 1);
  }
  else {
    filterData.features.push(event.target.value);
  }
  filterFormData();
});

export function filterFormData(){
  const newData = savedData
    .filter((dataItem) => {
      if (filterData.type === 'any') {
        return true;
      }
      else {
        return dataItem.offer.type === filterData.type;
      }
    })
    .filter((dataItem) => {
      switch(filterData.price){
        case 'low' :
          return dataItem.offer.price < 10000;
        case 'middle':
          return dataItem.offer.price >= 10000 && dataItem.offer.price <= 50000;
        case 'high':
          return dataItem.offer.price > 50000;
        default:
          return true;
      }
    })
    .filter((dataItem) => {
      if (filterData.guests == 'any') {
        return true;
      }
      else {
        return dataItem.offer.guests <= filterData.guests;
      }
    })
    .filter((dataItem) => {
      if (filterData.rooms == 'any') {
        return true;
      }
      else {
        return dataItem.offer.rooms == filterData.rooms;
      }
    })
    .filter((dataItem) => {
      if (dataItem.offer.features == undefined && filterData.features.length > 0) {
        return false;
      }
      let index = 0;
      for (let i = 0; i < filterData.features.length; i++) {
        index = dataItem.offer.features.indexOf(filterData.features[i]);
        if (index == -1) {
          return false;
        }
      }
      return true;
    })
    .slice(0,MAX_MARKER_COUNT);
  debounce(() => drawMarkers(newData))();
  return newData;
}

export function saveData (data){
  savedData = data ;
}
