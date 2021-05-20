/**
 * Scope in JavaScript environment is directly related to Lexical Environment.
 *
 * Whenever we have a variable inside a function, JavaScript engine will try to find
 * that variable inside the function's execution context or the function's local memory.
 *
 * But some how the variable inside the function can access the value that is present
 * outside the function.
 *
 * However, if we have a variable defined inside a function, then we cannot access that
 * variable outside that function. We will get a not defined error. Here, the scope will
 * come into the picture.
 *
 * Scope: Scope is the one where we can access a specific variable or a function in
 * our code.
 *
 * There are two aspects to the variable b in the below example
 * 1. What is the scope of the variable b? That is, where can we access this variable b
 * 2. Is 'b' inside the scope of function c()? That is, can we access the variable 'b'
 * inside function c()?
 *
 * Lexical Environment: Whenever a program is executed, a global execution context is
 * created and every function invocation will also result in a execution context creation.
 * So, whenever a execution context is created a lexical environment is also created.
 *
 * A Lexical environment is the local memory along with the reference to the lexical
 * environment of its lexical parent.
 *
 * Along with the memory space, we also get a reference to the lexical environment of
 * its parent. Lexical means in a hierarchical, or in a sequence.
 *
 * Here, c's lexical parent is a, and a's lexical parent is global environment.
 *
 * What is scope chaining?
 * This mechanism of finding the variables in the lexical environments in a hierarchy
 * is known as Scope Chaining.
 * (OR)
 * The mechanism of this whole chain of all the lexical environments and the parent
 * references is known as the Scope Chaining.
 */
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
