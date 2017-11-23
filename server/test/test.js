import request from 'supertest';
import { expect } from 'chai';
import app from '../app';
import HandleUserRequests from '../controllers/usercontroller';

describe('Testing API endpoint', () => {
  describe('Handling valid case', () => {
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
          .expect(200, done())
          .end((response) => {
            expect(response.body).to.be.a('object');
            expect(response.body.Status).to.equal('Account Creaation Successful');
          });
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
          .expect(200, done())
          .end((response) => {
            expect(response.body).to.be.a('object');
            expect(response.body.Status).to.equal('Account Creaation Successful');
          });
      });
    });
  });
});

