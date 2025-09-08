//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(vocal, drum, bass, other) {

  //let sunY = 100;
  //let sunSize = 20;
  // Draw a heart shape at x, y with size controlled by vocals
  
  let colorMap = map(vocal, 0, 100, 255, 0);

  let bassMap = map(bass, 0, 100, 20, 200);
  let otherMap = map (other, 0, 100, 0, radians(500));
  let vocalMap = map (vocal, 0, 500, 400, radians (200));
  let drumMap = map(drum, 20, 40, 200,600);

  let pivotX = 580;
  let pivotY = 220;

  background (253, 236, 242);
  rectMode (CENTER);

  textFont('Tahoma'); // please use CSS safe fonts
  textStyle (BOLD);

  fill (243, 220, 247);
  noStroke ();
  rect (460, 220, drumMap, 10);
  rect (460, 385, drumMap, 10);

  fill (230, 197, 237);
  noStroke ();
  rect (460, 235, drumMap, 10);
  rect (460, 370, drumMap, 10);

  fill (210, 171, 219);
  noStroke ();
  rect (460, 250, drumMap, 10);
  rect (460, 355, drumMap, 10);

  fill (182, 142, 191);
  noStroke ();
  rect (460, 265, drumMap, 10);
  rect (460, 340, drumMap, 10);

  fill (156, 113, 166 );
  noStroke ();
  rect (460, 280, drumMap, 10);
  rect (460, 325, drumMap, 10);

  fill (133, 88, 143);
  noStroke ();
  rect (460, 295, drumMap, 10);
  rect (460, 310, drumMap, 10);


  // main body of the record player
  fill (241, 173, 192); //dark pink
  strokeWeight (0);
  rect (460, 300, 400, 275);

  // record
  fill (19, 31, 27);
  noStroke ();
  ellipse (390, 300, 240, 240);

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
  ellipse (390, 300, 220, 220);
  ellipse (390, 300, 200, 200);
  ellipse (390, 300, 180, 180);
  ellipse (390, 300, 160, 160);
  ellipse (390, 300, 140, 140);
  ellipse (390, 300, 120, 120);
  ellipse (390, 300, 100, 100);


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
  ellipse (391, 300, bassMap, bassMap);

  // middle part of the record, still
  fill (133, 88, 143);
  noStroke ();
  ellipse (391, 300, 90, 90);

  //middle detailing
  push();
  translate(391, 300); // move origin to center of record
  rotate(frameCount * 0.5); // spin speed (adjust number to change speed)
  // rectangle
 // fill (241, 173, 192);
 // rect (0, 0, 90, 10);
  // text
  textSize (10);
  fill (241, 173, 192);
  text ('ARE', -11, -25);
  text ('WE', -9, -13);
  text ('STILL', -14, 20);
  text ('FRIENDS', -23, 32);
  pop();


  fill (19, 31, 27);
  noStroke ();
  ellipse (391, 300, 20,20);
  fill (0);
  noStroke ();
  ellipse (391, 300, 10, 10);

  stroke (255);
  strokeWeight (5);

  // the arm of the record player made with the help of ChatGPT
  push();                        
  translate(pivotX, pivotY);     
  rotate(otherMap);            
  stroke(255);
  strokeWeight(8);
  line(0, 0, -130, 150); //the arm       
  stroke (167, 168, 167);
  strokeWeight(15);
  line (-150, 169, -130, 149); //end part of the arm
  pop();                         

  fill(167, 168, 167);
  noStroke();
  ellipse(pivotX, pivotY, 20, 20); // circle of the arm
 
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
