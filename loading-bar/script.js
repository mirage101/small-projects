const counterEl = document.querySelector('.counter');
const loadingBarBackEl = document.querySelector('.loading-bar-back');
const loadingBarFrontEl = document.querySelector('.loading-bar-front');
const loadingBarEl = document.querySelector('.loading-bar');
let counter = 0;
const maxCounter = 100;
const minCounter = 0;
const step = (maxCounter - minCounter) / 100;
const interval = setInterval(() => {
  counter += step;
  counterEl.textContent = `${Math.round(counter)}%`;
  loadingBarFrontEl.style.width = `${counter}%`;
  //loadingBarBackEl.style.width = `${counter}%`;
  if (counter >= maxCounter) {
    clearInterval(interval);
  }
}, 20);
