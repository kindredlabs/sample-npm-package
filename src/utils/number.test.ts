import { describe, expect, it } from "vitest";
import { minmax, roundToPrecision } from "./number";

describe('minmax', () => {
  it('limits the value to the specified range', () => {
    expect(minmax(0, 1, 10)).toBe(1);
    expect(minmax(5, 1, 10)).toBe(5);
    expect(minmax(11, 1, 10)).toBe(10);
  });
});

describe('roundToPrecision', () => {
  it('rounds the number to the specified precision', () => {
    expect(roundToPrecision(1.23456, 2)).toBe(1.23);
    expect(roundToPrecision(1.23456, 4)).toBe(1.2346);
    expect(roundToPrecision(1.23456)).toBe(1.23);
  });
});
