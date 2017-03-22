// main starting point for app
import Express from 'express';
import path from 'path';

// Webpack Requirements
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../config/webpack/webpack.dev.config';
import serverConfig from '../../config/serverConfig';

// initialize the express app
const app = new Express();

// webpack development setup
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
}));
app.use(webpackHotMiddleware(compiler));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});


// start app
app.listen(serverConfig.port, (err) => {
  if (!err) {
    console.log(`Server listening on: ${serverConfig.port}!`); // eslint-disable-line
  }
});

export default app;
