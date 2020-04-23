let http = require('http');
let server = http.createServer((req, res) => {
    let random = Math.random();
    console.log(random);
    if (random > 0.9) {
        throw new Error("炸了");
    }
    res.end("05 http-server");
})
server.listen("3000", "localhost");