import ColorThief from "colorthief";
import confetti from "canvas-confetti";

const randomInRange = (min, max) => Math.random() * (max - min) + min;

const fireConfetti = () => {
  for (let index = 0; index < 5; index++) {
    const confettiOptions = {
      particleCount: randomInRange(50, 100),
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      origin: { y: 0.6 },
    };

    confetti(confettiOptions);
  }
};

const image = document.querySelector("#img");
const imageUrl = document.querySelector("#image-input");
const fileUpload = document.querySelector("#file-upload");
// const clearUpload = document.querySelector("#clear-upload");

let file;

const handleFileInput = (event) => {
  event.preventDefault();
  file = event.target.files[0];
  const url = URL.createObjectURL(file);
  image.src = url;
};

fileUpload.addEventListener("input", handleFileInput);

const handleUrlInput = (event) => {
  console.log(event.target.value);
  image.src = event.target.value;
};

imageUrl.addEventListener("input", handleUrlInput);

// const handleClearUpload = () => {
//   console.log("hello");
//   fileUpload.value = null;
// };

// clearUpload.addEventListener("click", handleClearUpload);

const colorThief = new ColorThief();

const onImageLoad = () => {
  const [red, green, blue] = colorThief.getColor(image);
  const body = document.querySelector("body");
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;

  console.log("%cTHIS IS THE COLOR", `color: rgb(${red},${green},${blue});`);
  fireConfetti();
};

image.addEventListener("load", onImageLoad);
