import http from 'http';
import { serverHandle } from 'src/app';

const PORT = 8765;
const server = http.createServer(serverHandle);

server.listen(PORT);
console.log('listen on 8765 ok');