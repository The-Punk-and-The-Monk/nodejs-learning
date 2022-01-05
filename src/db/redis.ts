import redis from 'redis';

import { REDIS_URL } from 'src/conf/db';

const redisClient = redis.createClient({
    url: REDIS_URL
});

redisClient.on('error', err => {
    console.error(err);
});

export const setRedis = async (key: string, val: any) => {
    let formattedVal = val;
    if (typeof val === 'object') {
        formattedVal = JSON.stringify(val);
    }
    await redisClient.set(key, formattedVal);
};

export const getRedis = async (key: string) => {
    const val = await redisClient.get(key);
    if (!val) {
        return val;
    }
    let res: any;
    try {
        res = JSON.parse(val);
    } catch(e) {
        res = val;
    }
    return res;
};

