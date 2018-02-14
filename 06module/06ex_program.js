var myModule = require('./06ex_module')

var dirPath = 'C:\\'
var ext = 'sys'

myModule(dirPath, ext, (err, files) => {
    if (error)
        console.log(error)

    files.forEach(element =>{
        console.log(element)
    });
})