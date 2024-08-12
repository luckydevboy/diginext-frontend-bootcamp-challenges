/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */
const deepClone = (arg) => {
  if (arg === null || typeof arg !== "object") return arg;

  if (Array.isArray(arg)) return arg.map(deepClone);

  if (arg instanceof Date) return new Date(arg);

  if (arg instanceof RegExp) return new RegExp(arg);

  if (arg instanceof Map) return new Map(arg);

  if (arg instanceof Set) return new Set(arg);

  if (arg instanceof Function) return arg.bind({});

  const copy = {};

  for (const key in arg) {
    copy[key] = deepClone(arg[key]);
  }

  return copy;
};

module.exports = deepClone;
