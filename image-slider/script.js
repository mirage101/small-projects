const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const imgEls = document.querySelectorAll('img');
const imageContainerEl = document.querySelector('.image-container');
const autoplayEl = document.querySelector('.auto');

let currentImg = 1;
let timeout;

nextEl.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});
prevEl.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgEls.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgEls.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 4500);
}
