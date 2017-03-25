import Express from 'express';
import path from 'path';
import colors from 'colors';
import expressMiddlewares from './middlewares';
import { port } from './serverConfig';

const app = new Express();

expressMiddlewares.useMiddleware(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server listening on: ${ port }!`); // eslint-disable-line
  }
});

export default app;
