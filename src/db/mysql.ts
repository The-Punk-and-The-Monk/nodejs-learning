import mysql, { MysqlError } from 'mysql';

import { MYSQL_CONF } from 'src/conf/db';

const con = mysql.createConnection(MYSQL_CONF);

con.connect();

export const execSql = async (sql: string) => {
    console.log(sql);
    return new Promise((resolve, reject) => {
        con.query(sql, (err, res) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log(res);
            resolve(res);
        });
    });
};
