// const cv = this.$refs.a

console.log(cv)
const c = cv.getContext("2d");

const w = cv.width = window.innerWidth;
const h = cv.height = window.innerHeight;

function draw ({clientX = w / 2, clientY = h / 2}) {
  c.save();
  c.clearRect(0, 0, w, h);
  c.rect(0, 0, w, h);
  c.fill();
  c.globalCompositeOperation = "destination-out";
  const rg = c.createRadialGradient(clientX, clientY, 1, clientX, clientY, 100);
  rg.addColorStop(0, "rgba(0,0,0,1)");
  rg.addColorStop(.7, "rgba(0,0,0,1)");
  rg.addColorStop(1, "rgba(0,0,0,0)");
  c.beginPath();
  c.fillStyle = rg;
  c.arc(clientX, clientY, 100, 0, 2 * Math.PI);
  c.fill();
  c.restore()
}
draw({});
cv.addEventListener("mousemove", draw)
