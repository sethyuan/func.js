export function* seq(arr) {
  for (let x of arr) {
    yield x;
  }
}

export function* take(n, generator) {
  if (n <= 0) return;

  for (let x of generator) {
    if (n-- > 0) {
      yield x;
      if (n <= 0) break;
    }
  }
}

export function* drop(n, generator) {
  if (n <= 0) return;

  let i = 0;
  for (let x of generator) {
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

export function* map(f, generator) {
  for (let x of generator) {
    yield f(x);
  }
}

export function* filter(pred, generator) {
  for (let x of generator) {
    if (pred(x)) yield x;
  }
}

export function* concat(...generators) {
  for (let gen of generators) {
    for (let x of gen) {
      yield x;
    }
  }
}

export function* mapcat(f, generator) {
  for (let x of generator) {
    for (let y of f(x)) {
      yield y;
    }
  }
}

export function* partition(n, generator) {
  if (n <= 0) return;

  let i = 0;
  let buffer = new Array(n);

  for (let x of generator) {
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

export function* partitionAll(n, generator) {
  if (n <= 0) return;

  let i = 0;
  let buffer = new Array(n);

  for (let x of generator) {
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

export function* interleave(...generators) {
  if (generators.length === 0) throw new Error("no generators passed in.");

  let done = false;

  while (!done) {
    let res = generators.map(gen => gen.next());
    done = res.reduce((prevDone, {done: done}) => prevDone || done, false);

    if (!done) {
      for (let {value: x} of res) {
        yield x;
      }
    }
  }
}

export function splitAt(n, generator) {
  return [Array.from(take(n, generator)), generator];
}
