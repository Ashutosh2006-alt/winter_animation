function snowSpawn1() {
   if (frameCount % 2 === 0) {
     var snow = createSprite(Math.round(random(0, width)), Math.round(random(-10, 0)));
     snow.addImage(snowImg);
     snow.scale = (random(0.001, 0.002));
     snow.lifetime = 180;
     snow.velocityX = 0;
     snow.velocityY = 5;
   }
 }
 
 function snowSpawn2() {
   if (frameCount % 2 === 0) {
     var snow = createSprite(Math.round(random(0, width)), Math.round(random(-10, 0)));
     snow.addImage(snowImg);
     snow.scale = (random(0.003, 0.005));
     snow.lifetime = 180;
     snow.velocityX = 0;
     snow.velocityY = 7;
   }
 }
 
 function snowSpawn3() {
   if (frameCount % 2 === 0) {
     var snow = createSprite(Math.round(random(0, width)), Math.round(random(-10, 0)));
     snow.addImage(snowImg);
     snow.scale = (random(0.004, 0.006));
     snow.lifetime = 180;
     snow.velocityX = 0;
     snow.velocityY = 8;
   }
 }
 
 function snowSpawn4() {
   if (frameCount % 2 === 0) {
     var snow = createSprite(Math.round(random(0, width)), Math.round(random(-10, 0)));
     snow.addImage(snowImg);
     snow.scale = (random(0.005, 0.007));
     snow.lifetime = 180;
     snow.velocityX = 0;
     snow.velocityY = 6;
   }
 }
 