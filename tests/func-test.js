require("source-map-support").install();

import {expect} from "chai";
import {
  identity, isPos, isNeg, isZero, isOne,
  complement, comp, constantly,
  inc, dec, juxt, range, min, max, pipe
} from "./func";

describe("func", () => {
  it("identity", () => {
    expect(identity(1)).equal(1);
    const arr = [1];
    expect(identity(arr)).equal(arr);
  });

  it("isPos", () => {
    expect(isPos(1)).equal(true);
    expect(isPos(-1)).equal(false);
    expect(isPos(0)).equal(false);
  });

  it("isNeg", () => {
    expect(isNeg(1)).equal(false);
    expect(isNeg(-1)).equal(true);
    expect(isNeg(0)).equal(false);
  });

  it("isZero", () => {
    expect(isZero(1)).equal(false);
    expect(isZero(-1)).equal(false);
    expect(isZero(0)).equal(true);
  });

  it("isOne", () => {
    expect(isOne(1)).equal(true);
    expect(isOne(-1)).equal(false);
    expect(isOne(0)).equal(false);
  });

  it("complement of isZero is non-zero", () => {
    const nonZero = complement(isZero);
    expect(nonZero(0)).equal(false);
    expect(nonZero(1)).equal(true);
    expect(nonZero(-1)).equal(true);
  });

  it("composing *2 and +1 gives you +1 then *2", () => {
    function plusOne(n) {
      return n + 1;
    }
    function double(n) {
      return n * 2;
    }
    const plusOneThenDouble = comp(double, plusOne);
    expect(plusOneThenDouble(2)).equal((2 + 1) * 2);
  });

  it("constantly returning true", () => {
    const alwaysTrue = constantly(true);
    expect(alwaysTrue()).equal(true);
  });

  it("inc 0 is 1", () => {
    expect(inc(0)).equal(1);
  });

  it("dec 0 is -1", () => {
    expect(dec(0)).equal(-1);
  });

  it("juxt", () => {
    const incDec = juxt(inc, dec);
    expect(incDec(0)).deep.equal([1, -1]);

    const oneTwoThree = juxt(constantly(1), constantly(2), constantly(3));
    expect(oneTwoThree(0)).deep.equal([1, 2, 3]);
  });

  xit("range with 0 arg produce an infinite sequence starting from 0", () => {
    const nums = range();
    for (let i = 0; i < 100; i++) {
      nums.next();
    }
  });

  xit("range with 1 arg n produce a sequence from 0 to n inclusive", () => {
    expect(Array.from(range(3))).deep.equal([0, 1, 2, 3]);
  });

  xit("range with 2 args produce a sequence from start to end inclusive", () => {
    expect(Array.from(range(1, 3))).deep.equal([1, 2, 3]);
  });

  xit("range with 3 args is like with 2 args but with stepping", () => {
    expect(Array.from(range(1, 7, 2))).deep.equal([1, 3, 5, 7]);
    expect(Array.from(range(1, 8, 2))).deep.equal([1, 3, 5, 7]);
    expect(Array.from(range(5, 0, -3))).deep.equal([5, 2]);
    expect(Array.from(range(5, -1, -3))).deep.equal([5, 2, -1]);
  });

  xit("step 0 produce nothing", () => {
    expect(Array.from(range(1, 3, 0))).deep.equal([]);
  });

  it("min number of an array", () => {
    expect(min([4, 3, 1, 2])).equal(1);
  });

  it("min length of an array", () => {
    expect(min(["hello", "foo", "x", "abcd"], x => x.length)).equal(1);
  });

  it("max number of an array", () => {
    expect(max([4, 3, 1, 2, 5])).equal(5);
  });

  it("max length of an array", () => {
    expect(max(["foo", "hello", "x", "abcd"], x => x.length)).equal(5);
  });

  it("pipe", () => {
    const arr = pipe(
      [1, 2, 3, 4],
      _ => _.map(x => 2 * x),
      _ => _.filter(x => x % 4 === 0),
      _ => new Array(_.length)
    );
    expect(arr.length).equal(2);
  });
});
