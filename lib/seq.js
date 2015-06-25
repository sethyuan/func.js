"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.seq = seq;
exports.take = take;
exports.drop = drop;
exports.iterate = iterate;
exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.concat = concat;
exports.mapcat = mapcat;
exports.partition = partition;
exports.partitionAll = partitionAll;
exports.interleave = interleave;
exports.splitAt = splitAt;
var marked0$0 = [seq, take, drop, iterate, map, filter, concat, mapcat, partition, partitionAll, interleave].map(_regeneratorRuntime.mark);

function seq(xs) {
  var _iterator, _isArray, _i, _ref, x;

  return _regeneratorRuntime.wrap(function seq$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator = xs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);

      case 1:
        if (!_isArray) {
          context$1$0.next = 7;
          break;
        }

        if (!(_i >= _iterator.length)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("break", 16);

      case 4:
        _ref = _iterator[_i++];
        context$1$0.next = 11;
        break;

      case 7:
        _i = _iterator.next();

        if (!_i.done) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt("break", 16);

      case 10:
        _ref = _i.value;

      case 11:
        x = _ref;
        context$1$0.next = 14;
        return x;

      case 14:
        context$1$0.next = 1;
        break;

      case 16:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

function take(n, s) {
  var _iterator2, _isArray2, _i2, _ref2, x;

  return _regeneratorRuntime.wrap(function take$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!(n <= 0)) {
          context$1$0.next = 2;
          break;
        }

        return context$1$0.abrupt("return");

      case 2:
        _iterator2 = s, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);

      case 3:
        if (!_isArray2) {
          context$1$0.next = 9;
          break;
        }

        if (!(_i2 >= _iterator2.length)) {
          context$1$0.next = 6;
          break;
        }

        return context$1$0.abrupt("break", 21);

      case 6:
        _ref2 = _iterator2[_i2++];
        context$1$0.next = 13;
        break;

      case 9:
        _i2 = _iterator2.next();

        if (!_i2.done) {
          context$1$0.next = 12;
          break;
        }

        return context$1$0.abrupt("break", 21);

      case 12:
        _ref2 = _i2.value;

      case 13:
        x = _ref2;

        if (!(n-- > 0)) {
          context$1$0.next = 19;
          break;
        }

        context$1$0.next = 17;
        return x;

      case 17:
        if (!(n <= 0)) {
          context$1$0.next = 19;
          break;
        }

        return context$1$0.abrupt("break", 21);

      case 19:
        context$1$0.next = 3;
        break;

      case 21:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[1], this);
}

function drop(n, s) {
  var i, _iterator3, _isArray3, _i3, _ref3, x;

  return _regeneratorRuntime.wrap(function drop$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!(n <= 0)) {
          context$1$0.next = 2;
          break;
        }

        return context$1$0.abrupt("return");

      case 2:
        i = 0;
        _iterator3 = s, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _getIterator(_iterator3);

      case 4:
        if (!_isArray3) {
          context$1$0.next = 10;
          break;
        }

        if (!(_i3 >= _iterator3.length)) {
          context$1$0.next = 7;
          break;
        }

        return context$1$0.abrupt("break", 23);

      case 7:
        _ref3 = _iterator3[_i3++];
        context$1$0.next = 14;
        break;

      case 10:
        _i3 = _iterator3.next();

        if (!_i3.done) {
          context$1$0.next = 13;
          break;
        }

        return context$1$0.abrupt("break", 23);

      case 13:
        _ref3 = _i3.value;

      case 14:
        x = _ref3;

        if (!(i >= n)) {
          context$1$0.next = 20;
          break;
        }

        context$1$0.next = 18;
        return x;

      case 18:
        context$1$0.next = 21;
        break;

      case 20:
        i++;

      case 21:
        context$1$0.next = 4;
        break;

      case 23:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[2], this);
}

function iterate(f, x) {
  var prev;
  return _regeneratorRuntime.wrap(function iterate$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return x;

      case 2:
        prev = x;

      case 3:
        if (!true) {
          context$1$0.next = 9;
          break;
        }

        prev = f(prev);
        context$1$0.next = 7;
        return prev;

      case 7:
        context$1$0.next = 3;
        break;

      case 9:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[3], this);
}

