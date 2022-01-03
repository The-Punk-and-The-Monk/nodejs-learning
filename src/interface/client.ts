import { BlogDetail, DelBlogReqBody, NewBlogReqBody, UpdateBlogReqBody } from "src/interface/blog";
import { UserLoginReq } from "src/interface/user";

export type EmptyObject = Record<string, never>;

export type PostDatas = NewBlogReqBody | EmptyObject | DelBlogReqBody | UpdateBlogReqBody | BlogDetail | UserLoginReq