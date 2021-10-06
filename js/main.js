
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