function map(f) {
  for (var _len = arguments.length, ss = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ss[_key - 1] = arguments[_key];
  }

  var _iterator4, _isArray4, _i4, _ref4, x, finished, nextItems, isDone, value, res;

  return _regeneratorRuntime.wrap(function map$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        value = function value(x) {
          return x.value;
        };

        isDone = function isDone(prevDone, _ref12) {
          var done = _ref12.done;

          return prevDone || done;
        };

        nextItems = function nextItems(s) {
          return s.next();
        };

        if (!(ss.length === 0)) {
          context$1$0.next = 5;
          break;
        }

        throw new Error("no sequences passed in.");

      case 5:
        if (!(ss.length === 1)) {
          context$1$0.next = 23;
          break;
        }

        _iterator4 = seq(ss[0]), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _getIterator(_iterator4);

      case 7:
        if (!_isArray4) {
          context$1$0.next = 13;
          break;
        }

        if (!(_i4 >= _iterator4.length)) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt("break", 22);

      case 10:
        _ref4 = _iterator4[_i4++];
        context$1$0.next = 17;
        break;

      case 13:
        _i4 = _iterator4.next();

        if (!_i4.done) {
          context$1$0.next = 16;
          break;
        }

        return context$1$0.abrupt("break", 22);

      case 16:
        _ref4 = _i4.value;

      case 17:
        x = _ref4;
        context$1$0.next = 20;
        return f(x);

      case 20:
        context$1$0.next = 7;
        break;

      case 22:
        return context$1$0.abrupt("return");

      case 23:

        ss = ss.map(seq);

        finished = false;

      case 25:
        if (finished) {
          context$1$0.next = 33;
          break;
        }

        res = ss.map(nextItems);

        finished = res.reduce(isDone, false);

        if (finished) {
          context$1$0.next = 31;
          break;
        }

        context$1$0.next = 31;
        return f.apply(undefined, _toConsumableArray(res.map(value)));

      case 31:
        context$1$0.next = 25;
        break;

      case 33:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[4], this);
}

