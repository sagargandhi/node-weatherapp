const request = require('request');

var getWeather = (latitude, longitude, callback) => {

    request({
        uri: `https://api.darksky.net/forecast/8164e187eba16c2c114dda3dddd1c8ea/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback(error);
        } else if (response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            console.log(JSON.stringify(body, undefined, 2));
        }
    })
}

module.exports.getWeather = getWeather;