import http from 'http';
import {b} from 'src/test';

const server = http.createServer((req, res) => {
    req.on('data', () => {
        res.end('wahaha');
    });
});

server.listen(8765);
console.log('ok');