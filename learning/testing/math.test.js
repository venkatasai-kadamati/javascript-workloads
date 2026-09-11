import { expect, test } from "vitest";
import { addFunc, subsFunc } from "./math.js";

test("addFunc", () => {
  expect(addFunc(2, 3)).toBe(5);
});

test("subsFunc", () => {
  expect(subsFunc(2, 3)).toBe(-1);
});
