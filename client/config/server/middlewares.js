import path from 'path';
import compression from 'compression';
import logger from 'morgan';
import webpack from 'webpack';
import favicon from 'serve-favicon';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.dev.config';
import serverConfig from './serverConfig';

function useMiddleware(app) {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    app.use(compression());
    app.use(favicon(path.join(__dirname, '../public/img/favicon.ico')));
  }

  app.use(logger('dev'));
  const compiler = webpack(webpackConfig);
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

  return app;
}

export default { useMiddleware };


