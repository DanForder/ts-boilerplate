import confetti from "./node_modules/canvas-confetti/dist/confetti.module.mjs";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const fireConfetti = () => {
  confetti({
    particleCount: randomInRange(50, 100),
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    origin: { y: 0.6 },
  });
};

setInterval(() => {
  fireConfetti();
}, 250);
