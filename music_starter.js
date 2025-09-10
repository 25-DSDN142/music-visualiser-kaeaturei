//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  // console.log(counter);
  let seconds = counter/60;
  console.log(seconds);

  //let sunY = 100;
  //let sunSize = 20;
  // Draw a heart shape at x, y with size controlled by vocals
  
  let colorMap = map(vocal, 0, 100, 255, 0);

  let bassMap = map(bass, 0, 100, 20, 200);
  let otherMap = map (other, 0, 100, 0, radians(500));
  let vocalMap = map (vocal, 0, 100, 500, 700);
  let drumMap = map(drum, 20, 40, 150, 500);

  let pivotX = 580;
  let pivotY = 220;

  background (253, 236, 242);
  rectMode (CENTER);

 if (seconds > 239 && seconds < 254) {
  push();
  noStroke();
  rectMode(CENTER);

  if (frameCount % 19 < 15) {
    fill (255, 100);
  } else {
    fill (0, 100);
  }

  rect (width/2, height/2, width, height);
  pop ();
  }

  //first chorus where heaps of circles come in
if (seconds > 33.5 && seconds < 47) {  
  push();
  translate(450, 300); // center of canvas
  scale (4);
  noStroke();
  fill(243, 220, 247, 200); // transparent purple

  let numEllipses = 15; 
  for (let i = 0; i < numEllipses; i++) {
    push();
    // random rotation for each ellipse
    rotate(random(TWO_PI));
    
    // random offset from center along rotated axis
    let radius = map(bass, 0, 100, 0, 150)
    let x = radius;
    let y = random(-50, 50);

    // random sizes, or scale with bass/vocal
    let w = random(20, 150);
    let h = random(50, 250);
    ellipse(0, 0, w, h);
    pop();
  }

  pop();
}


// second chorus but turned to pink
if (seconds > 80.5 && seconds < 109.5) {  
  push();
  translate(450, 300); // center of canvas
  scale (4);
  noStroke();
  fill(247, 215, 227, 200); // transparent pink

  let numEllipses = 15; 
  for (let i = 0; i < numEllipses; i++) {
    push();
    // random rotation for each ellipse
    rotate(random(TWO_PI));
    
    // random offset from center along rotated axis
    let radius = map(bass, 0, 100, 0, 150)
    let x = radius;
    let y = random(-50, 50);

    // random sizes, or scale with bass/vocal
    let w = random(20, 150);
    let h = random(50, 250);
    ellipse(0, 0, w, h);
    pop();
  }

  pop();
}


//third chorus and purple
if (seconds > 158.5 && seconds < 254) {  
  push();
  translate(450, 300); // center of canvas
  scale (4);
  noStroke();
  fill(243, 220, 247, 200); // transparent purple

  let numEllipses = 15; 
  for (let i = 0; i < numEllipses; i++) {
    push();
    // random rotation for each ellipse
    rotate(random(TWO_PI));
    
    // random offset from center along rotated axis
    let radius = map(bass, 0, 100, 0, 150)
    let x = radius;
    let y = random(-50, 50);

    // random sizes, or scale with bass/vocal
    let w = random(20, 150);
    let h = random(50, 250);
    ellipse(0, 0, w, h);
    pop();
  }

  pop();
}


