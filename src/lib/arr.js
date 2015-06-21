import {min} from "./func";

export function take(n, arr) {
  return arr.slice(0, n);
}

export function drop(n, arr) {
  return arr.slice(n);
}

export function map(f, arr) {
  return arr.map(f);
}

export function filter(pred, arr) {
  return arr.filter(pred);
}

export function reduce(f, a, b=undefined) {
  const arr = (b === undefined ? a : b);
  if (b === undefined) {
    return arr.reduce(f);
  } else {
    return arr.reduce(f, a);
  }
}

export function concat(...arrs) {
  // Functional implementation:
  // return arrs.reduce((a, b) => a.concat(b));

  let len = 0;
  for (let i = 0; i < arrs.length; i++) {
    len += arrs[i].length;
  }

  const res = new Array(len);

  let i = 0;
  for (let arr of arrs) {
    for (let x of arr) {
      res[i++] = x;
    }
  }

  return res;
}

export function mapcat(f, arr) {
  return concat(...arr.map(f));
}

export function partition(n, arr) {
  let groupCount = (arr.length / n) << 0;
  let groups = new Array(groupCount);
  for (let i = 0; i < groupCount; i++) {
    groups[i] = [];
  }

  for (let i = 0, g = 0; i < n * groupCount; i++, g = (i / n) << 0) {
    groups[g][i % n] = arr[i];
  }

  return groups;
}

export function partitionAll(n, arr) {
  let groupCount = (arr.length / n) << 0;
  let groups = new Array(groupCount);
  for (let i = 0; i < groupCount; i++) {
    groups[i] = [];
  }

  for (let i = 0, g = 0; i < n * groupCount; i++, g = (i / n) << 0) {
    groups[g][i % n] = arr[i];
  }

  if (arr.length % n > 0) groups.push(arr.slice(n * groupCount));

  return groups;
}

export function interleave(...arrs) {
  const n = arrs.length;
  if (n === 0) throw new Error("no array passed in.");

  const shortestLen = min(arrs, arr => arr.length);
  const res = new Array(shortestLen * n);
  for (let i = 0; i < res.length; i++) {
    res[i] = arrs[i % n][(i / n) << 0];
  }
  return res;
}

export function splitAt(n, arr) {
  return [arr.slice(0, n), arr.slice(n)];
}
