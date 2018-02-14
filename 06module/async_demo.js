var fs = require('fs')
var path = require('path')
var list = []
var extn = ''


module.exports = function(directory, extension, callback) {

    // add the dot to the file extension
    extn = '.' + extension
    fs.readdir(directory, (err, fileArr) => {
        if(err)
            return callback(err)
    
        // If there is no error, read the list of files using forEach loop.
        fileArr.forEach(file => {
            if(path.extname(file) === extn)
                list.push(file)
        })
        callback(null, list)
    })
}