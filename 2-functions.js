/**
 * Function invocation and variable environment:
 * When we run this program a global execution context is created.
 * The execution context will have two components:
 * 1. Memory component or variable environment
 * 2. Code component or thread of execution
 *
 * Even before executing a single line of code memory will be allocated to
 * all the variables and functions. In this case it is x, a() and b().
 * The variable x will have undefined and a() and b() will point to the exact
 * function code.
 *
 * The global execution context will be pushed into the bottom of the call stack.
 * When the function a() is invoked, a new execution context is created and this
 * execution context is very much limited to a() function only and the same process
 * takes place as explained above. Inside this execution context a brand new variable x
 * will be allocated memory. Once the function a() is finished, it will be popped from
 * the call stack.
 *
 * The same function will take place for the next function b() as well and once the
 * function finishes its work, it will be popped out from the call stack. Finally, all the
 * whole program finishes executing, the global execution context itself will be popped
 * out of the call stack.
 *
 */
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
