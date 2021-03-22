const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

const numberOfParticles = 100;
// measure title element
let titleElement = document.getElementById("title");
let titleMeasurements = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10,
}




//

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.weight = 2;
        this.directionX = -1;

    }
    update(){
        if (this.y>canvas.height){
            this.y = 0-this.size;
            this.weight = 2
            this.x = Math.random() * canvas.width * 1.3;
        }
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;

        //check for collision between each particle and title element
        if(
            this.x < title.x + title.width &&
            this.x + this.size > title.x &&
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ){
            this.y -= 3;
            this.weight *= -0.3;
        }
    }
    draw(){
        ctx.fillStyle = "orangered";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill()
    }
}
function init(){
    particlesArray = [];
    for(let i = 0; i< numberOfParticles; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x,y))
    }
}
init();
const particle1 = new Particle(400, 900);
const particle2 = new Particle(100, 100);

function animate(){
    ctx.fillStyle = "rgba(255,255,255, 0.01)";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    particle1.update();
    particle1.draw();
    particle2.update();
    particle2.draw();
    for(let i = 0; i< particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    ctx.fillRect(title.x, title.y, title.width, title.height);
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10,
    }
    init();
})