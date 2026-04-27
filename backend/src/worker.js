import { getFromQueue } from './services/queueService.js';
import { callAI } from './services/aiService.js';
import { getRelevantSchemes } from './services/ragService.js';
import { saveCase } from './services/dbService.js';

const POLL_INTERVAL_MS = 5000;

async function processJob(job) {
  const { notes } = job;
  console.log('[Worker] Processing job:', notes?.slice(0, 60));
  const schemes = await getRelevantSchemes(notes);
  const aiResponse = await callAI(notes, schemes);
  await saveCase(notes, aiResponse);
  console.log('[Worker] Job done. Risk:', aiResponse.risk ?? aiResponse.status);
}

async function runWorker() {
  console.log('[Worker] Started, polling every', POLL_INTERVAL_MS / 1000, 'seconds...');
  while (true) {
    try {
      const job = await getFromQueue();
      if (job) {
        await processJob(job);
      }
    } catch (err) {
      console.error('[Worker] Error processing job:', err.message);
    }
    await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL_MS));
  }
}

export { runWorker };
