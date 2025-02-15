/*
Lab 3 - simple TDD with math functions
Starter file
Create the following functions as per the instructions below.
Read the test cases carefully and write the functions accordingly.
NOTE: The name of the functions have
to match the exported names mentioned at the end of this file
in order to pass the test cases.
To run the test cases, run the following command on your terminal:
node --test
*/

const add = (a,b) => {
  return a+b; 
};

const subtract = (a,b) => {
  return a-b; 
};

const multiply = (a,b) => {
  return a*b; 
};

const divide = (a,b) => {
    if (b == 0) {
        throw new Error('we cannot devide 0')
    }
  return a/b;
};

const modulas = (a,b) => {
  return a%b;
};

const power = (a,b) => {
  return Math.pow(a,b); 
};

const square = (a) => {
  return a*a;
};

const floor = (a) => {
  return Math.floor(a);
};

const ceiling = (a) => {
  return Math.ceil(a); 
};

////////////////////////////////////////

//export functions
//Please do not change the following line.

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  square,
  floor,
  ceiling,
};
