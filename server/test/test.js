import api from 'supertest';
import { expect } from 'chai';
import app from '../app';
// import HandleUserRequests from '../controllers/usercontroller';

describe('API endpoint Test for Event Manager', () => {
  describe('Handle valid case', () => {
  //   it('should create a user account', (done) => {
  //     api(app).post('/api/v1/users')
  //       .set('Accept', 'application/json')
  //       .send({
  //         email: 'huekkjohn@trailblazer.com',
  //         firstname: 'eeeeeeJohnson',
  //         lastname: 'eeeJoel',
  //         username: 'eeej2john',
  //         password: 'oghogho@1',
  //         isAdmin: false,
  //       })
  //       .expect('Content-Type', /json/)
  //       .expect(200)
  //       .end((error, response) => {
  //         expect(response.status).to.equal(200);
  //         if (error) return done(error);
  //         done();
  //       });
  //   });
  // });

    describe('Handle Invalid case', () => {
      it('should fail to create a user account', (done) => {
        api(app).post('/api/v1/users')
          .set('Accept', 'application/json')
          .send({
            email: 'johntrail',
            firstname: 'John',
            lastname: 'Joel',
            username: 'j2john',
            password: 'oghogho@1',
            isAdmin: 'false',
          })
          .expect('Content-Type', /json/)
          .expect(400)
          .end((error, response) => {
            console.log(response.body);
            expect(response.status).to.equal(400);
            if (error) return done(error);
            done();
          });
      });
    });
  });

// sign in

// describe('API endpoint Test for Event Manager', () => {
//   describe('Handle valid case', () => {
//     it('should should into an account', (done) => {
//       api(app).post('/api/v1/users/login')
//         .set('Accept', 'application/json')
//         .send({
//           email: 'akugbeode@yahoo.com',
//           password: 'oghogho@1'
//         })
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end((error, response) => {
//           expect(response.status).to.equal(200);
//           if (error) return done(error);
//           done();
//         });
//     });
//   });

//   describe('Handle Invalid case', () => {
//     it('should fail to login into an account', (done) => {
//       api(app).post('/api/v1/users/login')
//         .set('Accept', 'application/json')
//         .send({
//           email: 'akugbeode@yahoo.com',
//           password: 'ogho'
//         })
//         .expect('Content-Type', /json/)
//         .expect(401)
//         .end((error, response) => {
//           console.log(response.body);
//           expect(response.status).to.equal(400);
//           if (error) return done(error);
//           done();
//         });
//     });
//   });
});
