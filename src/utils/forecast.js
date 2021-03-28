const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=07df836064da96485c27748ef9e85d79&query="+latitude+","+longitude

    request({url, json:true},  (error, {body}) => {
        if(error){
            callback('Unable to conect to weather service!', undefined)
        } else if(body.error === 0){
            callback('Unable to find location, try another search.', undefined)
        } else {
            callback(undefined, {
                current_temperature : body.current.temperature ,
                feels : body.current.feelslike                   
            })
        }
    })
}

module.exports = forecast