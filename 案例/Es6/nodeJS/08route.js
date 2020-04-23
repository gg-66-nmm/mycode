//当用户访问  /student/123456789查询学生信息
//当用户访问  /teacher/232323/查询教师信息
let http = require("http")
let url = require('url')
let server = http.createServer((req, res) => {
    if (url == '/favicon.ico') {
        return;
    }
    var userurl = req.url;
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
    if (userurl.substr(0, 9) === "/student") {
        var studentid = userurl.substr(9);
        if (/^\d{10}$/.test(studentid)) {
            res.end("你所查询的学生id是" + studentid);
        } else {
            res.end("你查询的信息有误" + studentid);
        }
    }
    res.end()
})
console.log(13);
server.listen(5000, 'localhost');