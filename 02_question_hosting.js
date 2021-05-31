// What is hosting? Can you give me few exemples?

var myVar = "my-value"

// Hosting is a ability of javascript to hosted the variables declaration and functions at top of the file
// Its like you move your var declaration on top

// For example myVar can be used above on line 2, but without this value


// Few examples:

// Exemple 1
// 1. Can you access index above of this line?
// 2. Can you access index below the for stament ?
// 3. If yes, what will be the value of index?

for (var index = 0; index < 10; index++) {
  // your logic
}

// Solution ex 1

// 1. Yes, you can access it but the value will be undefined
// 2. Yes, because index has global scope and the value will be 10


