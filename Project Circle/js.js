const canvas = document.getElementById("canvas")
const ctx  = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* ctx.fillStyle = "green"
ctx.fillRect(100,100,100,100);
ctx.fillStyle = "purple"
ctx.fillRect(400,100,100,100);
ctx.fillStyle = "yellow"
ctx.fillRect(300,300,100,100); */

//Linija
/* ctx.beginPath();
ctx.moveTo(50,300); // gdje linija da pocne
ctx.lineTo(300, 100); //gdje linije da se proteze
ctx.lineTo(400,300);  //gdje se linija nastavlja
ctx.strokeStyle = "blue" //boja linije
ctx.stroke(); //nacrtana linija */



/* for (var i  = 0; i< 3 ; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    ctx.beginPath();
ctx.arc(x, y, 30, 0, Math.PI *2, false);
ctx.strokeStyle = "red";
ctx.stroke();
} */

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40
//var minRadius = 2

var colorArray = [
    "blue",
    "purple",
    "black",
    "white",
    "iceblue"
]


window.addEventListener("mousemove", function(event){
    mouse.x = event.x
    mouse.y = event.y
})

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)]

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        
        
        ctx.fillStyle = this.color
        ctx.fill();
    }
    this.update = function(){
        
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius< 0){
            this.dy = -this.dy
        }
        //interactivity
        if(mouse.x - this.x < 50 && mouse.x - this.x>-50 && mouse.y - this.y <50 && mouse.y-this.y>-50){
            if(this.radius <maxRadius){
                this.radius +=1;}
            
        }else if(this.radius >this.minRadius){
            this.radius -= 1;

        }

    this.draw();
        this.x += this.dx;
        this.y += this.dy;
    }
}



var circleArray = [];

function init() {
    circleArray = [];
   for (var i = 0; i < 800; i++){
var radius = Math.random() * 3 + 1;
var dx = Math.random() - 0.5 ;
var dy = Math.random() - 0.5 ;
var x = Math.random() * (innerWidth - radius*2) + radius;
var y = Math.random() * (innerHeight - radius*2) + radius;
circleArray.push(new Circle(x, y,dx,dy,radius))
}  
}

function animate(){
    requestAnimationFrame(animate);
    // Arc / Circle
    ctx.clearRect(0,0,innerWidth,innerWidth);
    for (var i = 0; i<circleArray.length; i++){
        circleArray[i].update();
    }
 
    
}

init()
animate();