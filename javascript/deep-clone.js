/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */
const deepClone = (arg) => {
  if (arg === null || typeof arg !== 'object') {
    return arg;
  }

  if (arg instanceof Date) {
    return new Date(arg.getTime());
  }

  if (arg instanceof RegExp) {
    return new RegExp(arg.source, arg.flags);
  }

  if (Array.isArray(arg)) {
    return arg.map(item => deepClone(item));
  }

  if (arg instanceof Map) {
    return new Map(Array.from(arg.entries()).map(([key, value]) => [deepClone(key), deepClone(value)]));
  }

  if (arg instanceof Set) {
    return new Set(Array.from(arg.values()).map(value => deepClone(value)));
  }

  if (arg instanceof Function) {
    return arg.bind({});
  }

  // Handle generic objects
  const copy = {};

  for (const key in arg) {
    if (arg.hasOwnProperty(key)) {
      copy[key] = deepClone(arg[key]);
    }
  }

  return copy;
}

module.exports = deepClone;
