let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return;
    }
    fs.readdir('../img', function(err, files) {
        console.log(files);
        for (let i = 0; i < files.length; i++) {
            fs.stat('../img/+files[i]', function(err, stats) {
                if (fs.isDirstory) {
                    dirs.push(files[i]);
                }
            });
        }
    })
    res.end("success");
}).listen(3000, 'localhost')