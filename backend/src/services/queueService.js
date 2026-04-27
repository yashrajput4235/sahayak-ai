import {Redis} from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
const QUEUE_KEY = "case_queue";
// 📬 Add job
export const addToQueue = async (data)=>{
    await redis.lpush(QUEUE_KEY, data);
}
// get job
export const getFromQueue=async()=>{
    const job = await redis.rpop(QUEUE_KEY);
    return job ?? null;
}