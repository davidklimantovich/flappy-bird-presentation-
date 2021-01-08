// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

// Changed and edited by Masoud and Salim

let bird;
let pipes = [];

// Displaying the canvas
function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  
  pipes.push(new Pipe());
}

// Draw function
function draw() {
  
  background(0);
  
  // Displaying pipes 
  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    // Dectecting if pipe goes off screen or is hit by the user
    if (pipes[i].hits(bird)) {
      console.log("HIT");
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
}

// Jumping
function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
