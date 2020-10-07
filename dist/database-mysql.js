"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _util = require("util");

var _keys = require("./keys");

const pool = _mysql.default.createPool(_keys.database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_ERROR') {
      console.error('DATABASE_CONNECTION WAS CLOSED');
    }

    if (err.code === 'ERR_CON_COUNT_ERROR') {
      console.error('DATABASE HAS TO MANU CONNECTIONS');
    }

    if (err.code === 'ECONNREFUSED') {
      console.error('DATABASE CONNECTION WAS REFUSED');
    }
  }

  if (connection) connection.release();
  console.log('DB sql is connected');
  return;
}); //Pool query Promisify

pool.query = (0, _util.promisify)(pool.query);
var _default = pool;
exports.default = _default;