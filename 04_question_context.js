// What is the context in Javascript?

// The context refer to this keyword and the value of it depends of where you use it
// For example, in below code , this is a reference to window object
console.log(this)


// In an object methods, this will be a reference to the object
var obj = {
  length: 10,
  show: function () {
    console.log(this) // here will be the object itself
  }
}

// In a function
// It refers to the object within the function being executed
// this is determined by how a function is invoked
function myFun() {
  console.log(this);
}

myFun()  // window object

var o1 = new myFun; // here this will be the o1, instance of the object
// in this case myFun its a constructor function

// Add event to dom element
document.getElementById('email').addEventListener('change', function () {
  // this will be the input
  console.log(this)
})


// setTimeout

function exSetTimeout() {
  setTimeout(function () {
    console.log(this) // this will be window
  })
}


// ------------- use strict mode ----------------

// exemple 1
function f2() {
  'use strict';
  return this;
}
console.log(f2() === undefined); // => True

// exemple 2
function returnThis() {
  return this;
}

var obj = {
  method: returnThis
};

console.log(obj.method() === window); // => False
console.log(obj.method() === obj); // => True


// Call, apply, bind 
// These methods allow us to execute any function in any desired context.

// Function.prototype.bind
// it returns other function with custom value for this

function returnThis(param1, param2) {
  return this;
}

console.log(returnThis() === window) // true
console.log(returnThis.bind({ a: 1 })() === window) // false, in this case this will be {a: 1}, my object


// Function.prototype.call
// It calls the function with a given this value and the arguments

returnThis.call({ b: 1 }, 1, 2, 3)

// Function.prototype.apply
// its like call but you should provide the arguments as an array of values

// ---------- arrow function ---------------

// this retains the value of the enclosing lexical context.
// Lexical this
'use strict'
const fn23 = () => this

console.log(fn23() === window)





