let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
    if (req.url === "favicon.ico") {
        return;
    }
    var userid = parseInt(Math.random() * 8999) + 1000;
    fs.mkdir('./test' + userid);
    res.end("success")
})
server.listen(3000, "192.168.137.1")