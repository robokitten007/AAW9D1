
function MovingObject({pos, vel, radius, color}){
   this.pos = pos;
   this.vel = vel;
   this.radius = radius;
   this.color = color;
}

MovingObject.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  ctx.fillStyle = this.color;
  ctx.fill();
};

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

module.exports = MovingObject;

