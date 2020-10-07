"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

_app.default.set('port', process.env.PORT || 4000);

function main() {
  _app.default.listen(_app.default.get('port'), () => {
    console.log("Server on port ".concat(_app.default.get('port')));
  });
}

main();