
var bg;
var mount;
var cloud;
var house;
var engine, world;
var forest1, forest2, forestImg;
var backforest1, backforest2, backforest1Img;
var backforest3, backforest4, backforest2Img;
var backforest5, backforest6, backforest3Img;


function preload() {
  windSound = loadSound("sound/win.mp3");

  snowImg = loadImage("images/snow.png");
  mountImg = loadImage("images/mount.png");
  houseImg = loadImage("images/house.png");
  cloudImg = loadImage("images/clouds.png");
  bg = loadImage("images/Background 5.png");
  forestImg = loadImage("images/forest.png");
  backforest1Img = loadImage("images/backforest1.png");
  backforest2Img = loadImage("images/backforest2.png");
  backforest3Img = loadImage("images/backforest3.png");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  windSound.loop();

  cloud = createSprite(width / 2, 280);
  cloud.addImage(cloudImg);
  cloud.scale = 2.1;

  mount = createSprite(width / 2, height / 2);
  mount.addImage(mountImg);
  mount.scale = 0.25;

  //this is the backforest3 animation .
  backforest5 = createSprite(width / 2, height - 260);
  backforest5.addImage(backforest3Img);
  backforest5.scale = 0.78;
  backforest5.velocityX = -0.10;

  backforest6 = createSprite(width + width / 2, height - 260);
  backforest6.addImage(backforest3Img);
  backforest6.scale = 0.78;
  backforest6.velocityX = -0.10;
  //this is the backforest2 animation .
  backforest3 = createSprite(width / 2, height - 240);
  backforest3.addImage(backforest2Img);
  backforest3.scale = 0.78;
  backforest3.velocityX = -0.15;

  backforest4 = createSprite(width + width / 2, height - 240);
  backforest4.addImage(backforest2Img);
  backforest4.scale = 0.78;
  backforest4.velocityX = -0.15;
  //this is the backforest1 animation .
  backforest1 = createSprite(width / 2, height - 210);
  backforest1.addImage(backforest1Img);
  backforest1.scale = 0.78;
  backforest1.velocityX = -0.20;

  backforest2 = createSprite(width + width / 2, height - 210);
  backforest2.addImage(backforest1Img);
  backforest2.scale = 0.78;
  backforest2.velocityX = -0.20;

  //this is the forest animation .
  forest1 = createSprite(width / 2, height - 130);
  forest1.addImage(forestImg);
  forest1.scale = 0.59;
  forest1.velocityX = -0.25;

  forest2 = createSprite(width + width / 2, height - 130);
  forest2.addImage(forestImg);
  forest2.scale = 0.59;
  forest2.velocityX = -0.25;

  house = createSprite(width / 2, height - 200);
  house.addImage(houseImg);
  house.scale = 0.45;
  house.velocityX = -0.25;

}

function draw() {
  background(bg);
  forest();
  drawSprites();
  snowSpawn1();
  snowSpawn2();
  snowSpawn3();
  snowSpawn4();
}

function forest() {
  if (forest1.x < -width / 2) {
    forest1.x = width + width / 2
  }
  if (forest2.x < -width / 2) {
    forest2.x = width + width / 2
  }
  if (backforest1.x < -width / 2) {
    backforest1.x = width + width / 2
  }
  if (backforest2.x < -width / 2) {
    backforest2.x = width + width / 2
  }
  if (backforest3.x < -width / 2) {
    backforest3.x = width + width / 2
  }
  if (backforest4.x < -width / 2) {
    backforest4.x = width + width / 2
  }
  if (backforest5.x < -width / 2) {
    backforest5.x = width + width / 2
  }
  if (backforest6.x < -width / 2) {
    backforest6.x = width + width / 2
  }
  if (house.x < -200) {
    house.x = width + 300
  }
}