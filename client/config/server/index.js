if (process.env.NODE_ENV === 'development') {
  require('./serverDev');
} else {
  require('./serverProd');
}
