var PLAY, END, gameState, sword, fruit, monster, fruitGroup, enemyGroup, score, sword_Image, fruit1, fruit2, fruit3, fruit4, monster_Image, gameOver_Image, sword_sound, gameover_sound;


function preload(){
  
  sword_Image = loadImage("sword.png");
  monster_Image = loadAnimation("alien1.png","alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOver_Image = loadImage("gameover.png");
  sword_sound = loadSound("knifeSwooshSound.mp3");
  gameover_sound = loadSound("gameover.mp3");
  
}


function setup() {
  createCanvas(500, 500);
  
   sword = createSprite(40,200,20,20);
   sword.addImage(sword_Image);
   sword.scale = 0.6;
   
  score = 0;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  PLAY = 1;
  END = 0;
  gameState = 1;
  
}


function draw(){
  background("turquoise");
  
  if(gameState === PLAY){
    
    fruits();
    Enemy();
    
    sword.y = mouseY;
    sword.x = mouseX;
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    sword_sound.play();
    score = score + 2;      
    }
    
    else if(enemyGroup.isTouching(sword)){
        
      gameState = END;
      
      gameover_sound.play();
        
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);
        
      sword.addImage(gameOver_Image);
      sword.x = 250;
      sword.y = 250;    
    }
  }
  
  
  drawSprites();
  
  textSize(20);
  text("Score : " + score, 300, 30);
}


function Enemy(){
  if(frameCount %200 === 0){
    position = Math.round(random(1,4));
    
    monster = createSprite(400,200,20,20);
    monster.addAnimation("moving", monster_Image);
    
    if(position === 1){
     monster.x = 500;
     monster.velocityX = -(8+(score/10));
     monster.y = Math.round(random(100,300));
    }
    
    else if(position === 2){
     monster.x = 0;
     monster.velocityX = (8+(score/10));
     monster.y = Math.round(random(100,300));
    }
    
    else if(position === 3){
     monster.y = 500;
     monster.velocityX = -(8+(score/10));
     monster.x = Math.round(random(100,300));
    }
    
    else if(position === 4){
     monster.y = 0;
     monster.velocityX = (8+(score/10));
     monster.x = Math.round(random(100,300));
    }
    
    monster.setLifetime = 50;
    enemyGroup.add(monster);
  }
}

function fruits(){
  if(frameCount %80 === 0){
    position = Math.round(random(1,4));
    
  fruit = createSprite(400,200,20,20);
  fruit.scale = 0.2;
    
     r = Math.round(random(1,4));
    
    if(r === 1){
      fruit.addImage(fruit1);
     } 
    
    else if (r === 2) {
      fruit.addImage(fruit2);
     }
    
    else if (r === 3) {
      fruit.addImage(fruit3);
     }
    
    else {
      fruit.addImage(fruit4);
     }
    
    
    if(position === 1){
     fruit.x = 500;
     fruit.velocityX = -(7+(score/4));
     fruit.y = Math.round(random(20,480));
    }
    
    else if(position === 2){
     fruit.x = 0;
     fruit.velocityX = (7+(score/4));
     fruit.y = Math.round(random(20,480));
    }
    
    else if(position === 3){
     fruit.y = 500;
     fruit.velocityY = -(7+(score/4));
     fruit.x = Math.round(random(20,480));
    }
    
    else if(position === 4){
     fruit.y = 0;
     fruit.velocityY = (7+(score/4));
     fruit.x = Math.round(random(20,480));
    }
    
    //fruit.y = Math.round(random(0,500));
    //fruit.x = Math.round(random(0,500));
   
    fruit.setLifetime=100;
    fruitGroup.add(fruit);
    
  }
}





