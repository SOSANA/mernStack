// main starting point for app
import Express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'express-cors';
import config from './config/serverConfig'; // our server config
// import User from './modules/user/userRoutes';
// import Post from './modules/post/postRoutes';

// initialize the express app
const app = new Express();

// use es6 mongoose promise
mongoose.Promise = global.Promise;

// DB setup
mongoose.connect(config.MONGO_URL);
mongoose.connection
  .once('open', () => { console.log(`Connected to MongoDb: running on ${config.MONGO_URL}`); }) // eslint-disable-line no-console
  .on('error', (err) => {
    console.warn('error: Make sure Mongodb is running!', err); // eslint-disable-line no-console
  });

// app middleware setup
app.use(logger('dev'));
app.use(cors(config.corsOptions)); // passing in our ServerConfig cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api/v1', [User, Post]); // register our routes

// start app
app.listen(config.PORT, (err) => {
  if (!err) {
    console.log(`Server listening on PORT: ${config.PORT} \r\nClient listening on: ${config.ROOT_URL} `); // eslint-disable-line
  }
});

export default app;
