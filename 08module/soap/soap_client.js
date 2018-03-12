var soap = require('soap')


var url = 'http://www.webservicex.net/ConvertTemperature.asmx?WSDL'
var args = { temperature : 0, FromUnit : 'degreeCelsius', ToUnit : 'degreeFahrenheit'}
soap.createClient(url, (err, client) => {
    client.ConvertTemp(args, (error, result)=> {
        if (error) {
            console.error(error)
        } else {
            console.log("the Temp. after conversion is " + result.ConvertTempResult + " F")
        }
    })
})