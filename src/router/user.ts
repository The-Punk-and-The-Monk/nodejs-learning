
import { ReqExtended, ResExtended } from 'src/interface/server';
import { ErrorModel } from 'src/model/ErrorModel';
import { SuccessModel } from 'src/model/SuccessModel';
import { UserLoginReq } from 'src/interface/user';
import { login } from 'src/controller/user';

export const SESSION_CACHE: Record<string, {
    username: string;
    password: string
}> = {};

export const handleUserRouter = async (req: ReqExtended, res: ResExtended) => {
    const { method, url } = req;
    const path = url?.split('?')[0];

    if (!req.body) {
        return undefined;
    }

    if (method === 'POST' && path === '/api/user/login') {
        const result = await login(req.body as UserLoginReq);
        if (result) {
            const { username, password } = req.body as UserLoginReq;
            const userId = `${Date.now()}_${Math.random()}`;
            SESSION_CACHE[userId] = {
                username,
                password
            };
            res.setHeader('Set-Cookie', `userId=${userId}; path='/'; expires='${Date.now() + 10 * 60 * 1000}'`);
            return new SuccessModel({
                data: result
            });
        }
        return new ErrorModel({
            message: '登录失败'
        });
    }

    return undefined;
};