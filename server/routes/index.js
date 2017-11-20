import HandleUserRequests from '../controllers/usercontroller';

export default (app) => {
  app.get('/', (request, response) => {
    response.status(200).send({
      message: 'Welcome to more recipes!!!'
    });
  });

  app.post('/api/v1/users/signup', HandleUserRequests.signup);

  app.post('/api/v1/users/signin', HandleUserRequests.signin);
};
