var hr,min,sec;
var hrAngle,minAngle,secAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);
  hr=hour();
  min=minute();
  sec=second();
  
  translate(200,200);
  rotate(-90);

  secAngle = map(sec,0,60,0,360);
  console.log(secAngle)
  minAngle = map(min,0,60,0,360);
  console.log(minAngle)
  hrAngle = map(hr%12,0,12,0,360);
  console.log(hrAngle)

  push()
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(4);
  line(0,0,100,0);
pop();

push()
rotate(minAngle);
stroke(0,255,0);
strokeWeight(3);
line(0,0,75,0);
pop()

push()
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(5);
line(0,0,50,0);
pop();

stroke(255,0,255)
point(0,0)

strokeWeight(10);
noFill()


stroke(255,0,0);
arc(0,0,300,300,0,secAngle);

stroke(0,255,0);
arc(0,0,280,280,0,minAngle);

stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);


    
  drawSprites();
}