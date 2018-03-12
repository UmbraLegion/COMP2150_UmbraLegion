var http = require('http')
var fs = require('fs')

var fileToServe = 'jsonStorageGD.json'

var server = http.createServer((req, res) => {
    var srcStream = fs.createReadStream(fileToServe)

    srcStream.pipe(res)

    res.writeHead(200, {'Content-type' : 'application/json'})
})

server.listen(9000)