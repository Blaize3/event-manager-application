'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = parseInt(process.env.PORT, 10) || 8080;

app.use((0, _morgan2.default)('dev'));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

(0, _index2.default)(app);

app.use(function (request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, request, response) {
  response.status(err.status || 500);
  response.send({
    message: err.message,
    error: request.app.get('env') === 'development' ? err : {}
  });
});

// app.get('*', (request, response) => {
//   response.status(404).send({
//     message: 'Not Found'
//   });
// });

app.set('port', port);

var server = _http2.default.createServer(app);
server.listen(port);

exports.default = app;