// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

// Changed and edited by Masoud and Salim
let img;
function Bird() {
  
  // Defining all the aspects of the bird function
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.678;
  this.lift = -11;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    fill(0, 0, 0);


fill(255, 0, 0);
    
    // Rubiks Cube Figure, can be changed to anything but has you be used with this.x and this.y
image(img,this.x, this.y-16,  14, 14);

  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
