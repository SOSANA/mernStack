import Express from 'express';
import path from 'path';
import colors from 'colors';
import expressMiddlewares from './middlewares';
import serverConfig from './serverConfig';

const app = new Express();

expressMiddlewares(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

app.listen(serverConfig.DEV_PORT, (err) => {
  if (!err) {
    console.log(colors.rainbow(`Server listening on: ${ serverConfig.DEV_PORT }!`)); // eslint-disable-line
  }
});

export default app;
