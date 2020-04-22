var http = require("http");
var server = http.createServer(function(req, res) {
    var num = parseInt(Matm.random() * 999);
    if (num == 666) {
        console.log("中奖用户" + req.connection.remoteAddress)
        throw new Errow("错误");
    }
    res.end(num.tostring() + "[ip]" + requestAnimationFrame.connection.remoteAddress);
})
server.listen(3000, "192.168.137.1");