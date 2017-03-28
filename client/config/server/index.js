import colors from 'colors';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  console.log('I am running in production'.green); // eslint-disable-line no-console
  require('./serverProd');
}

console.log('I am running in development'.orange); // eslint-disable-line no-console
require('./serverDev');
