import { APP_NAME, APP_PORT } from './config';
import { toTitleCase } from './domain/utils/text';
import router from './presentation/routers';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/', router);
app.use(express.json());

app.listen(APP_PORT, () => {
  const appName = APP_NAME.split('_').join(' ');
  console.log(`${toTitleCase(appName)} - Server Started on Port `, APP_PORT, '🔥');
});
