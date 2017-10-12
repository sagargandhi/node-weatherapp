const request = require('request');

var geocodeAddress = (address) => {

    var stringSearch = encodeURIComponent(address);
    
    return new Promise( (resolve, reject) => {
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${stringSearch}`,
            json: true
        }, (error, response, body) => {
            
            if (error) {
                reject('Error occurred while connecting to google servers.');
            } else if (body.status === 'ZERO_RESULTS'){
                reject('Address was not found.'); 
            } else if (body.status === "OK"){
                var result = {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude:body.results[0].geometry.location.lng
                }
                resolve(result);

            } else {
                    reject(JSON.stringify(body));
            }
        });
    });
}

geocodeAddress('Kopargaon').then((result) => console.log(JSON.stringify(result)),
(error) => console.log(error));