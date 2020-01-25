function setup() {
  createCanvas(640, 640);
  
}

function draw() {
  
   if (mouseIsPressed) {
     fill("#fcc5d1");
     strokeWeight(0);
    ellipse(mouseX, mouseY, 80, 80);
  } 
  
  //body
  stroke("#7599e6");
  fill("#dce8fc");
  strokeWeight(10);
  ellipse(300 , 300, 250, 300);
  
   //leggies
  noFill();
  line(230, 425, 230, 490);
  line(290, 425, 290, 490);
  //hands
  arc(325,310,80,70,0,HALF_PI);
  arc(180, 310, 90, 70, HALF_PI, PI);
  
  
  //eyes
  stroke(0);
  fill("#fff");
  ellipse(300 , 250, 20, 20);
  ellipse(180 , 250, 20, 20);
  noFill();
  arc(250,290,80,50,0,HALF_PI);
  
 
}