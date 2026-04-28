import { getFromQueue, requeueJob, pushToFailedQueue } from './services/queueService.js';
import { callAI } from './services/aiService.js';
import { getRelevantSchemes } from './services/ragService.js';
import { updateCase } from './services/dbService.js';
import logger from './utils/logger.js';

const POLL_INTERVAL_MS = 5000;
const MAX_RETRIES = 3;

async function processJob(data) {
  const { notes, userId, caseId, retry = 0 } = data;

  logger.info('[Worker] Processing job', { caseId, retry });

  try {
    const schemes = await getRelevantSchemes(notes);
    const result = await callAI(notes, schemes);
    await updateCase(caseId, result);
    logger.info('[Worker] Job completed', { caseId });

  } catch (err) {
    logger.error('[Worker] Job failed', { caseId, retry, message: err.message });

    if (retry < MAX_RETRIES) {
      logger.info(`[Worker] Retrying job (attempt ${retry + 1}/${MAX_RETRIES})`, { caseId });
      await requeueJob({ ...data, retry: retry + 1 });
    } else {
      logger.error('[Worker] Max retries reached, moving to failed queue', { caseId });
      await pushToFailedQueue(data);
      await updateCase(caseId, { status: 'failed', error: err.message });
    }
  }
}

async function runWorker() {
  logger.info('[Worker] Started, polling every', { interval: `${POLL_INTERVAL_MS / 1000}s` });

  while (true) {
    try {
      const raw = await getFromQueue();
      if (raw) {
        const data = typeof raw === 'string' ? JSON.parse(raw) : raw;
        await processJob(data);
      }
    } catch (err) {
      logger.error('[Worker] Unexpected error in poll loop', { message: err.message });
    }
    await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL_MS));
  }
}

export { runWorker };

