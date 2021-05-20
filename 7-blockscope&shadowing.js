/**
 * What is a block in JS?
 *  A block is a pair of curly braces in JS which does nothing until we combine
 * multiple JavaScript statements into one group.
 *
 * A block is also known as a Compound Statement.
 *
 * Why do we need to group statements?
 *  We need to group these statements together so that we can use multiple statements
 * in a place where JavaScript expects only one statement.
 *
 * What is a block scope?
 *  Any variable and/or a function that we can access inside a block is known as a
 * block scope.
 */

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

/**
 * Here, b and c are hoisted in a separate memory space (Block) that is reserved
 * for this block, and a is hoisted in the Global memory space. Therefore let and const
 * are block scoped.
 */
