var http = require('http')
var url = require('url')

//Set the port for server to listen
var port = 8000

//Declare var for json response
var hour = 0
var min = 0
var sec = 0

http.createServer((req,res) => {
    //Take incoming url and parse it into a url object
    var incoming_url = url.parse(req.url, true)

    //Extract Date portion
    var d = new Date(incoming_url.query.iso)
    var u = incoming_url.pathname

    // json string response
    if (u=== '/api/parsetime') {
        hour = d.getHours()
        min = d.getMinutes()
        sec = d.getSeconds()

        res.writeHead(200, {'content-type' : 'application/json'})

        var jsonTime= {
            "hour" : hour,
            "minute" : min,
            "second" : sec
        }
        res.end(JSON.stringify(jsonTime))
    }

    if (u === '/api/unixtime'){
        var unix = d.getTime()
        res.writeHead(200, {'content-type':'application/json'})
        var jsonUnixTime = {
            "unixtime" : unix
        }
        res.end(JSON.stringify(jsonUnixTime))
    }

}).listen(port)