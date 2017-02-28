/**
 * - This is our settings for our server configurations and credentials
 * - For additional cors settings see https://github.com/Kubide/express-cors
 */

const devSettings = {
  MONGO_URL: 'mongodb://localhost:27017/mernStack',
  PORT: 8080,
  ROOT_URL: 'http://localhost:3000',
  secret: 'dkjrei8537kjhsdf74',
  fb: {
    id: '<update me later>',
    secret: '<update me later>',
  },
  github: '<update me later>',
  corsOptions: {
    allow: {
      origin: '*', // update this to your client ip address ex: localhost:3000
      methods: 'GET,PATCH,PUT,POST,DELETE,HEAD,OPTIONS',
      headers: 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override',
    },
    expose: {
      headers: null,
    },
    max: {
      age: null,
    },
    options(req, res, next) {
      if (req.method === 'OPTIONS') {
        res.status(200).end();
      } else {
        next();
      }
    },
    specials: {
      powered: null,
    },
  },
};

const prodSettings = {
  MONGO_URL: '<update me later>',
  PORT: 8000,
  ROOT_URL: '<update me later>',
  secret: '<update me later>',
};

// here we create a function that when passed the env checks which state the app is in
const checkEnv = (type) => {
  if (type === 'production') {
    return prodSettings;
  }

  return devSettings;
};

// pass our NODE_ENV to check
const env = checkEnv(process.env.NODE_ENV);

export default env;
