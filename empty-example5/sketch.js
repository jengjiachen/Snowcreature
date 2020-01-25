

function setup() {
  
  createCanvas(640, 480);
}

let eyeSize = prompt("Enter eye size width:");
let height = prompt("Enter circle height:");


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
  ellipse(300 , 250, eyeSize, eyeSize);
  ellipse(180 , 250, eyeSize, eyeSize);
  noFill();
  arc(250,290,80,50,0,HALF_PI);
  
 
}