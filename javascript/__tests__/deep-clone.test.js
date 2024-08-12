const deepClone = require("../deep-clone");

describe("deepClone", () => {
  test("should copy primitive values", () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone("string")).toBe("string");
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
  });

  test("should copy arrays", () => {
    const original = [1, { a: 2 }, [3]];
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original); // Ensure it's a different object
    expect(copy[1]).not.toBe(original[1]); // Ensure nested objects are also copied
  });

  test("should copy objects", () => {
    const original = { a: 1, b: { c: 2 }, d: [3] };
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original); // Ensure it's a different object
    expect(copy.b).not.toBe(original.b); // Ensure nested objects are also copied
  });

  test("should copy Date objects", () => {
    const date = new Date();
    const copy = deepClone(date);

    expect(copy).toEqual(date);
    expect(copy).not.toBe(date); // Ensure it's a different object
    expect(copy.getTime()).toBe(date.getTime()); // Ensure the time is the same
  });

  test("should copy RegExp objects", () => {
    const regex = /abc/i;
    const copy = deepClone(regex);

    expect(copy).toEqual(regex);
    expect(copy).not.toBe(regex); // Ensure it's a different object
    expect(copy.source).toBe(regex.source);
    expect(copy.flags).toBe(regex.flags);
  });

  test("should copy Map objects", () => {
    const map = new Map([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);
    const copy = deepClone(map);

    expect(copy).toEqual(map);
    expect(copy).not.toBe(map); // Ensure it's a different object
    expect(copy.get("key1")).toBe(map.get("key1"));
    expect(copy.get("key2")).toBe(map.get("key2"));
  });

  test("should copy Set objects", () => {
    const set = new Set([1, 2, 3]);
    const copy = deepClone(set);

    expect(copy).toEqual(set);
    expect(copy).not.toBe(set); // Ensure it's a different object
    expect(copy.has(1)).toBe(true);
    expect(copy.has(2)).toBe(true);
    expect(copy.has(3)).toBe(true);
  });

  test("should copy functions", () => {
    const func = function () {
      return 1;
    };
    const copy = deepClone(func);

    expect(copy).toEqual(func); // Functions are difficult to compare, so we check if they are not the same
    expect(copy).not.toBe(func); // Ensure it's a different function
  });

  test("should handle complex nested structures", () => {
    const original = {
      a: [1, { b: new Date() }],
      c: new Map([["key", new Set([1, 2, 3])]]),
      d: /test/,
      e: function () {
        return "test";
      },
    };
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original); // Ensure it's a different object
    expect(copy.a[1].b).not.toBe(original.a[1].b); // Ensure nested Dates are also copied
    expect(copy.c.get("key")).not.toBe(original.c.get("key")); // Ensure nested Maps are also copied
    expect(copy.d.source).toBe(original.d.source); // Ensure RegExp is copied
    expect(copy.e).not.toBe(original.e); // Ensure function is copied
  });
});
