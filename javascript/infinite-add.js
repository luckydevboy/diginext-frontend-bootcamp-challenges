/**
 * This method can get infinity numbers as args and can call for infinity time.
 * The result of the last call should be parsable as both number or string.
 * Use case: No use case. Just sth fun :)))))
 */
function add(...args) {
  // Sum the arguments passed to this function
  const sum = args.reduce((acc, val) => acc + val, 0);

  // Return a new function that takes additional arguments
  const inner = (...newArgs) => add(sum, ...newArgs);

  // Override the toString method to return the sum when the function is converted to a string
  inner.toString = () => sum;

  return inner;
}

module.exports = add;

// Call Examples
// add(1, 2);
// add(1, 2)(3);
// add(1, 2)(3)(4, 5);
// add(1, 2)(3)(4, 5)(6);
// add(1, 2)(3)(4, 5)(6)(7, 8, 9);
