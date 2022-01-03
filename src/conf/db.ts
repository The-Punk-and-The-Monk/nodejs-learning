import { ConnectionConfig } from "mysql";

const env = process.env.NODE_ENV;

export const MYSQL_CONF: ConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: 'mysql_2021',
    port: 3306,
    database: 'myblog',
};
