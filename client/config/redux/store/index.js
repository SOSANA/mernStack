import colors from 'colors';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  console.log('Fetching redux production store'.green); // eslint-disable-line no-console
  require('./storeProd');
}

console.log('Fetching redux development store'.rainbow); // eslint-disable-line no-console
require('./storeDev');

