/**
 * Many think that the setTimeout() function runs right where it is declared.
 * No. If we have any statement after the setTimeout() function, then those
 * statements will be executed first, then the program waits for the amount
 * of time mentioned in the setTimeout() function before finally executing.
 *
 * Many think, JavaScript waits for setTimeout() function but it doesn't.
 *
 * The callback function inside setTimeout() forms a closure and remembers any
 * reference variables used inside it. Next, JavaScript takes the setTimeout()
 * function, stores it in some place and attaches the timer with it. Meanwhile
 * JavaScript goes to the next line and does what it has to. Once the timer
 * expires, JavaScript takes the setTimeout() function into the call stack
 * and runs it. This is how setTimeout() works behind the scenes.
 */
function x() {
  var i = 10;
  setTimeout(() => {
    console.log(i);
  }, 3000);
  console.log("Hello JavaScript!");
}
x();

/**
 * The above program had to print 1 through 5 after some timeout seconds.
 * However, it doesn't behave that way because of closure.
 *
 * In the above program, when the setTimeout() takes the callback function,
 * stores it somewhere and attaches a timer to it, the function remembers
 * the reference to the variable 'i'. This reference will point to the
 * same memory space of 'i' in the memory. Also, JavaScript will keep running
 * the loop 5 times. Once the timer executes, the value of 'i' in the memory
 * would be '6'. Hence this above program prints a '6' every time since all
 * the call back functions are referring to the same reference 'i' in the
 * memory.
 *
 * A simple way to fix this is to use `let` instead of a `var` since `let`
 * has a block scope and for each and every for loop iteration, the `i` is
 * a new copy all together. The callback function forms a closure with the
 * new variable itself.
 */
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello JavaScript!");
}
x();

/**
 * What if we want to run the above program using a var keyword itself?
 * In this case, we need to make use of a closure itself. We need to wrap
 * the setTimeout() function within another function and call the function
 * by passing a new value of variable 'i' as shown. Every time we pass the
 * value 'i', it creates a new copy of i when we use it as an argument.
 */

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Hello JavaScript");
}
x();
