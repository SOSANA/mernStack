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

app.listen(serverConfig.PROD_PORT, (err) => {
  if (!err) {
    console.log(colors.green(`Server listening on: ${ serverConfig.PROD_PORT }!`)); // eslint-disable-line
  }
});

export default app;
