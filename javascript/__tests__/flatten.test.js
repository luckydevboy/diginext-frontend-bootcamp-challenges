const flatten = require("../flatten");

describe("flatten", () => {
  test("flattens a simple nested object", () => {
    const input = { a: { b: { c: "d" } } };
    const expectedOutput = { "a.b.c": "d" };
    expect(flatten(input)).toEqual(expectedOutput);
  });

  test("flattens a more complex nested object", () => {
    const input = {
      a: {
        b: {
          c: "d",
          e: "f",
        },
        g: "h",
      },
      i: "j",
    };
    const expectedOutput = {
      "a.b.c": "d",
      "a.b.e": "f",
      "a.g": "h",
      i: "j",
    };
    expect(flatten(input)).toEqual(expectedOutput);
  });

  test("handles an object with an array", () => {
    const input = {
      a: {
        b: [1, 2, 3],
      },
    };
    const expectedOutput = {
      "a.b": [1, 2, 3],
    };
    expect(flatten(input)).toEqual(expectedOutput);
  });

  test("handles an already flat object", () => {
    const input = { "a.b.c": "d" };
    const expectedOutput = { "a.b.c": "d" };
    expect(flatten(input)).toEqual(expectedOutput);
  });

  test("handles an empty object", () => {
    const input = {};
    const expectedOutput = {};
    expect(flatten(input)).toEqual(expectedOutput);
  });
});
