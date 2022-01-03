import { BlogDetail, BlogList, DelBlogReqBody, DelBlogRes, NewBlogRes, UpdateBlogReqBody, UpdateBlogRes } from 'src/interface/blog';
import { EmptyObject } from 'src/interface/client';

export const getList = (author: string, keyword: string): BlogList => {
    return [
        {
            id: "1",
            title: '',
            content: 'n',
            createTime: 1111,
            author: '张三',
        },
    ];
};

export const getDetail = (id: string): BlogDetail => {
    return {
        id: "1",
        title: '',
        content: 'n',
        createTime: 1111,
        author: '张三',
    };
};

export const newBlog = (blogData:BlogDetail | EmptyObject = {}): NewBlogRes => {
    return {
        id: "3"
    };
};

export const updateBlog = (params: UpdateBlogReqBody): UpdateBlogRes => {
    return true;
};

export const delBlog = (params: DelBlogReqBody): DelBlogRes => {
    return true;
};