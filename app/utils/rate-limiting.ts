import { Redis } from "@upstash/redis";
import { getClientIPAddress } from "remix-utils";

const client = new Redis({
  url: (process.env.UPSTASH_REDIS_REST_URL as string),
  token: (process.env.UPSTASH_REDIS_REST_TOKEN as string),
});

const REQUESTS_LIMIT = 5;
const TTL = 60 * 60; // 3600 seconds = an hour

const rateLimit = async (request: Request) => {
	const key = getClientIPAddress(request);
	console.log({ key });
	
	if (!key) return;

	const count = await client.incr(key);

  // If key is created for the first time, set expiry
	if (count === 1) {
		client.expire(key, TTL);
	}

	if (count > REQUESTS_LIMIT) {
    throw  new Response("Too many requests!", {
      status: 429,
    });
	}
}

export default rateLimit;