const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");
const popupContainer = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainer.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {});
