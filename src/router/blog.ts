import { BlogDetail, DelBlogReqBody, UpdateBlogReqBody } from 'src/interface/blog';
import { ReqExtended, ResExtended } from 'src/interface/server';
import { delBlog, getDetail, getList, newBlog, updateBlog } from 'src/controller/blog';
import { ErrorModel } from 'src/model/ErrorModel';
import { SuccessModel } from 'src/model/SuccessModel';

export const handleBlogRouter = async (req: ReqExtended, res: ResExtended) => {
    const { method, path } = req;
    const id = req.query?.get('id') || '';

    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query?.get('author') || '';
        const keyword = req.query?.get('keyword') || '';

        const blogList = await getList(author, keyword);
 
        return new SuccessModel({
            data: blogList
        });
    }

    if (method === 'GET' && path === '/api/blog/detail') {
        const blogDetail = await getDetail(id);

        return new SuccessModel({
            data: blogDetail
        });
    }

    /**
     * POST start
     */
    if (!req.body) {
        return undefined;
    }

    if (method === 'POST' && path === '/api/blog/new') {
        const resData = await newBlog(req.body as BlogDetail);
        if (!resData) {
            return new ErrorModel({
                message: '新建blog失败'
            });
        }
        return new SuccessModel({
            data: resData
        });
    }

    if (method === 'POST' && path === '/api/blog/update') {
        const result = await updateBlog(req.body as UpdateBlogReqBody);
        if (result) {
            return new SuccessModel({});
        }
        return new ErrorModel({
            message: "更新博客失败"
        });
    }

    if (method === 'POST' && path === '/api/blog/del') {
        const result = await delBlog(req.body as DelBlogReqBody);
        if (result) {
            return new SuccessModel({});
        }
        return new ErrorModel({
            message: "删除博客失败"
        });
    }

    return undefined;
};