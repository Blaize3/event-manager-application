import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import router from './routes/index';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use((request, response, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, request, response) => {
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

const server = http.createServer(app);
server.listen(port);

export default app;
