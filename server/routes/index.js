import HandleUserRequests from '../controllers/usercontroller';
//import HandleEventRequest from '../controllers/eventcontroller';
//import HandleCenterRequest from '../controllers/centercontroller';

import checkUserAuthentication from '../controllers/middleware/isauthenticated';
import GetEvent from '../controllers/middleware/getEventMiddleware';
import GetCenter from '../controllers/middleware/getCenterMiddleware';


export default (app) => {
  app.post('/api/v1/users', HandleUserRequests.signup);

  app.post('/api/v1/users/login', HandleUserRequests.signin);

//   app.post('/api/v1/events', checkUserAuthentication.isAuthenticated, HandleEventRequest.createEvent);
  
//   app.put('/api/v1/events/:eventId', checkUserAuthentication.isAuthenticated, GetEvent.getOneEvent, HandleEventRequest.editEvent);

//   app.delete('/api/v1/events/:eventId', checkUserAuthentication.isAuthenticated, GetEvent.getOneEvent, HandleEventRequest.deleteEvent);

//   app.post('/api/v1/centers', checkUserAuthentication.isAuthenticated, HandleCenterRequest.addCenter);

//   app.get('/api/v1/centers', checkUserAuthentication.isAuthenticated, HandleCenterRequest.getAllCenters);

//   app.get('/api/v1/centers/:centerId', checkUserAuthentication.isAuthenticated, HandleCenterRequest.getACenter);

//   app.put('/api/v1/centers/:centerId', checkUserAuthentication.isAuthenticated, GetCenter.getOneEvent, HandleCenterRequest.getACenter);
};
