const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const yearEl = document.querySelector(".year");

const today = new Date();
const currentYear = today.getFullYear();
const newYear = currentYear + 1;
yearEl.innerText = newYear;

const newYearDate = new Date(`January 01 ${newYear} 00:00:00`);

updateCountdown();
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearDate - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  dayEl.innerText = d;
  hourEl.innerText = h < 10 ? "0" + h : h;
  minuteEl.innerText = m < 10 ? "0" + m : m;
  secondEl.innerText = s < 10 ? "0" + s : s;
  setTimeout(updateCountdown, 1000);
}
