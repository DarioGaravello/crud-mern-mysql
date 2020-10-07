"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

const encrypt = {};

encrypt.cryptPassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(password) {
    var salt, hash;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _bcryptjs.default.genSalt(10);

        case 2:
          salt = _context.sent;
          _context.next = 5;
          return _bcryptjs.default.hash(password, salt);

        case 5:
          hash = _context.sent;
          return _context.abrupt("return", hash);

        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

encrypt.cryptCompare = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(password, comparePassword) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _bcryptjs.default.compare(password, comparePassword);

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.error(err);

        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = encrypt;
exports.default = _default;