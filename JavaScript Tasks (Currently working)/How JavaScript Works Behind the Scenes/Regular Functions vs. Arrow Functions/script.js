'use strict';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //SOLUTION 1
    /*  const self = this;
    const isMillenial = function () {
      //console.log(this.year >= 1081 && this.year <= 1996);
      console.log(self.year >= 1081 && self.year <= 1996);
    }; */

    //SOLUTION 2

    const isMillenial = () => {
      console.log(this.year >= 1081 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};

addArrow(2, 5, 8);
