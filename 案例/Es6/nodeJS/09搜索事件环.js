let http = require('http');
let fs = require('fs');
let server = http.createServer((req, res) => {
    var uesrid = parseInt(Math.random() * 8999) + 1000;
    console.log("欢迎用户名为" + uesrid + "的用户");
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    fs.writeFile("./home.html/", function(err, data) {
        if (err) {
            throw err;
        }
        console.log(uesrid + "搜索完毕")
        res.end(data);
    })
    res.end();
})
server.listen(5000, "192.168.137.1");