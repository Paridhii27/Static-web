function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  background(0);
}

function draw() {
  noStroke();
  fill(mouseX, 150);
  ellipse(mouseX, mouseY, mouseX, 5);
}