function filter(pred, s) {
  var _iterator5, _isArray5, _i5, _ref5, x;

  return _regeneratorRuntime.wrap(function filter$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator5 = s, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _getIterator(_iterator5);

      case 1:
        if (!_isArray5) {
          context$1$0.next = 7;
          break;
        }

        if (!(_i5 >= _iterator5.length)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("break", 17);

      case 4:
        _ref5 = _iterator5[_i5++];
        context$1$0.next = 11;
        break;

      case 7:
        _i5 = _iterator5.next();

        if (!_i5.done) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt("break", 17);

      case 10:
        _ref5 = _i5.value;

      case 11:
        x = _ref5;

        if (!pred(x)) {
          context$1$0.next = 15;
          break;
        }

        context$1$0.next = 15;
        return x;

      case 15:
        context$1$0.next = 1;
        break;

      case 17:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[5], this);
}

function reduce(f, a) {
  var b = arguments[2] === undefined ? undefined : arguments[2];

  var s = seq(b === undefined ? a : b);
  var res = b === undefined ? s.next().value : a;
  for (var _iterator6 = s, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _getIterator(_iterator6);;) {
    var _ref6;

    if (_isArray6) {
      if (_i6 >= _iterator6.length) break;
      _ref6 = _iterator6[_i6++];
    } else {
      _i6 = _iterator6.next();
      if (_i6.done) break;
      _ref6 = _i6.value;
    }

    var x = _ref6;

    res = f(res, x);
  }
  return res;
}

function concat() {
  for (var _len2 = arguments.length, ss = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    ss[_key2] = arguments[_key2];
  }

  var _iterator7, _isArray7, _i7, _ref7, s, _iterator8, _isArray8, _i8, _ref8, x;

  return _regeneratorRuntime.wrap(function concat$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator7 = ss, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _getIterator(_iterator7);

      case 1:
        if (!_isArray7) {
          context$1$0.next = 7;
          break;
        }

        if (!(_i7 >= _iterator7.length)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("break", 30);

      case 4:
        _ref7 = _iterator7[_i7++];
        context$1$0.next = 11;
        break;

      case 7:
        _i7 = _iterator7.next();

        if (!_i7.done) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt("break", 30);

      case 10:
        _ref7 = _i7.value;

      case 11:
        s = _ref7;
        _iterator8 = s, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _getIterator(_iterator8);

      case 13:
        if (!_isArray8) {
          context$1$0.next = 19;
          break;
        }

        if (!(_i8 >= _iterator8.length)) {
          context$1$0.next = 16;
          break;
        }

        return context$1$0.abrupt("break", 28);

      case 16:
        _ref8 = _iterator8[_i8++];
        context$1$0.next = 23;
        break;

      case 19:
        _i8 = _iterator8.next();

        if (!_i8.done) {
          context$1$0.next = 22;
          break;
        }

        return context$1$0.abrupt("break", 28);

      case 22:
        _ref8 = _i8.value;

      case 23:
        x = _ref8;
        context$1$0.next = 26;
        return x;

      case 26:
        context$1$0.next = 13;
        break;

      case 28:
        context$1$0.next = 1;
        break;

      case 30:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[6], this);
}

function mapcat(f) {
  for (var _len3 = arguments.length, ss = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    ss[_key3 - 1] = arguments[_key3];
  }

  return _regeneratorRuntime.wrap(function mapcat$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(concat.apply(undefined, _toConsumableArray(map.apply(undefined, [f].concat(ss)))), "t0", 1);

      case 1:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[7], this);
}

function partition(n, s) {
  var i, buffer, _iterator9, _isArray9, _i9, _ref9, x;

  return _regeneratorRuntime.wrap(function partition$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!(n <= 0)) {
          context$1$0.next = 2;
          break;
        }

        return context$1$0.abrupt("return");

      case 2:
        i = 0;
        buffer = new Array(n);
        _iterator9 = s, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _getIterator(_iterator9);

      case 5:
        if (!_isArray9) {
          context$1$0.next = 11;
          break;
        }

        if (!(_i9 >= _iterator9.length)) {
          context$1$0.next = 8;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 8:
        _ref9 = _iterator9[_i9++];
        context$1$0.next = 15;
        break;

      case 11:
        _i9 = _iterator9.next();

        if (!_i9.done) {
          context$1$0.next = 14;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 14:
        _ref9 = _i9.value;

      case 15:
        x = _ref9;

        if (!(i < n)) {
          context$1$0.next = 24;
          break;
        }

        buffer[i] = x;
        i++;

        if (!(i === n)) {
          context$1$0.next = 24;
          break;
        }

        context$1$0.next = 22;
        return buffer;

      case 22:
        i = 0;
        buffer = new Array(n);

      case 24:
        context$1$0.next = 5;
        break;

      case 26:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[8], this);
}

function partitionAll(n, s) {
  var i, buffer, _iterator10, _isArray10, _i10, _ref10, x;

  return _regeneratorRuntime.wrap(function partitionAll$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!(n <= 0)) {
          context$1$0.next = 2;
          break;
        }

        return context$1$0.abrupt("return");

      case 2:
        i = 0;
        buffer = new Array(n);
        _iterator10 = s, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _getIterator(_iterator10);

      case 5:
        if (!_isArray10) {
          context$1$0.next = 11;
          break;
        }

        if (!(_i10 >= _iterator10.length)) {
          context$1$0.next = 8;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 8:
        _ref10 = _iterator10[_i10++];
        context$1$0.next = 15;
        break;

      case 11:
        _i10 = _iterator10.next();

        if (!_i10.done) {
          context$1$0.next = 14;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 14:
        _ref10 = _i10.value;

      case 15:
        x = _ref10;

        if (!(i < n)) {
          context$1$0.next = 24;
          break;
        }

        buffer[i] = x;
        i++;

        if (!(i === n)) {
          context$1$0.next = 24;
          break;
        }

        context$1$0.next = 22;
        return buffer;

      case 22:
        i = 0;
        buffer = new Array(n);

      case 24:
        context$1$0.next = 5;
        break;

      case 26:
        if (!(i > 0)) {
          context$1$0.next = 30;
          break;
        }

        buffer.length = i;
        context$1$0.next = 30;
        return buffer;

      case 30:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[9], this);
}

function interleave() {
  for (var _len4 = arguments.length, ss = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    ss[_key4] = arguments[_key4];
  }

  var finished, nextItems, isDone, res, _iterator11, _isArray11, _i11, _ref11, x;

  return _regeneratorRuntime.wrap(function interleave$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        isDone = function isDone(prevDone, _ref13) {
          var done = _ref13.done;

          return prevDone || done;
        };

        nextItems = function nextItems(s) {
          return s.next();
        };

        if (!(ss.length === 0)) {
          context$1$0.next = 4;
          break;
        }

        throw new Error("no sequences passed in.");

      case 4:

        ss = ss.map(seq);

        finished = false;

      case 6:
        if (finished) {
          context$1$0.next = 28;
          break;
        }

        res = ss.map(nextItems);

        finished = res.reduce(isDone, false);

        if (finished) {
          context$1$0.next = 26;
          break;
        }

        _iterator11 = res, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _getIterator(_iterator11);

      case 11:
        if (!_isArray11) {
          context$1$0.next = 17;
          break;
        }

        if (!(_i11 >= _iterator11.length)) {
          context$1$0.next = 14;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 14:
        _ref11 = _iterator11[_i11++];
        context$1$0.next = 21;
        break;

      case 17:
        _i11 = _iterator11.next();

        if (!_i11.done) {
          context$1$0.next = 20;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 20:
        _ref11 = _i11.value;

      case 21:
        x = _ref11.value;
        context$1$0.next = 24;
        return x;

      case 24:
        context$1$0.next = 11;
        break;

      case 26:
        context$1$0.next = 6;
        break;

      case 28:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[10], this);
}

function splitAt(n, s) {
  s = seq(s);
  return [_Array$from(take(n, s)), s];
}

// yield and reset if a partition of n is made.
// yield and reset if a partition of n is made.