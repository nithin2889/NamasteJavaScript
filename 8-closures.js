/**
 * Closure: A function bound together with its lexical environment forms a closure.
 * In other words, a closure gives us access to an outer function's scope from an
 * inner function.
 *
 * NOTE: we can pass function as a parameter inside another function or assign the
 * function to a variable and even return a function. This is where closures come
 * into picture and become more complicated.
 */
function x() {
  var a = 28;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);

// Assume we are invoking z somewhere in the program.
z();
/**
 * When we return a function as shown above, it still maintains its lexical state.
 * They remember where they actually resided and hence when we invoke z(),
 * it prints '28'.
 *
 * When we returned a function, not just the function code was returned
 * but a closure (function along with its lexical scope) was returned.
 *
 * Just because closure returns a function along with its lexical environment, it
 * also comes with some gotchas or edge cases which we need to remember.
 *
 * What happens if we change the value of the variable inside the function before
 * we return it?
 * When we return a function we are actually returning the function along with the
 * reference to those variables and just their value. So, any changes made to the
 * variables value will be reflected since the reference to variables persist.
 */

function z() {
  var b = 800;
  function x() {
    var a = 28;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
/**
 * Here, as shown above, y() will form a closure along with the scope of x() and z().
 * If for example, we had returned the function y(), then the values 'a' and 'b'
 * would not have garbage collected.
 *
 * Uses of closures:
 * a, Module Design Pattern
 * b. Currying
 * c. Functions like `once`
 * d. Memoization
 * e. Maintaining state in async world
 * f. setTimeout
 * g. Iterators
 * h. and many more...
 */
