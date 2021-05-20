/**
 * "let" and "const" declarations are hoisted. These are in the Temporal Dead Zone for
 * the time being.
 *
 * let: A variable declared using "let" keyword cannot be accessed before
 * the variables are not initialized with some value. This is hoisting in let and const.
 *
 * How to know whether this variable was hoisted or not?
 * The value for the variable "b" was attached to the Global object.
 * Variables "a", and "b" and "c" are stored with undefined value due to hoisting but
 * variables declared using "let" and "const" are stored in a separate memory space
 * than Global.
 *
 * Temporal Dead Zone: Temporal Dead Zone is a time between the "let" variable was hoisted
 * and it is initialized with some value.
 *
 * For example, here the variable "a" is hoisted in a separate memory space (Script) with a
 * value undefined but without a value being initialized. This period of time when the
 * variable was not initialized any value is called a Temporal Dead Zone.
 *
 * Whenever we try to access a variable inside a Temporal Dead Zone will give us a
 * ReferenceError and can only be accessed once some value is initialized in it.
 *
 * Since "a" and "c" are present in a different storage space these variables will not be
 * attached to Global space like the ones we created using a "var" keyword.
 *
 * const: const declaration will behave very similar to a let with respect to hoisting.
 * However, we cannot declare a const variable and initialize it in different part of the
 * program in which case we get a SyntaxError.
 *
 * Three types of errors:
 * 1. SyntaxError
 * 2. ReferenceError
 * 3. TypeError
 *
 * SyntaxError: In case we try to redeclare a variable with the same name again.
 * JavaScript engine will not execute even a single line of code if it sees a redeclaration
 * or duplication error for let. Using var, we can redeclare the same variable any number
 * of times.
 *
 * TypeError: We cannot assign another value to a "const" variable in which case we get
 * a TypeError because the variable "c" is of type constant and should be declared and
 * initilized together and cannot assign a different value later.
 *
 * ReferenceError: When JavaScript engine tries to find out a specific variable inside
 * the memory space which cannot be accessed.
 *
 * Use const wherever possible. If not, use let since let has a temporal dead zone and we
 * do not run into issues like undefined. Use var consciously but try to keep it aside as
 * much as possible.
 *
 * To avoid temporal dead zone, it is better to have all the declarations and initializations
 * on top of the scope. This will shrink the temporal dead zone window to 0.
 */

console.log(a);
let a = 10;
console.log(a);
var b = 100;
const c = 1;
