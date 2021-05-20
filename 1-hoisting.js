/**
 * When we run a JavaScript program, an Execution Context is created.
 * Execution Context has two components:
 * 1. Memory Component or Variable Environment
 * 2. Code Component or Thread Of Execution
 *
 * Execution Context is created in 2 phases
 * 1. Memory creation phase (key-value pair)
 * 2. Code execution phase
 *
 * In memory creation phase, JavaScript engine allocates memory to all the variables and
 * functions. All the variables will hold a special value called undefined and for the function
 * it will store the whole function code.
 *
 * So, in simple words, in the first phase the JavaScript will skim through the whole code
 * and allocates the memory to all variables and functions.
 *
 * In code execution phase, skims through the file line by line and executes the program. The values
 * it encounters for all the variables will be copied and stored in the memory by replacing the
 * special value undefined.
 *
 * As soon as it encounters a function invocation, JavaScript engine will create altogether
 * a new execution context. This execution context again has the same components and follows the
 * same memory creation and code execution phases. Once the whole function is executed the execution
 * context that was created will be deleted.
 *
 */
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var squareOf2 = square(n);
var squareOf4 = square(4);

/**
 * Hoisting: In most of the programming languages, if we try to access a function before
 * it is actually initialized, it will result in an error. But in JavaScript we will get
 * a special value called as undefined. In case of a variable, if we try to access it we
 * will get a not defined ReferenceError.
 *
 * undefined and not defined are not the same in JavaScript.
 *
 * Hoisting is a phenomenon in JavaScript by which we can access these variables and functions
 * even before we have initialized it without getting any error.
 *
 * So whenever we run a JavaScript program an Execution Context is created and the memory is
 * created in 2 phases - memory creation and program execution.
 *
 * In case we define our functions using arrow functions then it behaves just like variables.
 *
 */
var x = 7;

function getName2() {
  console.log("Another way to declare a function");
}

var getName3 = function () {
  console.log("One more way to declare a function");
};

var getName = () => {
  console.log("Namaste JavaScript");
};

getName();
console.log(x);
console.log(getName);
