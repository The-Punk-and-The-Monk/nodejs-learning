export type BlogDetail = {
    id: string,
    title: string,
    content: string,
    createTime: number,
    author: string
}

export type BlogList = Array<BlogDetail>

export type NewBlogReqBody = {
    id: string
}

export type NewBlogRes = {
    id: string
}

export type UpdateBlogReqBody = {
    id: string,
    blogDetail: BlogDetail
}

export type UpdateBlogRes = boolean

export type DelBlogReqBody = {
    id: string,
}

export type DelBlogRes = boolean