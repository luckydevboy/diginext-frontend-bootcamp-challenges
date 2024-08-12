const add = require("../infinite-add");

describe("add function", () => {
  test("should return 3 for add(1, 2)", () => {
    expect(add(1, 2).toString()).toBe(3);
  });

  test("should return 6 for add(1, 2)(3)", () => {
    expect(add(1, 2)(3).toString()).toBe(6);
  });

  test("should return 15 for add(1, 2)(3)(4, 5)", () => {
    expect(add(1, 2)(3)(4, 5).toString()).toBe(15);
  });

  test("should return 21 for add(1, 2)(3)(4, 5)(6)", () => {
    expect(add(1, 2)(3)(4, 5)(6).toString()).toBe(21);
  });

  test("should return 45 for add(1, 2)(3)(4, 5)(6)(7, 8, 9)", () => {
    expect(add(1, 2)(3)(4, 5)(6)(7, 8, 9).toString()).toBe(45);
  });
});
