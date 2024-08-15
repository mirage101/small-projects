const searchBarContainerEl = document.querySelector('.search-bar-container');
const mangifierEl = document.querySelector('.magnifier');
const micIconEl = document.querySelector('.mic-icon');
const inputEl = document.querySelector('.input');

mangifierEl.addEventListener('click', () => {
    searchBarContainerEl.classList.toggle('active');
});