"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

const URI = 'mongodb://localhost/stack-mern';

_mongoose.default.connect(URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true
}).then(db => console.log('DB is connected')).catch(err => console.error(err));

var _default = _mongoose.default;
exports.default = _default;