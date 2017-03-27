import path from 'path';
import compression from 'compression';
import logger from 'morgan';
import favicon from 'serve-favicon';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.dev.config';

const isProd = process.env.NODE_ENV === 'production';

function expressMiddlewares(app) {
  if (isProd) {
    app.use(compression());
    app.use(favicon(path.join(__dirname, '../../public/img/favicon.ico')));
  }

  app.use(logger('dev'));
  app.use(favicon(path.join(__dirname, '../../public/img/favicon.ico')));

  console.log('testing this'.red);
  const compiler = webpack(webpackConfig);
  console.log('testing this'.red);

  app.use(webpackDevMiddleware(compiler, {
    colors: true,
    chunks: true,
    'errors-only': true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}

export default expressMiddlewares;


