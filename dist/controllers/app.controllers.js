"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodo = exports.updateTodo = exports.setTodos = exports.getTodoById = exports.getTodos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Todo = _interopRequireDefault(require("../model/Todo"));

const getTodos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var tasks;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Todo.default.find();

        case 2:
          tasks = _context.sent;
          res.json(tasks);

        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function getTodos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTodos = getTodos;

const getTodoById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var todo;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _Todo.default.findById(req.params.id);

        case 2:
          todo = _context2.sent;
          res.json(todo);

        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));

  return function getTodoById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTodoById = getTodoById;

const setTodos = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, title, description, todo;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, description = _req$body.description;
          todo = new _Todo.default({
            title,
            description
          });
          _context3.next = 4;
          return todo.save();

        case 4:
          res.status(200);

        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));

  return function setTodos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.setTodos = setTodos;

const updateTodo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var todoEdit;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _Todo.default.findByIdAndUpdate(req.params.id, req.body);

        case 2:
          todoEdit = _context4.sent;
          res.status(204);

        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));

  return function updateTodo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateTodo = updateTodo;

const deleteTodo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(req, res) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _Todo.default.findByIdAndDelete(req.params.id);

        case 2:
          res.status(204);

        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));

  return function deleteTodo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTodo = deleteTodo;