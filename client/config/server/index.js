import colors from 'colors';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  require('./serverProd');
}

console.log('I am running in development'.blue); // eslint-disable-line no-console
require('./serverDev');
