"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _databaseMysql = _interopRequireDefault(require("../database-mysql"));

var _encrypt = _interopRequireDefault(require("../libs/encrypt"));

const Strategy = _passportLocal.default.Strategy;

_passport.default.use('local.signin', new Strategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, username, password, done) {
    var rows, user, validPassword;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rows = _databaseMysql.default.query('SELECT * FROM users WHERE username = ?', [username]);

          if (!(rows.length > 0)) {
            _context.next = 9;
            break;
          }

          user = rows[0];
          _context.next = 5;
          return _encrypt.default.cryptCompare(password, user.password);

        case 5:
          validPassword = _context.sent;

          if (validPassword) {
            done(null, user, req.flash('success', "Welcome ".concat(user.username)));
          } else {
            done(null, false, req.flash('message', 'Incorrect password'));
          }

          _context.next = 10;
          break;

        case 9:
          return _context.abrupt("return", done(null, false, req.flash('message', 'The username does not exists')));

        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()));

_passport.default.use('local.signup', new Strategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, username, password, done) {
    var _req$body, firstname, lastname, newUser, result;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname;
          newUser = {
            username,
            password,
            fullname: "".concat(firstname, " ").concat(lastname)
          };
          _context2.next = 4;
          return _encrypt.default.cryptPassword(password);

        case 4:
          newUser.password = _context2.sent;
          _context2.next = 7;
          return _databaseMysql.default.query('INSERT INTO users SET ?', [newUser]);

        case 7:
          result = _context2.sent;
          newUser.id = result.insertId;
          return _context2.abrupt("return", done(null, newUser));

        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}()));

_passport.default.serializeUser((user, done) => {
  done(null, user.id);
});

_passport.default.deserializeUser( /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(id, done) {
    var rows;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _databaseMysql.default.query('SELECT * FROM users WHERE id = ?', [id]);

        case 2:
          rows = _context3.sent;
          done(null, rows[0]);

        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));

  return function (_x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}());