// What is closure?

// It allow you to access variables from outer scope in inner function's scope
// Its a way to PRESERVED data from outer scope in inner function's scope
// Closures are created every time a function is created
// As we know, each function is object in Javascript

// Exemple 1
function test() {
  var myGlobal = 10;
  var fn1 = function () {
    var inner = 2;
    return inner + myGlobal;
  }

  console.dir(fn1)
}

test()

// Exemple 2 ( the clasic one when we return a function )

function add(number1) {
  let privateVar = 10;
  function innerAdd(number2) {
    return number1 + number2 + privateVar
  }
  console.log(innerAdd)
  return innerAdd;
}

const addInner = add(1);
console.log(addInner(2))

// Exemple 3
// Closure mistake in combination with var

function showHelp(help) {
  console.log(help)
}

function makeShowHelp(help) {
  return function () {// here we put help param in closures
    showHelp(help);
  }
}

function setupHelp() {
  var helpText = [
    { 'id': 'email', 'help': 'Your e-mail address' },
    { 'id': 'name', 'help': 'Your full name' },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    var htmlEl = document.getElementById(item.id);

    htmlEl.addEventListener('focus', makeShowHelp(item.help))
  }
}

setupHelp();

// Exemple 4

function ex4() {
  var myVar = 10; // has a block scope

  var fnWithClosure = function () {
    console.log(myVar)
  }

  console.dir(fnWithClosure);

}
ex4()