export function* seq(xs) {
  for (let x of xs) {
    yield x;
  }
}

export function* take(n, s) {
  if (n <= 0) return;

  for (let x of s) {
    if (n-- > 0) {
      yield x;
      if (n <= 0) break;
    }
  }
}

export function* drop(n, s) {
  if (n <= 0) return;

  let i = 0;
  for (let x of s) {
    if (i >= n) yield x;
    else i++;
  }
}

export function* iterate(f, x) {
  yield x;
  let prev = x;
  while (true) {
    prev = f(prev);
    yield prev;
  }
}

export function* map(f, ...ss) {
  if (ss.length === 0) throw new Error("no sequences passed in.");

  if (ss.length === 1) {
    for (let x of seq(ss[0])) {
      yield f(x);
    }
    return;
  }

  ss = ss.map(seq);

  let finished = false;

  function nextItems(s) {
    return s.next();
  }

  function isDone(prevDone, {done}) {
    return prevDone || done;
  }

  function value(x) {
    return x.value;
  }

  while (!finished) {
    let res = ss.map(nextItems);
    finished = res.reduce(isDone, false);

    if (!finished) {
      yield f(...res.map(value));
    }
  }
}

export function* filter(pred, s) {
  for (let x of s) {
    if (pred(x)) yield x;
  }
}

export function reduce(f, a, b=undefined) {
  const s = seq(b === undefined ? a : b);
  let res = (b === undefined ? s.next().value : a);
  for (let x of s) {
    res = f(res, x);
  }
  return res;
}

export function* concat(...ss) {
  for (let s of ss) {
    for (let x of s) {
      yield x;
    }
  }
}

export function* mapcat(f, ...ss) {
  yield* concat(...map(f, ...ss));
}

export function* partition(n, s) {
  if (n <= 0) return;

  let i = 0;
  let buffer = new Array(n);

  for (let x of s) {
    if (i < n) {
      buffer[i] = x;
      i++;
      // yield and reset if a partition of n is made.
      if (i === n) {
        yield buffer;
        i = 0;
        buffer = new Array(n);
      }
    }
  }
}

export function* partitionAll(n, s) {
  if (n <= 0) return;

  let i = 0;
  let buffer = new Array(n);

  for (let x of s) {
    if (i < n) {
      buffer[i] = x;
      i++;
      // yield and reset if a partition of n is made.
      if (i === n) {
        yield buffer;
        i = 0;
        buffer = new Array(n);
      }
    }
  }

  if (i > 0) {
    buffer.length = i;
    yield buffer;
  }
}

export function* interleave(...ss) {
  if (ss.length === 0) throw new Error("no sequences passed in.");

  ss = ss.map(seq);

  let finished = false;

  function nextItems(s) {
    return s.next();
  }

  function isDone(prevDone, {done}) {
    return prevDone || done;
  }

  while (!finished) {
    let res = ss.map(nextItems);
    finished = res.reduce(isDone, false);

    if (!finished) {
      for (let {value: x} of res) {
        yield x;
      }
    }
  }
}
