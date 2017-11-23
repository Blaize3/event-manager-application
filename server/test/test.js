import request from 'supertest';
import { expect } from 'chai';
import app from '../app';
import HandleUserRequests from '../controllers/usercontroller';

describe('Testing API endpoint', () => {
  describe('Test Sign Up Route', () => {
    describe('Handling valid case', () => {
      it('should sign up a user', (done) => {
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
      it('should fail to sign up a user', (done) => {
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
          .expect(400, done());
      });
    });
  });
});

describe('', () => {
  describe('Test Sigin In Route', () => {
    describe('Handling valid case', () => {
      it('should sign in a user', (done) => {
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

describe('', () => {
  describe('Create an event', () => {
    describe('Handling valid case', () => {
      it('should create an event', (done) => {
        const event = {
          userId: 1,
          centerId: 1,
          title: 'Derek\'s Wedding',
          organizer: 'esKimo Events',
          start_date: '2018-01-04',
          event_time: '12:00:00 am',
          end_date: '2018-01-04',
          privacy: 'public',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium! Sapiente magnam tempore porro, quis provident aperiam quas nulla mollitia nam, laborum dolorum quia eaque.',
        };
        request(app)
          .post('/api/v1/events')
          .send(event)
          .expect(200, done());
      });
    });
  });


  describe('Handling Invalid case', () => {
    it('should fail to create an event', (done) => {
      const event = {
        userId: '',
        centerId: 1,
        title: '',
        organizer: '',
        start_date: '2018-01-04',
        event_time: '12:00:00 am',
        end_date: '2018-01-04',
        privacy: 'public',
        description: ''
      };
      request(app)
        .post('/api/v1/events')
        .send(event)
        .expect(400, done());
    });
  });
});

