// its restricted variant of JavaScript
// Fixes mistakes and allow the JavaScript engines to do perform optimizations

// Exemple 1
function ex1() {
  'use strict'

  function ex1(myVar) {
    function run() {
      console.log(myVar)
    }
    setTimeout(run)
    // myVar = 11;
  }
  ex1(1, 2)
  var myVar = 99;
}

// Declared a variabile without keyword
function ex2() {
  'use strict'

  myVar = 10; // ReferenceError: myVar is not defined

}

// Assignment to a non-writable global
function ex3() {
  'use strict'

  window.undefined = 5; // Cannot assign to read only property 'undefined' of object '#<Window>'

}

// Assignment to a non-writable property
function ex4() {
  'use strict'
  var obj1 = {};
  Object.defineProperty(obj1, 'x', { value: 42, writable: false });
  obj1.x = 9; // throws a TypeError
}

// Assignment to a getter-only property
function ex5() {
  'use strict'

  var obj2 = { get x() { return 17; } };
  obj2.x = 5; // throws a TypeError
}

// Assignment to a new property on a non-extensible object
function ex6() {
  'use strict'

  var fixed = {};
  Object.preventExtensions(fixed);
  fixed.newProp = 'ohai'; // throws a TypeError
}

// in strict mode duplicate argument names are a syntax error:
function ex7() {
  'use strict';

  function test(myParam, _myParam) {

  }

}

// Octal is not allow
function ex8() {
  'use strict';

  // var sum = 015 + // !!! syntax error
  //   197 +
  //   142;
}
// strict mode in ECMAScript 2015 forbids setting properties on primitive values
function ex9() {
  'use strict';

  // false.true = '';         // TypeError
  // (14).sailing = 'home';   // TypeError
  // 'with'.you = 'far away'; // TypeError

  // it works even its strict mode
  var a = 'constructor'
  a[a](1) // its like you call String constructor
}

// eval can't affect whether a name refers to an outer variable or some local variable:
function ex10() {
  'use strict';

  var x = 17;
  var evalX = eval("var x = 42; x;");
  console.assert(x === 17);
  console.assert(evalX === 42);
}

// strict mode forbids deleting plain names
function ex11() {
  'use strict';
  var x = 10;

  // delete x;
}
// Security JS
function ex12() {
  function fun() { return this; }
  console.assert(fun() === undefined);
  console.assert(fun.call(2) === 2);
  console.assert(fun.apply(null) === null);
  console.assert(fun.call(undefined) === undefined);
  console.assert(fun.bind(true)() === true);

  function restricted() {
    'use strict';
    restricted.caller;    // throws a TypeError
    restricted.arguments; // throws a TypeError
  }
}


// Protected keyword

function ex13() {
  'use strict';
  function _package(_protected) { // !!!
    // var implements; // !!!

    // interface: // !!!
    // while (true) {
    //   break interface; // !!!
    // }

    // function private() { } // !!!
  }
  // function fun(static) { 'use strict'; } // !!!
}

//  strict mode prohibits function statements that are not at the top level of a script or function
function ex14() {
  'use strict';

  if (true) {
    function f() { } // !!! syntax error
    f();
  }

  for (var i = 0; i < 5; i++) {
    function f2() { } // !!! syntax error
    f2();
  }

  // good
  function baz() { // kosher
    function eit() { } // also kosher
  }
}