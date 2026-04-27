import { redis } from "./src/services/queueService.js";
import { getRelevantSchemes } from "./src/services/ragService.js";
import { callAI } from "./src/services/aiService.js";
import { updateCase } from "./src/services/dbService.js";

const QUEUE_NAME = "case_queue";

async function processQueue() {
  while (true) {
    const job = await redis.rpop(QUEUE_NAME);

    if (!job) {
      await new Promise(r => setTimeout(r, 2000));
      continue;
    }

    const { notes, userId, caseId } = JSON.parse(job);

    try {
      const schemes = await getRelevantSchemes(notes);
      const result = await callAI(notes, schemes);

      // 🔥 update DB
      await updateCase(caseId, result);

      console.log("Case completed:", caseId);

    } catch (err) {
      console.error("Worker error:", err.message);
    }
  }
}

processQueue();