/* 'use strict';
const { TRUE } = require("node-sass");

 //avoid bugs it is easier

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');
 */

//FUNCTIONS
/* function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1,age2); */

//ARROW FUNCTION

/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsRetirement(1991, 'Jonas')); */

//FUNCTIONS CALLING OTHER FUNCTIONS
/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3)) */

//REVIEW FUNCTIONS
/* const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    //return `${firstName} retires in ${retirement} years`;
}

yearsRetirement(1991, 'Jonas'); */

//CODING CHALANGE #1

/* const avgDolhins = (d1,d2,d3) =>{
    var avg = (d1+d2+d3)/3;
    return avg
}

const avgKoalas = (k1,k2,k3) =>{
    var avg2 = (k1+k2+k3)/3;
    return avg2
}

function checkWinner(avgDolhins, avgKoalas){
    
    avgDolhins > avgKoalas ? console.log(`Dolhins Win ${avgDolhins} vs ${avgKoalas}`) : console.log(`Koalas Win ${avgKoalas} vs ${avgDolhins}`);
    
}

checkWinner(avgDolhins(85,54,41),avgKoalas(23,34,27)); */



//INTRODUCTION ARRAYS

/* const friend1= 'Michael';
const friend2= 'Steven';
const friend3= 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991,1984,2008,2020);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = "Jay";
console.log(friends);

const jonas = ["Jonas","Schmedtmann",2037-1991,"teacher",friends];
console.log(jonas);

//exercise
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const year = [1990,1967,2002,2018,2010];

const age1 = calcAge(year[1]);
console.log(age1); */


//ARRAYS OPERATION

/* const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);

friends.unshift('John');
console.log(friends);

//remove last element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//remove first element
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));

if(friends.includes('Peter')){
    console.log("you have friend called Peter!");
} */

// CODING CHALLENGE 2
/* var tip;
const calcTip = function(bill){
    if (bill >= 50 && bill <= 300){ tip=bill*0.15}
    else tip = bill*0.20; 
    return tip;
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills);
console.log(tips);
console.log(total); */


//INTRODUCTION TO OBJECTS

/* const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven']
];

const jonas = {
    firstName: 'Jomas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends:['Michael', 'Peter', 'Steven']
} */

//Dot VS Bracket

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends:['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);


const info = prompt('What do you want to know? ');


if (jonas[info]){
    console.log(jonas[info]);
}
else {
    console.log('Greska');
}

jonas.location = 'Bosnia';
jonas['twitter'] = '@ofanzile';
console.log(jonas);

//Challenge
console.log(jonas.firstName + " has " + jonas.friends.length + " and his best friend is " + jonas.friends[0]);
console.log(`${jonas.firstName} has ${jonas.friends.length}   and his best friend is ${jonas.friends[0]}`);
 */

//OBJECT METHODS

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends:['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function(birthYear){
    //    return 2087-birthYear;
    //} 
    //calcAge: function(){
     //   return 2037- this.birthYear;
    //} 
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} and he is ${this.job} and he ${jonas.hasDriversLicense ? "has":"doesn't have"} driver license `;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);

//console.log(jonas['calcAge'](1991));

//Challenge
console.log(`${jonas.firstName} is a ${jonas.calcAge()} and he ${jonas.hasDriversLicense ? "has":"doesn't have"} driver license`);
console.log(jonas.getSummary()); */

//CODING CHALLENGE #3

/* const Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height)**2;
        return this.BMI;
    } 
}
const John= {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height)**2;
        return this.BMI;
    }
}
Mark.calcBMI();
console.log(Mark.BMI)
console.log(`Higher BMI has ${Mark.calcBMI() > John.calcBMI() ? Mark.fullName : John.fullName}, ${Mark.calcBMI()} and ${John.calcBMI()}`)
 */

//FOR LOOP

/* for (let i=1;i<=10;i++){
    console.log('Lifting weights repetition ' + i);
} */

//FOR THROUGH ARRAYS
/* const jonas = [
    'jonas',
    'Schmedttman',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true

]
for(let i=1;i<=10;i++){
console.log(jonas[i]);
} */

//LOOPING BACKWARD AND LOOPING LOOPS
/* const jonas = [
    'jonas',
    'Schmedttman',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
]
for(let i=jonas.length-1;i>=0;i--){
    console.log(jonas[i]);
}
for(let i=jonas.length-1;i>=0;i--){
    for(let j=jonas.length-1;j>=0;j--){
        console.log(jonas[j]);
    }
    
} */

//WHILE LOOP

/* let i=0;
for(let i=1;i<=10;i++){
    console.log(`Lifting weights repetition ${i}`);
}
while(i<=10){
    console.log(`Lifting weights repetition ${i}`);
    i++;
}
let dice = Math.trunc(Math.random() * 6) +1;
console.log(dice);

while(dice!==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if(dice === 6){console.log(`Loop is about to end...`)};
} */

//CODING CHALLENGE #4

/* const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totalTips = [];

const calcTip = function(bills){
    for(let i=0;i<bills.length;i++){
    if (bills[i] >= 50 && bills[i] <= 300){ tip=bills[i]*0.15}
    else tip = bills[i]*0.20; 
    tips[i] = tip;
    totalTips.push(tips[i]+bills[i])}
    return [tips, totalTips];
}

const arr = [2,3,6];
const calcAverage = (arr) => {
let sum = 0;
for(let i = 0;i<arr.length;i++){
    sum+=arr[i];
}
return sum/arr.length;
}

console.log(calcTip(bills));
console.log(calcAverage(arr));
console.log(calcAverage(totalTips)); */
