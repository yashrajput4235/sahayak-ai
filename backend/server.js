import 'dotenv/config';
import app from './src/app.js';
import { runWorker } from './src/worker.js';
import logger from './src/utils/logger.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server started`, { port: PORT });
});

// Start background worker automatically
runWorker();