require("source-map-support").install();

import {
  identity, isPos, isNeg, isZero, isOne,
  complement, comp, constantly,
  inc, dec, juxt, range, min, max
} from "../lib/func"

describe("func", () => {
  it("identity", () => {
    expect(identity(1)).toBe(1);
    const arr = [1];
    expect(identity(arr)).toBe(arr);
  });

  it("isPos", () => {
    expect(isPos(1)).toBe(true);
    expect(isPos(-1)).toBe(false);
    expect(isPos(0)).toBe(false);
  });

  it("isNeg", () => {
    expect(isNeg(1)).toBe(false);
    expect(isNeg(-1)).toBe(true);
    expect(isNeg(0)).toBe(false);
  });

  it("isZero", () => {
    expect(isZero(1)).toBe(false);
    expect(isZero(-1)).toBe(false);
    expect(isZero(0)).toBe(true);
  });

  it("isOne", () => {
    expect(isOne(1)).toBe(true);
    expect(isOne(-1)).toBe(false);
    expect(isOne(0)).toBe(false);
  });

  it("complement of isZero is non-zero", () => {
    const nonZero = complement(isZero);
    expect(nonZero(0)).toBe(false);
    expect(nonZero(1)).toBe(true);
    expect(nonZero(-1)).toBe(true);
  });

  it("composing *2 and +1 gives you +1 then *2", () => {
    function plusOne(n) {
      return n + 1;
    }
    function double(n) {
      return n * 2;
    }
    const plusOneThenDouble = comp(double, plusOne);
    expect(plusOneThenDouble(2)).toBe((2 + 1) * 2);
  });

  it("constantly returning true", () => {
    const alwaysTrue = constantly(true);
    expect(alwaysTrue()).toBe(true);
  });

  it("inc 0 is 1", () => {
    expect(inc(0)).toBe(1);
  });

  it("dec 0 is -1", () => {
    expect(dec(0)).toBe(-1);
  });

  it("juxt", () => {
    const incDec = juxt(inc, dec);
    expect(incDec(0)).toEqual([1, -1]);

    const oneTwoThree = juxt(constantly(1), constantly(2), constantly(3));
    expect(oneTwoThree(0)).toEqual([1, 2, 3]);
  });

  it("range with 0 arg produce an infinite sequence starting from 0", () => {
    let i = 1;
    for (let x of range()) {
      if (i++ > 100) break;
    }
  });

  it("range with 1 arg n produce a sequence from 0 to n inclusive", () => {
    expect(Array.from(range(3))).toEqual([0, 1, 2, 3]);
  });

  it("range with 2 args produce a sequence from start to end inclusive", () => {
    expect(Array.from(range(1, 3))).toEqual([1, 2, 3]);
  });

  it("range with 3 args is like with 2 args but with stepping", () => {
    expect(Array.from(range(1, 7, 2))).toEqual([1, 3, 5, 7]);
    expect(Array.from(range(1, 8, 2))).toEqual([1, 3, 5, 7]);
    expect(Array.from(range(5, 0, -3))).toEqual([5, 2]);
    expect(Array.from(range(5, -1, -3))).toEqual([5, 2, -1]);
  });

  it("step 0 produce nothing", () => {
    expect(Array.from(range(1, 3, 0))).toEqual([]);
  });

  it("min array of numbers", () => {
    expect(min([4, 3, 1, 2])).toBe(1);
  });

  it("min array using length", () => {
    expect(min(["hello", "foo", "x", "abcd"], x => x.length)).toBe(1);
  });

  it("max array of numbers", () => {
    expect(max([4, 3, 1, 2, 5])).toBe(5);
  });

  it("max array using length", () => {
    expect(max(["foo", "hello", "x", "abcd"], x => x.length)).toBe(5);
  });
});
