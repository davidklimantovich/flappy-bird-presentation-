// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

// Changed and edited by Masoud and Salim

let bird;
let pipes = [];

let timerValue = 1;


// Displaying the canvas
function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  
  pipes.push(new Pipe());
  
  
  setInterval(timeIt, 1000);
}
let deaths = 0;
let dead = false;
function game() {
  
  
  
  background(0);
  // Showing the timer on the screen
  if (timerValue >= 1) {
    text(timerValue, width / 2, height / 2);
  }

  
  
  // Displaying pipes 
  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    // Dectecting if pipe goes off screen or is hit by the user
    if (pipes[i].hits(bird)) {
      deaths++;
      console.log(deaths)
    }
    
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  // Showing the bird 
  bird.update();
  bird.show();

  // Showing new pipes
  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  textSize(50); 
  text(deaths, 200, 200, 200, 200)
  
  if (deaths > 110) {
    console.log("dead")
    dead = true
    return;
  }
}




function draw() {
    
  background(0);  
  
  // Checks if you're dead or not, basically how the game ends or starts
  if (dead == false) {
    game();
  } else {
    background(0);
    textSize(50); 
    text("DEAD, please click to restart", 200, 200, 200, 200)
    }
  }

// Time function

function timeIt() {
  if (timerValue > 0) {
    timerValue++;
  }
}

// Restarting the gamew
mouseClicked = function() {
    if (dead == true) {
      dead = false
      deaths = 0;
      timerValue = 1; 
    }
};

// Jumping
function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
