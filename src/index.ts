import { logger } from '@utils/logger';
import { APP_NAME, APP_PORT } from './config';
import { toTitleCase } from './domain/utils/text';

logger.info('Initialize Application');

import app from './server';

app.listen(APP_PORT, () => {
  const appName = APP_NAME.split('_').join(' ');
  logger.info(`${toTitleCase(appName)} - Server Started on Port ${APP_PORT} 🔥`);
});
