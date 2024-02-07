import http from 'http'
import fs from 'fs'

let convertdata;

await fs.readFile("C:\\Users\\Sachin\\OneDrive\\Desktop\\Web Development\\Spotify Clone\\index.html", 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
    // convertdata = data
    const hostname = '127.0.0.1';

    const port = 3000;

    const server = http.createServer(async (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        // let data = await fs.readFile("C:\\Users\\Sachin\\OneDrive\\Desktop\\Web Development\\Spotify Clone\\index.html")
        // let convertdata = data.toString()
        res.end(data);
    }).listen(port, hostname, () => {
        console.log(`server running at http://${hostname}:${port}/`);
    })
})
// Do something with the file contents
// console.log(data);


