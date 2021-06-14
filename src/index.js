console.log("Webpack is working!");
const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', () => {
  const canvasEL = document.getElementById("game-canvas");

  const ctx = canvasEL.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 1000, 600);
})

