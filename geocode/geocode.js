const request = require('request');

var geocode = (address, callback) => {
    var stringSearch = encodeURIComponent(address);
    
    
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${stringSearch}`,
        json: true
    }, (error, response, body) => {
    
        if (error) {
            callback('Error occurred while connecting to google servers.');
        } else if (body.status === 'ZERO_RESULTS'){
            callback('Address was not found.'); 
        } else if (body.status === "OK"){
            var result = {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            }
            callback(undefined, result);

        } else {
                   callback(undefined, body);
        }
    });
    
};

module.exports = {
    geocode
};