import {Redis} from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const QUEUE_KEY = "case_queue";
const FAILED_QUEUE_KEY = "failed_queue";

// 📬 Add job (supports retry field)
export const addToQueue = async (data) => {
    await redis.lpush(QUEUE_KEY, data);
};

// 📤 Get next job
export const getFromQueue = async () => {
    const job = await redis.rpop(QUEUE_KEY);
    return job ?? null;
};

// 🔄 Re-queue job with incremented retry count
export const requeueJob = async (data) => {
    await redis.lpush(QUEUE_KEY, data);
};

// 💀 Push to failed queue
export const pushToFailedQueue = async (data) => {
    await redis.lpush(FAILED_QUEUE_KEY, data);
};

export { redis, QUEUE_KEY, FAILED_QUEUE_KEY };
