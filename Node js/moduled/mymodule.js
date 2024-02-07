// const http = require('node:http'); 
// cannot use require because package type is module 

import http from "http"

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!!!</h1>');
}).listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})
