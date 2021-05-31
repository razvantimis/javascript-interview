// What should show the following code?
var a = 1;

function x() {
  process.nextTick(function () {
    console.log(a)
    a++
  })
  return 'done';
}
x();

console.log(x())

// Solution + explained

// It show print 'done 1 2'

// Why? Because nextTick will execute the code between normal executation and event loop queue



