var fs = require('fs')
var myNumber = undefined 

function addOne(callBeck) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents)
        myNumber++
        callback()
    })
}

console.log(myNumber)

addOne(logMyNumber)