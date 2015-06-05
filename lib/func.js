"use strict";

var _slicedToArrayLoose = require("babel-runtime/helpers/sliced-to-array-loose")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.identity = identity;
exports.isPos = isPos;
exports.isNeg = isNeg;
exports.isZero = isZero;
exports.isOne = isOne;
exports.complement = complement;
exports.comp = comp;
exports.constantly = constantly;
exports.inc = inc;
exports.dec = dec;
exports.juxt = juxt;
exports.range = range;
exports.min = min;
exports.max = max;
var marked0$0 = [range].map(_regeneratorRuntime.mark);

function identity(x) {
  return x;
}

function isPos(n) {
  return n > 0;
}

function isNeg(n) {
  return n < 0;
}

function isZero(n) {
  return n === 0;
}

function isOne(n) {
  return n === 1;
}

function complement(f) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !f.apply(undefined, args);
  };
}

function comp() {
  for (var _len2 = arguments.length, fs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fs[_key2] = arguments[_key2];
  }

  if (fs.length === 2) {
    var _ret = (function () {
      var f = fs[0];
      var g = fs[1];

      return {
        v: function (x) {
          return f(g(x));
        }
      };
    })();

    if (typeof _ret === "object") return _ret.v;
  } else if (fs.length === 3) {
    var _ret2 = (function () {
      var f = fs[0];
      var g = fs[1];
      var h = fs[2];

      return {
        v: function (x) {
          return f(g(h(x)));
        }
      };
    })();

    if (typeof _ret2 === "object") return _ret2.v;
  }
  return function (x) {
    return fs.reverse().reduce(function (r, f) {
      return f(r);
    }, x);
  };
}

function constantly(x) {
  return function () {
    return x;
  };
}

function inc(n) {
  return n + 1;
}

function dec(n) {
  return n - 1;
}

function juxt() {
  for (var _len3 = arguments.length, fs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fs[_key3] = arguments[_key3];
  }

  if (fs.length === 2) {
    var _ret3 = (function () {
      var f = fs[0];
      var g = fs[1];

      return {
        v: function (x) {
          return [f(x), g(x)];
        }
      };
    })();

    if (typeof _ret3 === "object") return _ret3.v;
  } else if (fs.length === 3) {
    var _ret4 = (function () {
      var f = fs[0];
      var g = fs[1];
      var h = fs[2];

      return {
        v: function (x) {
          return [f(x), g(x), h(x)];
        }
      };
    })();

    if (typeof _ret4 === "object") return _ret4.v;
  } else {
    return function (x) {
      return fs.map(function (f) {
        return f(x);
      });
    };
  }
}

function range() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  var start, end, step, _concat, _concat2;

  return _regeneratorRuntime.wrap(function range$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        start = undefined, end = undefined, step = undefined;
        context$1$0.t0 = args.length;
        context$1$0.next = context$1$0.t0 === 0 ? 4 : context$1$0.t0 === 1 ? 11 : context$1$0.t0 === 2 ? 15 : 21;
        break;

      case 4:
        start = 0;

      case 5:
        if (!true) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 8;
        return start++;

      case 8:
        context$1$0.next = 5;
        break;

      case 10:
        return context$1$0.abrupt("break", 25);

      case 11:
        start = 0;
        end = args[0];
        step = 1;
        return context$1$0.abrupt("break", 25);

      case 15:
        _concat = [].concat(args, [1]);
        _concat2 = _slicedToArrayLoose(_concat, 3);
        start = _concat2[0];
        end = _concat2[1];
        step = _concat2[2];
        return context$1$0.abrupt("break", 25);

      case 21:
        start = args[0];
        end = args[1];
        step = args[2];
        return context$1$0.abrupt("break", 25);

      case 25:
        if (!isPos(step)) {
          context$1$0.next = 34;
          break;
        }

      case 26:
        if (!(start <= end)) {
          context$1$0.next = 32;
          break;
        }

        context$1$0.next = 29;
        return start;

      case 29:
        start += step;
        context$1$0.next = 26;
        break;

      case 32:
        context$1$0.next = 41;
        break;

      case 34:
        if (!isNeg(step)) {
          context$1$0.next = 41;
          break;
        }

      case 35:
        if (!(start >= end)) {
          context$1$0.next = 41;
          break;
        }

        context$1$0.next = 38;
        return start;

      case 38:
        start += step;
        context$1$0.next = 35;
        break;

      case 41:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

function min(xs) {
  var f = arguments[1] === undefined ? identity : arguments[1];

  var res = undefined;
  for (var _iterator = xs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var x = _ref;

    var val = f(x);
    if (res == undefined || val < res) {
      res = val;
    }
  }
  return res;
}

function max(xs) {
  var f = arguments[1] === undefined ? identity : arguments[1];

  var res = undefined;
  for (var _iterator2 = xs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var x = _ref2;

    var val = f(x);
    if (res == undefined || val > res) {
      res = val;
    }
  }
  return res;
}