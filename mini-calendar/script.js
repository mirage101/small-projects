const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dayNumber = document.getElementById('day-number');
const year = document.getElementById('year');

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const yearValue = date.getFullYear();
//console.log(date.getDate())
monthName.innerText = date.toLocaleDateString('en-US', {month: 'long'});
dayName.innerText = date.toLocaleDateString('en-US', {weekday: 'long'});
dayNumber.innerText = date.toLocaleDateString('en-US', {day: 'numeric'});
year.innerText = date.toLocaleDateString('en-US', {year: 'numeric'});
