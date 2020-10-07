"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignIn = exports.Logout = exports.SignUp = void 0;

var _passport = _interopRequireDefault(require("passport"));

const SignUp = (req, res, next) => {
  _passport.default.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  })(req, res, next);
};

exports.SignUp = SignUp;

const Logout = (req, res) => {
  res.logOut();
  res.redirect('/');
};

exports.Logout = Logout;

const SignIn = (req, res, next) => {
  _passport.default.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  })(req, res, next);
};

exports.SignIn = SignIn;