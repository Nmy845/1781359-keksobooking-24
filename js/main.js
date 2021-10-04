
function randomInt(from, to) {
  if (from > to) {
    return Math.ceil(Math.random() * (from - to) + to);
  }
  return Math.ceil(Math.random() * (to - from) + from);
}

function randomFloat(from, to, decimals) {
  let number;
  if (from > to) {
    number = (Math.random() * (from - to) + to) * Math.pow(10, decimals);
  }
  else {
    number = (Math.random() * (to - from) + from) * Math.pow(10, decimals);
  }
  return Math.ceil(number) / Math.pow(10, decimals);
}

randomInt(1, 412);
randomFloat(1.2, 1.9);
