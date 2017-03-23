require('babel-register');
require('babel-polyfill');

if (process.env.NODE_ENV === 'development') {
  require('./config/server/serverDev');
} else {
  require('./config/server/serverProd');
}
