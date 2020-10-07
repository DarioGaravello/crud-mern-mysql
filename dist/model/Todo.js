"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const todoSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Todo', todoSchema);

exports.default = _default;