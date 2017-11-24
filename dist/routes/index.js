'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usercontroller = require('../controllers/usercontroller');

var _usercontroller2 = _interopRequireDefault(_usercontroller);

var _eventcontroller = require('../controllers/eventcontroller');

var _eventcontroller2 = _interopRequireDefault(_eventcontroller);

var _centercontroller = require('../controllers/centercontroller');

var _centercontroller2 = _interopRequireDefault(_centercontroller);

var _isauthenticated = require('../controllers/middleware/isauthenticated');

var _isauthenticated2 = _interopRequireDefault(_isauthenticated);

var _getEventMiddleware = require('../controllers/middleware/getEventMiddleware');

var _getEventMiddleware2 = _interopRequireDefault(_getEventMiddleware);

var _getCenterMiddleware = require('../controllers/middleware/getCenterMiddleware');

var _getCenterMiddleware2 = _interopRequireDefault(_getCenterMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.post('/api/v1/users', _usercontroller2.default.signup);

  app.post('/api/v1/users/login', _usercontroller2.default.signin);

  app.put('/api/v1/users/admin', _isauthenticated2.default.isAuthenticated, _usercontroller2.default.makeAdmin);

  app.post('/api/v1/events', _isauthenticated2.default.isAuthenticated, _eventcontroller2.default.createEvent);

  app.put('/api/v1/events/:eventId', _isauthenticated2.default.isAuthenticated, _getEventMiddleware2.default.getOneEvent, _eventcontroller2.default.editEvent);

  app.delete('/api/v1/events/:eventId', _isauthenticated2.default.isAuthenticated, _getEventMiddleware2.default.getOneEvent, _eventcontroller2.default.deleteEvent);

  app.post('/api/v1/centers', _isauthenticated2.default.isAuthenticated, _centercontroller2.default.addCenter);

  app.get('/api/v1/centers', _isauthenticated2.default.isAuthenticated, _centercontroller2.default.getAllCenters);

  app.get('/api/v1/centers/:centerId', _isauthenticated2.default.isAuthenticated, _centercontroller2.default.getACenter);

  app.put('/api/v1/centers/:centerId', _isauthenticated2.default.isAuthenticated, _getCenterMiddleware2.default.getOneEvent, _centercontroller2.default.getACenter);
};