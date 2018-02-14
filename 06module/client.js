var http = require('http')

var url = 'http://localhost8000'

var body = ' '

http.get(url, (response) => {
    response.on('data', (chunk) => {
        body += chunk
    })
    response.on('end', () => {
        var jsonObject = JSON.parse(body)
        console.log (jsonObject)
    })
})
