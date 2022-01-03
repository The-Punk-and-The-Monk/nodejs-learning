import mysql from 'mysql';

const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql_2021',
    port: 3306,
    database: 'myblog',
    // socketPath: '/tmp/mysql.sock'
});

con.connect();

const sql = 'select * from users;';

con.query(sql, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});

con.end();
