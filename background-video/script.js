const btn = document.querySelector(".btn");
const video = document.querySelector(".bgvideo");
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
    video.play();
  } else {
    btn.classList.add("pause");
    fa.classList.add("fa-play");
    fa.classList.remove("fa-pause");
    video.pause();
  }
});

window.addEventListener("load", () => {
  preloader.style.zIndex = -2;
});
