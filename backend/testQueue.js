import "dotenv/config";
import { addToQueue, getFromQueue } from "./src/services/queueService.js";

await addToQueue({ test: "hello" });

const job = await getFromQueue();

console.log("Job:", job);