"use strict";

export function identity(x) {
  return x;
}

export function isPos(n) {
  return n > 0;
}

export function isNeg(n) {
  return n < 0;
}

export function isZero(n) {
  return n === 0;
}

export function isOne(n) {
  return n === 1;
}

export function complement(f) {
  return (...args) => !f(...args);
}

export function comp(...fs) {
  if (fs.length === 2) {
    const [f, g] = fs;
    return x => f(g(x));
  } else if (fs.length === 3) {
    const [f, g, h] = fs;
    return x => f(g(h(x)));
  }
  return x => fs.reverse().reduce((r, f) => f(r), x);
}

export function constantly(x) {
  return () => x;
}

export function inc(n) {
  return n + 1;
}

export function dec(n) {
  return n - 1;
}

export function juxt(...fs) {
  if (fs.length === 2) {
    const [f, g] = fs;
    return x => [f(x), g(x)];
  } else if (fs.length === 3) {
    const [f, g, h] = fs;
    return x => [f(x), g(x), h(x)];
  } else {
    return x => fs.map(f => f(x));
  }
}

// export function* range(...args) {
//   let start, end, step;
//
//   switch (args.length) {
//   case 0:
//     start = 0;
//     while (true) yield start++;
//     break;
//   case 1:
//     [start, end, step] = [0, args[0], 1];
//     break;
//   case 2:
//     [start, end, step] = [...args, 1];
//     break;
//   default:
//     [start, end, step] = args;
//     break;
//   }
//
//   if (isPos(step)) {
//     while (start <= end) {
//       yield start;
//       start += step;
//     }
//   } else if (isNeg(step)) {
//     while (start >= end) {
//       yield start;
//       start += step;
//     }
//   }
// }

export function min(xs, f=identity) {
  let res;
  for (let x of xs) {
    let val = f(x);
    if (res === undefined || val < res) {
      res = val;
    }
  }
  return res;
}

export function max(xs, f=identity) {
  let res;
  for (let x of xs) {
    let val = f(x);
    if (res === undefined || val > res) {
      res = val;
    }
  }
  return res;
}

export function pipe(x, ...fs) {
  return fs.reduce((r, f) => f(r), x);
}