//bigger louder part of the third chorus to go over top of the purple
if (seconds > 189 && seconds < 254) {  
  push();
  translate(450, 300); // center of canvas
  scale (3);
  noStroke();
  fill(242, 194, 212, 200); // transparent pink

  let numEllipses = 15; 
  for (let i = 0; i < numEllipses; i++) {
    push();
    // random rotation for each ellipse
    rotate(random(TWO_PI));
    
    // random offset from center along rotated axis
    let radius = map(bass, 0, 100, 0, 150)
    let x = radius;
    let y = random(-30, 30);

    // random sizes, or scale with bass/vocal
    let w = random(20, 150);
    let h = random(50, 250);
    ellipse(0, 0, w, h);
    pop();
  }

    pop()
}


  textFont('Tahoma'); // please use CSS safe fonts
  textStyle (BOLD);

  //background moving rectangles
  if (seconds > 1.5 && seconds < 254) {  
  push();
  fill (243, 220, 247);
  noStroke ();
  rect (450, 220, drumMap, 10);
  rect (450, 385, drumMap, 10);

  fill (230, 197, 237);
  noStroke ();
  rect (450, 235, drumMap, 10);
  rect (450, 370, drumMap, 10);

  fill (210, 171, 219);
  noStroke ();
  rect (450, 250, drumMap, 10);
  rect (450, 355, drumMap, 10);

  fill (182, 142, 191);
  noStroke ();
  rect (450, 265, drumMap, 10);
  rect (450, 340, drumMap, 10);

  fill (156, 113, 166 );
  noStroke ();
  rect (450, 280, drumMap, 10);
  rect (450, 325, drumMap, 10);

  fill (133, 88, 143);
  noStroke ();
  rect (450, 295, drumMap, 10);
  rect (450, 310, drumMap, 10);

   pop();
  }


  // main body of the record player
  fill (241, 173, 192); //dark pink
  noStroke ();
  rect (450, 300, 400, 275);

  //record shadow
  fill (82, 79, 80, 90);
  noStroke ();
  ellipse (390, 305, 240, 240);

  // record
  fill (19, 31, 27);
  noStroke ();
  ellipse (385, 300, 240, 240);

  // details
  ellipse (280,420, 20,20);
  ellipse (470,190, 10,10);
  ellipse (580, 220, 50, 50);

  rect (330, 165, 30, 8);
  rect (590, 165, 30, 8);
  rect (628, 400, 25, 14);
  rect (590, 400, 25, 14);

  // record rim detail
  noFill ();
  strokeWeight (3);
  stroke (30, 43, 38);
  ellipse (385, 300, 220, 220);
  ellipse (385, 300, 200, 200);
  ellipse (385, 300, 180, 180);
  ellipse (385, 300, 160, 160);
  ellipse (385, 300, 140, 140);
  ellipse (385, 300, 120, 120);
  ellipse (385, 300, 100, 100);


  // details
  noFill (0);
  strokeWeight (4);
  stroke (19, 31, 27);
  ellipse (500,200, 20,20);

  //detail for stretched circle on the side
  rect (630, 300, 20, 100)
  noFill ();
  strokeWeight (4);
  stroke (19, 31, 27);
  ellipse (630, 247, 20, 20);
  ellipse (630, 353, 20, 20);

  fill (241, 173, 192);
  noStroke ();
  ellipse (630, 250, 18, 20);
  rect (630, 255, 17, 18);
  ellipse (630, 350, 18, 20);
  rect (630, 345, 17, 18);

  // moving grey part of the record
  fill (47, 48, 47);
  noStroke ();
  ellipse (385, 300, bassMap, bassMap);

  // middle part of the record, still
  fill (133, 88, 143);
  noStroke ();
  ellipse (385, 300, 90, 90);

  //middle detailing
  push();
  translate(385, 300); // move origin to center of record
  rotate(frameCount * 0.5); // spin speed (adjust number to change speed)
  
  //circles
  noFill();
  stroke (144, 103, 153);
  strokeWeight (2);
  ellipse (0, 0, 80, 80);
  ellipse (0, 0, 70, 70);

  // for detailing above
  fill (133, 88, 143);
  noStroke();
  rect (0, 0, 82, 20);
  rect (0, 0, 20, 82)
  rect (10, 10, 20, 60);
  rect (-10, -10, 20, 60);
  
  //text in the record
  textSize (7);
  fill (241, 173, 192);
  noStroke();
  text ('ARE', -15, -25);
  text ('WE', 2, -25);
  text ('STILL', -29, -16);
  text ('FRIENDS?', -5, -16);
  pop();

  //middle detailing in the record
  fill (19, 31, 27);
  noStroke ();
  ellipse (385, 300, 20,20);
  fill (0);
  noStroke ();
  ellipse (385, 300, 10, 10);


  //arm of the record player made by the help of chatGPT
  push();                        
  translate(pivotX, pivotY);     
  rotate(otherMap);            
  stroke(255);
  //the arm shadow
  stroke(82, 79, 80, 90);
  strokeWeight(8);
  line(0, 5, -124, 150);    
  //the arm   
  stroke (255);
  strokeWeight(8);
  line(0, 0, -130, 150);     
  // end part of the arm shadow
  stroke(82, 79, 80, 90);
  strokeWeight(8);
  line (-150, 176, -124, 155);
  //end part of the arm
  stroke (167, 168, 167);
  strokeWeight(15);
  line (-150, 169, -130, 149);
  pop(); 

  // circle of the arm
  fill(167, 168, 167);
  noStroke();
  ellipse(pivotX, pivotY, 20, 20); 
 
  //STARTING AT 35 THEN 35.5 THEN 36 THEN 36.7 ENDING AT 38
  // if (seconds > 0 && seconds < 38) {
  // fill (19, 31, 27);
  // textSize (100);
  // text ("ARE", 250, 80);
  // }

  //   if (seconds > 0 && seconds < 38) {
  // fill (19, 31, 27);
  // textSize (100);
  // text ("WE", 490, 80);
  // }

  //   if (seconds > 0 && seconds < 38) {
  // fill (19, 31, 27);
  // textSize (141);
  // text ("STILL", 245, 190);
  // }

  //   if (seconds > 0 && seconds < 38) {
  // fill (241, 173, 192);
  // textSize (80);
  // text ("FREINDS?", 245, 560);
  // }

  // SIZE 100 STILL IS 42 BY 560 AND FREINDS IS 350 BY 560

