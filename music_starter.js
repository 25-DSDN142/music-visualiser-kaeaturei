//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(vocal, drum, bass, other) {
 
  //let sunY = 100;
  //let sunSize = 20;

  let drumMap = map(drum, 0, 100, 20, 200);
  let bassMap = map(bass, 0, 100, 20, 200);


  background (253, 236, 242);
  rectMode (CENTER);

  //textFont('Verdana'); // please use CSS safe fonts
  //textSize(24);

  // main body of the record player
  fill (241, 173, 192);
  strokeWeight (0);
  rect (460, 300, 400, 275);

  // details
  fill (19, 31, 27);
  noStroke ();
  ellipse (390, 300, 240, 240);

  ellipse (280,420, 20,20);
  ellipse (470,190, 10,10);
  ellipse (580, 220, 50, 50);

  rect (330, 165, 30, 8);
  rect (590, 165, 30, 8);
  rect (628, 400, 25, 14);
  rect (590, 400, 25, 14);

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

  fill (19, 31, 27);
  noStroke ();
  ellipse (391, 300, 20,20);
  fill (0);
  noStroke ();
  ellipse (391, 300, 10, 10);


 
  

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
}






















/*let sunY = 400;

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

  
  //map needs to be saved in a variable
  //sunSize = map(bass, 0, 100, 20, 300);
  fill (152, 60, 100);
  strokeWeight (5);
  stroke (170, 80, 120);
  ellipse (sunX, sunY,sunSize);

  }

  sunY += 1;
  if(sunY > 1000) {
    sunY=0;
  }
}

  //fill (255);
  //noStroke (0);
  //let colorMap = map(vocal, 0, 100, 255, 0);



//display "words"
//textAlign(CENTER);
//textSize(vocal);
//text(words, width / 2, height / 3);




























 // textFont('Verdana'); // please use CSS safe fonts
 // rectMode(CENTER)
 // textSize(24);


  


















  // let bar_spacing = height / 10;
  // let bar_height = width / 12;
   //let bar_pos_x = width / 2;
 
// changes 
   // vocal bar is red
  // fill(200, 0, 0);
  // rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  // fill(0);
  // text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
 //  fill(0, 200, 0);
 //  ellipse(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
 //  fill(0);
 //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
 //  fill(50, 50, 240);
 //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
 //  fill(0);
 //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
  // fill(200, 200, 200);
 //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
 //  fill(0);
 //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  // fill(255, 255, 0);

  //display "words"
//textAlign(CENTER);
//textSize(vocal);
//text(words, width/2, height/3);
//} */

