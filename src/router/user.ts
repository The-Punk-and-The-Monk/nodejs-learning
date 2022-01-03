
import { ReqExtended, ResExtended } from 'src/interface/server';
import { ErrorModel } from 'src/model/ErrorModel';
import { SuccessModel } from 'src/model/SuccessModel';
import { UserLoginReq } from 'src/interface/user';
import { login } from 'src/controller/user';

export const handleUserRouter = (req: ReqExtended, res: ResExtended) => {
    const { method, url } = req;
    const path = url?.split('?')[0];

    if (!req.body) {
        return undefined;
    }

    if (method === 'POST' && path === '/api/user/login') {
        const result = login(req.body as UserLoginReq);
        if (result) {
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