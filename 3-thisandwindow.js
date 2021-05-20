/**
 * The shortest JavaScript program is an empty .js file. Even though the file
 * is empty JavaScript engine does a lot of things behind the scenes.
 *
 * JavaScript engine still creates a global execution context and sets up a
 * memory space.
 *
 * JavaScript engine also creates something known as a `window`. This window
 * is a big object with a lot of variables and functions in the global space.
 * These methods can be used anywhere in our program.
 *
 * Just like the `window` object, JavaScript engine also creates a `this` keyword.
 * At the global level the `this` keyword points to the `window` object.
 *
 * But what is a window object??
 * A `window` is a global object which is created along with the global execution context.
 * So whenever a JavaScript program is run a global execution context is created along with
 * a `window` and a `this` keywords.
 *
 * Wherever a JavaScript program runs a JavaScript engine must be running. In case of a
 * browser the global object is known as a window and in case of NodeJS it is something else
 * and so on. At the base level or the global execution context the `this` is equal to `window`.
 *
 * Global Space: A global space is nothing but any code we write inside a JavaScript file
 * which is not inside a function.
 *
 * Basically, the code that we write in the .js file outside any function will get attached
 * to the window object.
 */
var a = 10;

function b() {
  var x = 100;
}
console.log(window.a);
console.log(a);
console.log(this.a);
