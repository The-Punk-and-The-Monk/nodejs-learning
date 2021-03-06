import { URLSearchParams } from 'url';
import http from 'http';

import { SESSION_CACHE, handleUserRouter } from 'src/router/user';
import { PostDatas } from 'src/interface/client';
import { ReqExtended } from 'src/interface/server';
import { handleBlogRouter } from 'src/router/blog';


const getPostData = async (req: http.IncomingMessage): Promise<PostDatas> => {
    if (req.method !== 'POST' || req.headers['content-type'] !== 'application/json') {
        return {};
    }
    const data = await new Promise<PostDatas>((resolve, reject) => {
        let postData = '';
        req.on('data', (chunk) => {
            console.log(chunk);
            postData += chunk.toString();
        });
        req.on('end', () => {
            if (!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        });
    });
    return data;
};

export const serverHandle: http.RequestListener = async (req, res) => {
    console.log(req.url);
    const reqExtended: ReqExtended = req;
    res.setHeader("Content-type", 'application/json');
    
    reqExtended.query = new URLSearchParams(req.url?.split('?')[1]);
    reqExtended.path = req.url?.split('?')[0];
    reqExtended.body = await getPostData(req);
    reqExtended.cookie = {};
    
    const cookieStr = req.headers.cookie || '';
    cookieStr.split(';').forEach((s) => {
        const keyAndValue = s.trim();
        const [key, value] = keyAndValue.split('=');
        reqExtended.cookie![key] = value;
    });

    if (reqExtended.cookie?.userId && SESSION_CACHE[reqExtended.cookie.userId]) {
        reqExtended.session = SESSION_CACHE[reqExtended.cookie.userId];
    }

    if (reqExtended.path?.startsWith('/api/blog')) {
        const blogData = await handleBlogRouter(req, res);
        if (blogData) {
            res.end(JSON.stringify(blogData));
            return;
        }
    }

    if (reqExtended.path?.startsWith('/api/user')) {
        const userData = await handleUserRouter(req, res);
        if (userData) {
            res.end(JSON.stringify(userData));
            return;
        }
    }

    res.writeHead(404, '404 Not Found', {
        'Content-type': 'text/plain'
    });
    res.end();
};