"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var auth = _interopRequireWildcard(require("../controllers/auth.controllers"));

const router = (0, _express.Router)();
router.post('/signup', auth.SignUp);
router.get('/logout', auth.Logout);
router.post('/signin', auth.SignIn);
var _default = router;
exports.default = _default;