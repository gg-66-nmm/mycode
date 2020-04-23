let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
    if (req.url === "favicon.ico") {
        return;
    }
    if (req.url == "/aa") {
        fs.readFile("./b.txt", function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            res.end(data);
            // console.log(data)
        });
    } else if (req.url == '/bb') {
        fs.readFile('./b.html', function(err, data) {
            res.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' })
            res.end(data);
        });
    } else if (req.url = '/img') {
        fs.readFile('./003.jpg', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.end(data);
        })

    } else if (req.url = '/style') {
        fs.readFile('./c.css', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })

    } else {
        res.end("node hello world");
        console.log('A');
    }

})
server.listen(3000, "localhost");