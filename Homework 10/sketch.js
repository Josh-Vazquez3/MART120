
var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
            {
                createCanvas(500,600)
            }

            function draw()
            {
                background(120,45,78);
                fill(255, 204, 0);
              //head
               fill(25, 23, 130);
                circle (headX,headY,175);
              headX+=headDirection;
              if(headX >= 418 || headX <= 82)
                {
                  headDirection *= -1;
                }
                
              //body
                rect(200,bodyY,100,150);
                bodyY += bodyDirection;
                if(bodyY <= 0 || bodyY >= 450)
                  {
                    bodyDirection *= -1;
                  }
              // Arms
              fill(10, 24, 120);
              rect(300,195,50,0);
              rect(150,195,50,0);
              // legs
              rect(200,335,10,50);
              rect(290,335,10,50);
              
              strokeWeight(10)
              point(225,75);
              point(300,75,75,);
              //arrow
              triangle(30, 75, 58, 20, 86, 75);
              line(5, 20, 85, 75);
              point(30, 75);
               fill(255, 204, 0);
               textSize(size);
              size+= sizeDirection
              count++;
              if(count > 5)
                {
                  sizeDirection *=-1;
                  count=0
                }
              text('Joshua Vazquez', 10, 375);
              fill(2, 400, 0);
              text('Title: Mini Me ', 400, 10);
            }

                