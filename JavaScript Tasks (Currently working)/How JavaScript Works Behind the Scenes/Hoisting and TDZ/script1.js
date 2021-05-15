'use strict';

//console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDect(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDect(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example why dont use var

if (!numProducts) deleteShoppingCard();
var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted');
}
