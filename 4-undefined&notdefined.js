/**
 * undefined: undefined is a special keyword that is reserved for a variable
 * in the variable environent component during the memory creation phase.
 *
 * not defined: if we try to access a variable which is not allocated any memory
 * we get a ReferenceError: not defined.
 *
 * JavaScript is a loosely typed language and doesn't attach any specific data type
 * to a variable.
 *
 * Avoid asigning undefined to any variable as it is a bad practice. It leads to a lot
 * of inconsistencies.
 */
var a;
console.log(a);
a = 10;

if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}
