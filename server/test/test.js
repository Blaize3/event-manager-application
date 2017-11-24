import request from 'supertest';
import { expect, assert } from 'chai';
import app from '../app';

let adminUserToken = '';
let ordinaryUserToken = '';

describe('Events Manager', () => {
  it('Not Found', (done) => {
    request(app)
      .get('/api')
      .expect(404)
      .then((res) => {
        console.log('===========================>', res.body.message);
        assert.deepEqual(res.body.message, 'Not Found');
      });
    done();
  });

  it('Not Found', (done) => {
    request(app)
      .get('/dat')
      .expect(404)
      .then((res) => {
        assert.deepEqual(res.body.message, 'Not Found');
      });
    done();
  });

  it('Account Created', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        email: 'akugbeode@gmail.com',
        username: 'mazawani',
        password: 'password',
        firstname: 'Duff',
        lastname: 'Dani',
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('Account Created as admin', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        email: 'abc@yahoo.com',
        username: 'ighode',
        password: 'passme',
        firstname: 'Ighayere',
        lastname: 'Ode',
        isAdmin: false
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('Sign in successful as Admin', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'akugbeode@gmail.com',
        password: 'password',
      })
      .end((err, res) => {
        adminUserToken = res.body.token;
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('Sign in successful', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'abc@yahoo.com',
        password: 'passme',
      })
      .end((err, res) => {
        ordinaryUserToken = res.body.token;
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('Create Center', (done) => {
    const centerObject = {
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
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', adminUserToken)
      .send(centerObject)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('Fail Create Center', (done) => {
    const centerObject = {
      name: 'Dome2',
      address: '113 VGC',
      location: 'Lagos',
      center_type: 'Park',
      isAvailable: 'true',
      capacity: 1000,
      usage_fee: 50000.00,
      added_by: 'Ode Akugbe',
      description: 'this is the center'
    };
    request(app)
      .post('/api/v1/centers')
      .set('x-access-token', ordinaryUserToken)
      .send(centerObject)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });

  // it('Failed Modify Create Center', (done) => {
  //   const centerObject = {
  //     id: 1,
  //     name: 'Dome2',
  //     address: '113 VGC',
  //     location: 'Lagos',
  //     center_type: 'Park',
  //     isAvailable: 'true',
  //     capacity: 1000,
  //     usage_fee: 50000.00,
  //     added_by: 'Ode Akugbe',
  //     description: 'this is the center'
  //   };
  //   request(app)
  //     .put('/api/v1/centers/1')
  //     .set('x-access-token', ordinaryUserToken)
  //     .send(centerObject)
  //     .end((err, res) => {
  //       console.log('====================================================>', res.body);
  //       expect(res.status).to.equal(500);
  //       done();
  //     });
  // });

  // it('Failed Modify Create Center', (done) => {
  //   const centerObject = {
  //     id: 4,
  //     name: 'Dome2',
  //     address: '113 VGC',
  //     location: 'Lagos',
  //     center_type: 'Park',
  //     isAvailable: 'true',
  //     capacity: 1000,
  //     usage_fee: 50000.00,
  //     added_by: 'Ode Akugbe',
  //     description: 'this is the center'
  //   };
  //   request(app)
  //     .put('/api/v1/centers/4')
  //     .set('x-access-token', ordinaryUserToken)
  //     .send(centerObject)
  //     .end((err, res) => {
  //       console.log('====================================================>', res.body);
  //       expect(res.status).to.equal(500);
  //       done();
  //     });
  // });

  it('Fail Account Created with existing email', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        email: 'akugbeode@gmail.com',
        username: 'thisan',
        password: 'password',
        firstname: 'Duff',
        lastname: 'Dani',
        isAdmin: true
      })
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done();
      });
  });

  it('Fail Account Created with existing username', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        email: 'trailblaizer34@gmail.com',
        username: 'ighode',
        password: 'thisisme',
        firstname: 'Ighayere',
        lastname: 'Ode',
        isAdmin: false
      })
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done();
      });
  });
});

export default app;
