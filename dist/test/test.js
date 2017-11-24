'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _chai = require('chai');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminUserToken = '';
var ordinaryUserToken = '';

describe('Events Manager', function () {
  it('Not Found', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api').expect(404).then(function (res) {
      _chai.assert.deepEqual(res.body.message, 'Not Found');
    });
    done();
  });

  it('Not Found', function (done) {
    (0, _supertest2.default)(_app2.default).get('/dat').expect(404).then(function (res) {
      _chai.assert.deepEqual(res.body.message, 'Not Found');
    });
    done();
  });

  it('Account Created', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users').send({
      email: 'akugbeode@gmail.com',
      username: 'mazawani',
      password: 'password',
      firstname: 'Duff',
      lastname: 'Dani',
      isAdmin: true,
      role: 'user'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      done();
    });
  });

  it('Account Created as admin', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users').send({
      email: 'abc@yahoo.com',
      username: 'ighode',
      password: 'passme',
      firstname: 'Ighayere',
      lastname: 'Ode',
      isAdmin: false,
      role: 'user'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      done();
    });
  });

  it('Sign in successful as Admin', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users/login').send({
      email: 'akugbeode@gmail.com',
      password: 'password'
    }).end(function (err, res) {
      adminUserToken = res.body.token;
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('Sign in successful', function (done) {
    (0, _supertest2.default)(_app2.default).post('/api/v1/users/login').send({
      email: 'abc@yahoo.com',
      password: 'passme'
    }).end(function (err, res) {
      ordinaryUserToken = res.body.token;
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('Create Center', function (done) {
    var centerObject = {
      name: 'Dome',
      address: '112 Ikoyi',
      location: 'Lagos',
      center_type: 'Garden',
      isAvailable: 'true',
      capacity: 1000,
      usage_fee: 50000.00,
      added_by: 'Ode Akugbe',
      description: 'this is the center'
    };
    (0, _supertest2.default)(_app2.default).post('/api/v1/centers').set('x-access-token', adminUserToken).send(centerObject).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      (0, _chai.expect)(res['Created Center']).to.be.a('object');
      done();
    });
  });

  it('Fail to Create Center', function (done) {
    var centerObject = {
      name: 'Dome',
      address: '',
      location: 'Lagos',
      center_type: 'Garden',
      isAvailable: '',
      capacity: 1000,
      usage_fee: 50000.00,
      added_by: 'Ode Akugbe',
      description: 'this is the center'
    };
    (0, _supertest2.default)(_app2.default).post('/api/v1/centers').set('x-access-token', adminUserToken).send(centerObject).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(400);
      done();
    });
  });

  it('Modify Center', function (done) {
    var centerObject = {
      id: 1,
      name: 'Dome',
      address: '112 Ikoyi',
      location: 'Lagos',
      center_type: 'Garden',
      isAvailable: 'true',
      capacity: 1000,
      usage_fee: 50000.00,
      added_by: 'Ode Akugbe happy',
      description: 'this is best the center'
    };
    (0, _supertest2.default)(_app2.default).post('/api/v1/centers/1').set('x-access-token', adminUserToken).send(centerObject).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(404);
      done();
    });
  });

  it('Get all centers', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/centers').set('Accept', 'application/json').set('x-access-token', adminUserToken).expect('Content-Type', /json/).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });

  it('Get all centers', function (done) {
    (0, _supertest2.default)(_app2.default).get('/api/v1/centers/1').set('Accept', 'application/json').set('x-access-token', adminUserToken).expect('Content-Type', /json/).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(200);
      done();
    });
  });
});

exports.default = _app2.default;