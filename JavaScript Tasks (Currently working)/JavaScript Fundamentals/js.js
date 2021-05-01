let markMass = 78
let johnMass = 95
let markHeight = 1.69
let johnHeight = 1.95
let BMIM, BMIJ 
let markHigherBMI = BMIM>BMIJ;

BMIM = markMass / markHeight ** 2;
BMIJ = johnMass / johnHeight ** 2;

console.log("Mark weights " + markMass + " kg and is " + markHeight + " m  tall \n" + "John weights " + johnMass + " kg and is " + johnHeight + " m  tall \n")
console.log(BMIM + "\n" + BMIJ +"\n");
console.log(markHigherBMI)