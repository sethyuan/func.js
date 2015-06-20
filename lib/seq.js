"use strict";

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

function seq(arr) {
  var _iterator, _isArray, _i, _ref, x;

  return _regeneratorRuntime.wrap(function seq$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);

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

function take(n, generator) {
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
        _iterator2 = generator, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);

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

function drop(n, generator) {
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
        _iterator3 = generator, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _getIterator(_iterator3);

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

function map(f, generator) {
  var _iterator4, _isArray4, _i4, _ref4, x;

  return _regeneratorRuntime.wrap(function map$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator4 = generator, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _getIterator(_iterator4);

      case 1:
        if (!_isArray4) {
          context$1$0.next = 7;
          break;
        }

        if (!(_i4 >= _iterator4.length)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("break", 16);

      case 4:
        _ref4 = _iterator4[_i4++];
        context$1$0.next = 11;
        break;

      case 7:
        _i4 = _iterator4.next();

        if (!_i4.done) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt("break", 16);

      case 10:
        _ref4 = _i4.value;

      case 11:
        x = _ref4;
        context$1$0.next = 14;
        return f(x);

      case 14:
        context$1$0.next = 1;
        break;

      case 16:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[4], this);
}

function filter(pred, generator) {
  var _iterator5, _isArray5, _i5, _ref5, x;

  return _regeneratorRuntime.wrap(function filter$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator5 = generator, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _getIterator(_iterator5);

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

  var generator = b === undefined ? a : b;
  var res = b === undefined ? generator.next().value : a;
  for (var _iterator6 = generator, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _getIterator(_iterator6);;) {
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
  for (var _len = arguments.length, generators = Array(_len), _key = 0; _key < _len; _key++) {
    generators[_key] = arguments[_key];
  }

  var _iterator7, _isArray7, _i7, _ref7, gen, _iterator8, _isArray8, _i8, _ref8, x;

  return _regeneratorRuntime.wrap(function concat$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator7 = generators, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _getIterator(_iterator7);

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
        gen = _ref7;
        _iterator8 = gen, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _getIterator(_iterator8);

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

function mapcat(f, generator) {
  var _iterator9, _isArray9, _i9, _ref9, x, _iterator10, _isArray10, _i10, _ref10, y;

  return _regeneratorRuntime.wrap(function mapcat$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iterator9 = generator, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _getIterator(_iterator9);

      case 1:
        if (!_isArray9) {
          context$1$0.next = 7;
          break;
        }

        if (!(_i9 >= _iterator9.length)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("break", 30);

      case 4:
        _ref9 = _iterator9[_i9++];
        context$1$0.next = 11;
        break;

      case 7:
        _i9 = _iterator9.next();

        if (!_i9.done) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt("break", 30);

      case 10:
        _ref9 = _i9.value;

      case 11:
        x = _ref9;
        _iterator10 = f(x), _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _getIterator(_iterator10);

      case 13:
        if (!_isArray10) {
          context$1$0.next = 19;
          break;
        }

        if (!(_i10 >= _iterator10.length)) {
          context$1$0.next = 16;
          break;
        }

        return context$1$0.abrupt("break", 28);

      case 16:
        _ref10 = _iterator10[_i10++];
        context$1$0.next = 23;
        break;

      case 19:
        _i10 = _iterator10.next();

        if (!_i10.done) {
          context$1$0.next = 22;
          break;
        }

        return context$1$0.abrupt("break", 28);

      case 22:
        _ref10 = _i10.value;

      case 23:
        y = _ref10;
        context$1$0.next = 26;
        return y;

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
  }, marked0$0[7], this);
}

function partition(n, generator) {
  var i, buffer, _iterator11, _isArray11, _i11, _ref11, x;

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
        _iterator11 = generator, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _getIterator(_iterator11);

      case 5:
        if (!_isArray11) {
          context$1$0.next = 11;
          break;
        }

        if (!(_i11 >= _iterator11.length)) {
          context$1$0.next = 8;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 8:
        _ref11 = _iterator11[_i11++];
        context$1$0.next = 15;
        break;

      case 11:
        _i11 = _iterator11.next();

        if (!_i11.done) {
          context$1$0.next = 14;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 14:
        _ref11 = _i11.value;

      case 15:
        x = _ref11;

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

function partitionAll(n, generator) {
  var i, buffer, _iterator12, _isArray12, _i12, _ref12, x;

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
        _iterator12 = generator, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _getIterator(_iterator12);

      case 5:
        if (!_isArray12) {
          context$1$0.next = 11;
          break;
        }

        if (!(_i12 >= _iterator12.length)) {
          context$1$0.next = 8;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 8:
        _ref12 = _iterator12[_i12++];
        context$1$0.next = 15;
        break;

      case 11:
        _i12 = _iterator12.next();

        if (!_i12.done) {
          context$1$0.next = 14;
          break;
        }

        return context$1$0.abrupt("break", 26);

      case 14:
        _ref12 = _i12.value;

      case 15:
        x = _ref12;

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
  for (var _len2 = arguments.length, generators = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    generators[_key2] = arguments[_key2];
  }

  var done, res, _iterator13, _isArray13, _i13, _ref13, x;

  return _regeneratorRuntime.wrap(function interleave$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!(generators.length === 0)) {
          context$1$0.next = 2;
          break;
        }

        throw new Error("no generators passed in.");

      case 2:
        done = false;

      case 3:
        if (done) {
          context$1$0.next = 25;
          break;
        }

        res = generators.map(function (gen) {
          return gen.next();
        });

        done = res.reduce(function (prevDone, _ref14) {
          var done = _ref14.done;
          return prevDone || done;
        }, false);

        if (done) {
          context$1$0.next = 23;
          break;
        }

        _iterator13 = res, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _getIterator(_iterator13);

      case 8:
        if (!_isArray13) {
          context$1$0.next = 14;
          break;
        }

        if (!(_i13 >= _iterator13.length)) {
          context$1$0.next = 11;
          break;
        }

        return context$1$0.abrupt("break", 23);

      case 11:
        _ref13 = _iterator13[_i13++];
        context$1$0.next = 18;
        break;

      case 14:
        _i13 = _iterator13.next();

        if (!_i13.done) {
          context$1$0.next = 17;
          break;
        }

        return context$1$0.abrupt("break", 23);

      case 17:
        _ref13 = _i13.value;

      case 18:
        x = _ref13.value;
        context$1$0.next = 21;
        return x;

      case 21:
        context$1$0.next = 8;
        break;

      case 23:
        context$1$0.next = 3;
        break;

      case 25:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[10], this);
}

function splitAt(n, generator) {
  return [_Array$from(take(n, generator)), generator];
}

// yield and reset if a partition of n is made.
// yield and reset if a partition of n is made.