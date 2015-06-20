"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.take = take;
exports.drop = drop;
exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.concat = concat;
exports.mapcat = mapcat;
exports.partition = partition;
exports.partitionAll = partitionAll;
exports.interleave = interleave;
exports.splitAt = splitAt;

var _func = require("./func");

function take(n, arr) {
  return arr.slice(0, n);
}

function drop(n, arr) {
  return arr.slice(n);
}

function map(f, arr) {
  return arr.map(f);
}

function filter(pred, arr) {
  return arr.filter(pred);
}

function reduce(f, a) {
  var b = arguments[2] === undefined ? undefined : arguments[2];

  var arr = b === undefined ? a : b;
  if (b === undefined) {
    return arr.reduce(f);
  } else {
    return arr.reduce(f, a);
  }
}

function concat() {
  for (var _len = arguments.length, arrs = Array(_len), _key = 0; _key < _len; _key++) {
    arrs[_key] = arguments[_key];
  }

  // Functional implementation:
  // return arrs.reduce((a, b) => a.concat(b));

  var len = 0;
  for (var _i3 = 0; _i3 < arrs.length; _i3++) {
    len += arrs[_i3].length;
  }

  var res = new Array(len);

  var i = 0;
  for (var _iterator = arrs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var arr = _ref;

    for (var _iterator2 = arr, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
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

      res[i++] = x;
    }
  }

  return res;
}

function mapcat(f, arr) {
  return concat.apply(undefined, _toConsumableArray(arr.map(f)));
}

function partition(n, arr) {
  var groupCount = arr.length / n << 0;
  var groups = new Array(groupCount);
  for (var i = 0; i < groupCount; i++) {
    groups[i] = [];
  }

  for (var i = 0, g = 0; i < n * groupCount; i++, g = i / n << 0) {
    groups[g][i % n] = arr[i];
  }

  return groups;
}

function partitionAll(n, arr) {
  var groupCount = arr.length / n << 0;
  var groups = new Array(groupCount);
  for (var i = 0; i < groupCount; i++) {
    groups[i] = [];
  }

  for (var i = 0, g = 0; i < n * groupCount; i++, g = i / n << 0) {
    groups[g][i % n] = arr[i];
  }

  if (arr.length % n > 0) groups.push(arr.slice(n * groupCount));

  return groups;
}

function interleave() {
  for (var _len2 = arguments.length, arrs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arrs[_key2] = arguments[_key2];
  }

  var n = arrs.length;
  if (n === 0) throw new Error("no array passed in.");

  var shortestLen = (0, _func.min)(arrs, function (arr) {
    return arr.length;
  });
  var res = new Array(shortestLen * n);
  for (var i = 0; i < res.length; i++) {
    res[i] = arrs[i % n][i / n << 0];
  }
  return res;
}

function splitAt(n, arr) {
  return [arr.slice(0, n), arr.slice(n)];
}