const http = require('http');

const server = http.createServer((req, res) =>{
    //destructuring operator
    const {headers, method, url} = req;
    //
    let body = [];

    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        res.on('error', (err) => {
            console.error(err);
        });
        res.writeHead(200, {'Content-Type' : 'application/json'});
        const responseBody = { body };
        res.write(JSON.stringify(responseBody));
        res.end();
    })

}).listen(9001);