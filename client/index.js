require('babel-register');
require('babel-polyfill');

if (process.env.NODE_ENV === 'development') {
  import './modules/server/serverDev';
} else {
  import './modules/server/serverProd';
}
