import { UserLoginReq, UserLoginRes } from "src/interface/user";
import { execSql } from "src/db/mysql";

export const login = async (params: UserLoginReq): Promise<UserLoginRes> => {
    const { username, password } = params;
    const sql = `
        select username, realname from users where username='${username}' and password='${password}';
    `;
    const result = await execSql(sql) as any;
    return result?.[0]?.username === username;
};
