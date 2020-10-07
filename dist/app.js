"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _expressMysqlSession = _interopRequireDefault(require("express-mysql-session"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _connectFlash = _interopRequireDefault(require("connect-flash"));

var _passport = _interopRequireDefault(require("passport"));

var _app = _interopRequireDefault(require("./routes/app.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _keys = require("./keys");

require("./database");

const app = (0, _express.default)(); //Middleware

app.use((0, _expressSession.default)({
  secret: 'daromysqlcount',
  resave: false,
  saveUninitialized: false,
  store: new _expressMysqlSession.default(_keys.database)
}));
app.use((0, _connectFlash.default)());
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)());
app.use(_passport.default.initialize());
app.use(_passport.default.session()); //Global variables

app.use((req, res, next) => {
  app.locals.success = req.flash('success');
  app.locals.message = req.flash('message');
  app.locals.user = req.user;
  next();
}); //Routes

app.use('/api', _app.default);
app.use('/', _auth.default); //Static files

app.use(_express.default.static(_path.default.resolve(__dirname, '../../dist')));
app.use('*', (req, res) => {
  res.sendFile(_path.default.join(__dirname, '../../dist/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
var _default = app;
exports.default = _default;