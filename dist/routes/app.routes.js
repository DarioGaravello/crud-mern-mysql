"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var app = _interopRequireWildcard(require("../controllers/app.controllers"));

const router = (0, _express.Router)();
router.get('/todo', app.getTodos);
router.get('/todo/:id', app.getTodoById);
router.post('/todo', app.setTodos);
router.post('/todo/:id/edit', app.updateTodo);
router.post('/todo/:id/delete', app.deleteTodo);
var _default = router;
exports.default = _default;