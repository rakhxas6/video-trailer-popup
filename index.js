const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEL = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active"); //video dekhinxa
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active"); //video dekhinna
  videoEL.pause();
  videoEL.currentTime = 0;
});
