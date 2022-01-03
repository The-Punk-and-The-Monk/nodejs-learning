import { BlogDetail, BlogList, NewBlogRes } from "src/interface/blog";
import { UserLoginRes } from "src/interface/user";

export type ModelData = BlogList | BlogDetail | NewBlogRes | UserLoginRes

export interface BaseModelParams {
    data?: ModelData,
    message?: string
}


