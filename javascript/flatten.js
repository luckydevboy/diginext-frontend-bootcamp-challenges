/**
 * Returns a flatten object. Remember that the level of nesting is not specified.
 * Use case. Form creation for nested objects or lists.
 *
 * @param {object} object An object that may be nested.
 *
 * @param parentKey
 * @param result
 * @returns flatten object.
 *
 * @example flatten({"a": {"b": {"c": "d"}}}) => {"a.b.c": "d"}
 *
 */
const flatten = (object, parentKey = '', result = {}) => {
  Object.keys(object).forEach((key) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof object[key] === 'object' && !Array.isArray(object[key]) && object[key] !== null) {
      flatten(object[key], fullKey, result);
    } else {
      result[fullKey] = object[key];
    }
  });

  return result;
};

module.exports = flatten;


/**
 * Returns a nested object. Remember that the level of nesting is not specified.
 *
 * @param {object} object A flat object
 *
 * @returns maybe nested object
 *
 * @example revertFlatten({"a.b.c": "d"}) => {"a": {"b": {"c": "d"}}}
 *
 */
function revertFlatten(object) {
  // TODO: Implement here
}
