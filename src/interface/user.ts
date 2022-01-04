export interface UserLoginReq {
    username: string;
    password: string;
}

export type UserLoginRes = boolean

export interface SessionValue{
    username: string,
    password: string
}