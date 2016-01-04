require("source-map-support").install();

import {expect} from "chai";
import {
  take, drop, map, filter, reduce,
  concat, mapcat, partition, partitionAll,
  interleave, splitAt
} from "./arr";

describe("arr", () => {
  it("take 3", () => {
    expect(take(3, [1, 2, 3, 4, 5])).deep.equal([1, 2, 3]);
  });

  it("take more than you have", () => {
    expect(take(3, [1, 2])).deep.equal([1, 2]);
  });

  it("drop 3", () => {
    expect(drop(3, [1, 2, 3, 4, 5])).deep.equal([4, 5]);
  });

  it("doubled using map", () => {
    expect(map(x => x * 2, [1, 2, 3])).deep.equal([2, 4, 6]);
  });

  it("key value pair using map", () => {
    const keys = ["k1", "k2"];
    const values = ["v1", "v2"];
    const pairs = map((x, y) => [x, y], keys, values);
    expect(pairs).deep.equal([["k1", "v1"], ["k2", "v2"]]);
  });

  it("filter odd ones", () => {
    expect(filter(x => x % 2 === 1, [1, 2, 3, 4, 5, 6])).deep.equal([1, 3, 5]);
  });

  it("a sum with reduce", () => {
    function add(x, y) {
      return x + y;
    }
    const numbers = [1, 2, 3, 4];
    expect(reduce(add, numbers)).equal(10);
  });

  it("count of characters using reduce with an initial value", () => {
    function addLength(len, x) {
      return len + x.length;
    }
    const words = ["hello", "world", "!"];
    expect(reduce(addLength, 0, words)).equal(11);
  });

  it("concat [1, 2] and [3, 4] gives [1, 2, 3, 4]", () => {
    expect(concat([1, 2], [3, 4])).deep.equal([1, 2, 3, 4]);
  });

  it("concat multiple", () => {
    const a = [1, 2];
    const b = [3, 4];
    const c = [5, 6];
    expect(concat(a, b, c)).deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it("convert phrases to words using mapcat", () => {
    const phrases = ["hello world", "i love front end"];
    const words = mapcat(phrase => phrase.split(" "), phrases);
    expect(words).deep.equal([
      "hello",
      "world",
      "i",
      "love",
      "front",
      "end"
    ]);
  });

  it("construct key-value pairs using mapcat", () => {
    const keys = ["k1", "k2"];
    const values = ["v1", "v2"];
    const pairs = mapcat((k, v) => [k, v], keys, values);
    expect(Array.from(pairs)).deep.equal([
      "k1", "v1",
      "k2", "v2"
    ]);
  });

  it("make partition of 3 out of 6", () => {
    expect(partition(3, [1, 2, 3, 4, 5, 6])).deep.equal([[1, 2, 3], [4, 5, 6]]);
  });

  it("make partition of 3 out of 7", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    // 7 is discarded because no partition of 3 can be formed.
    expect(partition(3, numbers)).deep.equal([[1, 2, 3], [4, 5, 6]]);
  });

  it("make partition of 3 out of 2", () => {
    expect(partition(3, [1, 2])).deep.equal([]);
  });

  it("make partitionAll of 3 out of 6", () => {
    expect(partitionAll(3, [1, 2, 3, 4, 5, 6])).deep.equal([[1, 2, 3], [4, 5, 6]]);
  });

  it("make partitionAll of 3 out of 7", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    expect(partitionAll(3, numbers)).deep.equal([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it("make partitionAll of 3 out of 2", () => {
    expect(partitionAll(3, [1, 2])).deep.equal([[1, 2]]);
  });

  it("interleave", () => {
    const a = ["a", "b", "c"];
    const b = [1, 2, 3];
    expect(interleave(a, b)).deep.equal(["a", 1, "b", 2, "c", 3]);
  });

  it("interleave multiple", () => {
    const a = ["a", "b", "c"];
    const b = [1, 2, 3];
    const c = [",", ".", ";"];
    expect(interleave(a, b, c))
      .deep.equal(["a", 1, ",", "b", 2, ".", "c", 3, ";"]);
  });

  it("interleave ends at the shortest input", () => {
    expect(interleave(["a", "b", "c"], [1, 2]))
      .deep.equal(["a", 1, "b", 2]);
    expect(interleave(["a", "b"], [1, 2, 3]))
      .deep.equal(["a", 1, "b", 2]);
  });

  it("interleave with no argument", () => {
    expect(() => interleave()).throw();
  });

  it("splitAt", () => {
    expect(splitAt(2, [1, 2, 3, 4, 5, 6])).deep.equal([[1, 2], [3, 4, 5, 6]]);
    expect(splitAt(3, [1, 2])).deep.equal([[1, 2], []]);
    expect(splitAt(0, [1, 2])).deep.equal([[], [1, 2]]);
  });
});
