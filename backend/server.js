import 'dotenv/config';
import app from './src/app.js';
import { runWorker } from './src/worker.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Start background worker automatically
runWorker();