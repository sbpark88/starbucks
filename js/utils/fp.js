// @ts-check

/**
 * Pipe function make functions stream.
 * @param fns {Function}
 * @returns {Function}
 */
export const pipe =
  (...fns) =>
  (initValue) =>
    fns.reduce(async (acc, fn) => fn(await acc), initValue);

/**
 * Apply curry a function
 * @param fn {Function} - A function to apply currying.
 * @returns {function(...[unknown]): unknown} - Curried function.
 */
export const curry = (fn) => {
  return function curryFn(...args1) {
    if (args1.length >= fn.length) {
      return fn(...args1);
    } else {
      return (...args2) => {
        return curryFn(...args1, ...args2);
      };
    }
  };
};
