
let snake;
let rez = 20;
let food;
let w;
let h;
var backgroundImg
function preload(){
    bgImg();
}
function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  background(backgroundImg);
  scale(rez);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    backgroundImg= loadImage("sprites/d.png");
    noLoop();
  }
  
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
function bgImg(){
  let x = Snake.body[snake.body.length-1].x;
  let y = Snake.body[snake.body.length-1].y;
  if(x > w-1 || x < 0 || y > h-1 || y < 0) {
    bg="sprites/BG.jpg";
  }
  else{
    bg="sprites/d.png";
  }
  backgroundImg=loadImage(bg);
  }