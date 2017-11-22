import request from 'supertest';
import { expect } from 'chai';
import app from '../app';
import HandleUserRequests from '../controllers/usercontroller';

describe('Testing API endpoint', () => {
  describe('Test Sign Up Route', () => {
    describe('Handling valid case', () => {
      it('Sign up a User', (done) => {
        const user = {
          email: 'grants@yahoo.com',
          firstname: 'Grant',
          lastname: 'Nwaigwe',
          username: 'glacos',
          password: 'grants@1',
          isAdmin: true,
        };
        request(app)
          .post('/api/v1/users')
          .send(user)
          .expect(200, done());
      });
    });

    describe('Handling Invalid case', () => {
      it('Sign up a User', (done) => {
        const user = {
          email: 'akugbeode@yahoo.com',
          firstname: 'Akugbe',
          lastname: 'Ode',
          username: 'blaize3',
          password: 'oghogho@1',
          isAdmin: true,
        };
        request(app)
          .post('/api/v1/users')
          .send(user)
          .expect(200, done());
      });
    });
  });
});

describe('', () => {
  describe('Test Sigin In Route', () => {
    describe('Handling valid case', () => {
      it('Sign in a User', (done) => {
        const user = {
          email: 'akugbeode@yahooo.com',
          password: 'oghogho@1'
        };
        request(app)
          .post('/api/v1/users/login')
          .send(user)
          .expect(200, done());
      });
    });


    describe('Handling Invalid case', () => {
      it('Sign in a User', (done) => {
        const user = {
          email: 'akugbeode@yahooo.com',
          password: 'oghogh'
        };
        request(app)
          .post('/api/v1/users/login')
          .send(user)
          .expect(401, done());
      });
    });
  });
});
