const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
  let imageNum = 10;
  fetchImages(imageNum);
});

function fetchImages(imageNum) {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement('img');
    newImgEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainerEl.append(newImgEl);
  }
}
