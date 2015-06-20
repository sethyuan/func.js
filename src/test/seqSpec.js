require("source-map-support").install();

import {inc, range} from "../lib/func"
import {
  seq, take, drop, iterate, map, filter, reduce,
  concat, mapcat, partition, partitionAll,
  interleave, splitAt
} from "../lib/seq"

describe("seq", () => {
  it("take 3", () => {
    const first3 = take(3, [1, 2, 3, 4, 5]);
    const arr = Array.from(first3);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("take more than you have", () => {
    const first3 = take(3, [1, 2]);
    const arr = Array.from(first3);
    expect(arr).toEqual([1, 2]);
  });

  it("drop 3", () => {
    const fourFive = drop(3, [1, 2, 3, 4, 5]);
    const arr = Array.from(fourFive);
    expect(arr).toEqual([4, 5]);
  });

  it("ever increasing number with iterate", () => {
    const numbers = iterate(inc, 1);
    const arr = Array.from(take(3, numbers));
    expect(arr).toEqual([1, 2, 3]);
  });

  it("doubled using map", () => {
    const numbers = iterate(inc, 1);
    const doubled = map(x => x * 2, numbers);
    const arr = Array.from(take(3, doubled));
    expect(arr).toEqual([2, 4, 6]);
  });

  it("filter odd ones", () => {
    const numbers = iterate(inc, 1);
    const odds = filter(x => x % 2 === 1, numbers);
    const arr = Array.from(take(3, odds));
    expect(arr).toEqual([1, 3, 5]);
  });

  it("a sum with reduce", () => {
    function add(x, y) {
      return x + y;
    }
    const numbers = range(1, 4);
    expect(reduce(add, numbers)).toBe(10);
  });

  it("count of characters using reduce with an initial value", () => {
    function addLength(len, x) {
      return len + x.length;
    }
    const words = ["hello", "world", "!"];
    expect(reduce(addLength, 0, words)).toBe(11);
  });

  it("concat [1, 2] and [3, 4] gives [1, 2, 3, 4]", () => {
    const a = seq([1, 2]);
    const b = seq([3, 4]);
    expect(Array.from(concat(a, b))).toEqual([1, 2, 3, 4]);
  });

  it("concat multiple", () => {
    const a = seq([1, 2]);
    const b = seq([3, 4]);
    const c = seq([5, 6]);
    expect(Array.from(concat(a, b, c))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("convert phrases to words using mapcat", () => {
    const phrases = ["hello world", "i love front end"];
    const words = mapcat(phrase => phrase.split(" "), phrases);
    expect(Array.from(words)).toEqual([
      "hello",
      "world",
      "i",
      "love",
      "front",
      "end"
    ]);
  });

  it("make partition of 3 out of 6", () => {
    const numbers = range(1, 6);
    const partitioned = partition(3, numbers);
    expect(Array.from(partitioned)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it("make partition of 3 out of 7", () => {
    const numbers = range(1, 7);
    const partitioned = partition(3, numbers);
    // 7 is discarded because no partition of 3 can be formed.
    expect(Array.from(partitioned)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it("make partition of 3 out of 2", () => {
    const numbers = range(1, 2);
    const partitioned = partition(3, numbers);
    expect(Array.from(partitioned)).toEqual([]);
  });

  it("make partitionAll of 3 out of 6", () => {
    const numbers = range(1, 6);
    const partitioned = partitionAll(3, numbers);
    expect(Array.from(partitioned)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it("make partitionAll of 3 out of 7", () => {
    const numbers = range(1, 7);
    const partitioned = partitionAll(3, numbers);
    expect(Array.from(partitioned)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it("make partitionAll of 3 out of 2", () => {
    const numbers = range(1, 2);
    const partitioned = partitionAll(3, numbers);
    expect(Array.from(partitioned)).toEqual([[1, 2]]);
  });

  it("interleave", () => {
    const a = seq(["a", "b", "c"]);
    const b = seq([1, 2, 3]);
    expect(Array.from(interleave(a, b)))
      .toEqual(["a", 1, "b", 2, "c", 3]);
  });

  it("interleave multiple", () => {
    const a = seq(["a", "b", "c"]);
    const b = seq([1, 2, 3]);
    const c = seq([",", ".", ";"]);
    expect(Array.from(interleave(a, b, c)))
      .toEqual(["a", 1, ",", "b", 2, ".", "c", 3, ";"]);
  });

  it("interleave ends at the shortest input", () => {
    expect(Array.from(interleave(seq(["a", "b", "c"]), seq([1, 2]))))
      .toEqual(["a", 1, "b", 2]);
    expect(Array.from(interleave(seq(["a", "b"]), seq([1, 2, 3]))))
      .toEqual(["a", 1, "b", 2]);
  });

  it("interleave with no argument", () => {
    expect(() => Array.from(interleave())).toThrow();
  });

  it("first part of splitAt should be realized", () => {
    const res = splitAt(2, range(1, 6));
    expect(Array.from(res[1])).toEqual([3, 4, 5, 6]);
  });

  it("splitAt", () => {
    expect(splitAt(2, range(1, 6)).map(x => Array.from(x)))
      .toEqual([[1, 2], [3, 4, 5, 6]]);
    expect(splitAt(3, range(1, 2)).map(x => Array.from(x)))
      .toEqual([[1, 2], []]);
    expect(splitAt(0, range(1, 2)).map(x => Array.from(x)))
      .toEqual([[], [1, 2]]);
  });
});