//X IS ACROSS AND Y IS UP


}
  

  //stroke (drumMap, 80,80);
  //strokeWeight (8);
  //stroke (255);
 // noFill();

 // for(let i = 1; i <= drumMap; i++) {
    //let y = i * 40;
    //ellipse (200, y, circleSize, circleSize);

 // }

  //display "words"
  //let words = vocal;
  //textAlign(CENTER);
  //textSize(vocal);
  //fill (255);
  //text(words, width/2, height/3);
  





 //colorMode (HSB, 100);






















/*
let sunY = 400;

let sunSize = 20;


  let drumMap = map(drum, 0, 100, 5, 70);
  let circleSize = map (other, 0, 100, 20, 80);
  
  
  stroke (drumMap, 80,80);
  strokeWeight (8);
  noFill();

  for(let i = 1; i <= drumMap; i++) {
    let y = i * 40;
    ellipse (200, y, circleSize, circleSize);

  }

  let sunAmount = 5;
  sunSize = map(bass, 0, 100, 20, 300);

  for (let i = 0; i < sunAmount; i++) {
  let sunX = 100 + i * 150;

  
  sunSize = map(bass, 0, 100, 20, 300);
  fill (152, 60, 100);
  strokeWeight (5);
  stroke (170, 80, 120);
  ellipse (sunX, sunY,sunSize);

  }

  sunY += 1;
  if(sunY > 1000) {
    sunY=0;
  }

  fill (255);
  noStroke (0);
  let colorMap = map(vocal, 0, 100, 255, 0);

//display "words"
textAlign(CENTER);
textSize(vocal);
text(words, width / 2, height / 3);


 textFont('Verdana'); 
  rectMode(CENTER);
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
  //changes 
    //vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  // drum bar is green
   fill(0, 200, 0);
  ellipse(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  // bass bar is blue
  fill(50, 50, 240);
  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  // other bar is white
   fill(200, 200, 200);
  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  fill(0);
 text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  fill(255, 255, 0);
*/

// display "words"
//textAlign(CENTER);
//textSize(vocal);
//text(words, width/2, height/3);
