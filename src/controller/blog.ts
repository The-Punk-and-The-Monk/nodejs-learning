import { BlogDetail, BlogList, DelBlogReqBody, DelBlogRes, NewBlogReqBody, NewBlogRes, UpdateBlogReqBody, UpdateBlogRes } from 'src/interface/blog';
import { EmptyObject } from 'src/interface/client';
import { execSql } from 'src/db/mysql';

export const getList = async (author: string, keyword: string): Promise<BlogList> => {
    let sql = `select * from blogs where 1=1 `;
    if (author) {
        sql += `and author='${author}' `;
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `;
    }
    sql += `order by createtime desc;`;

    const result = await execSql(sql);
    return result as Promise<BlogList>;
};

export const getDetail = async (id: string): Promise<BlogDetail | undefined> => {
    const sql = `select * from blogs where id='${id}';`;
    const result = (await execSql(sql)) as BlogList;
    return result[0] ;
};

export const newBlog = async (blogData: NewBlogReqBody): Promise<NewBlogRes | undefined> => {
    const {
        title,
        content,
        author,
    } = blogData;
    const createTime = Date.now();

    if (!author || !title || !content) {
        return undefined;
    }

    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}', '${content}', '${createTime}', '${author}')
    `;
    const execRes = await execSql(sql) as any;
    const result: NewBlogRes = {
        id: execRes.insertId,
    };
    return result;
};

export const updateBlog = async (params: UpdateBlogReqBody): Promise<UpdateBlogRes | undefined> => {
    const { id, title, content } = params;
    if (!id || !title || !content) {
        return undefined;
    }
    const sql = `
        update blogs set title='${title}', content='${content}' where id='${id}';
    `;
    const execRes = await execSql(sql) as any;
    
    return execRes?.affectedRows > 0;
};

export const delBlog = async (params: DelBlogReqBody): Promise<DelBlogRes|undefined> => {
    const { id } = params;
    if (!id) {
        return undefined;
    }

    const sql = `
        delete from blogs where id='${id}';
    `;
    const execRes = await execSql(sql) as any;
    
    return execRes?.affectedRows > 0;
};