export type BlogDetail = {
    id: string,
    title: string,
    content: string,
    createTime: number,
    author: string
}

export type BlogList = Array<BlogDetail>

export type NewBlogReqBody = Omit<BlogDetail, 'id' | 'createTime'>

export type NewBlogRes = {
    id: string
}

export type UpdateBlogReqBody = Omit<BlogDetail, 'createTime' | 'author'>

export type UpdateBlogRes = boolean

export type DelBlogReqBody = {
    id: string,
}

export type DelBlogRes = boolean