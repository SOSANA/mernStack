import Express from 'express';
import path from 'path';
import { port } from './serverConfig';
import expressMiddlewares from './middlewares';

const app = new Express();

expressMiddlewares(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server listening on: ${ port }!`); // eslint-disable-line
  }
});

export default app;
