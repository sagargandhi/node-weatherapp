const yargs = require('yargs');
const geocodeLib = require('./geocode/geocode.js');
const weather = require('./weather/weather'); 
const axios = require('axios');


var argv = yargs.command('search', 'Searches a address',  {
    stringVal :{
        demand: true,
        describe: 'String to search',
        alias: 's'
    }
}).help().argv;

var stringSearch = encodeURIComponent(argv.stringVal);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${stringSearch}`)
.then(response => {
    console.log(response.data.results[0].formatted_address);  

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    console.log(lat);
    console.log(lng);

    return axios.get(`https://api.darksky.net/forecast/8164e187eba16c2c114dda3dddd1c8ea/${lat},${lng}`)
}).then(response => {
    var result = {
        temperature: response.data.currently.temperature,
        apparentTemperature: response.data.currently.temperature
    }
    console.log(JSON.stringify(result));
}).catch(e => {
    console.log(e);
});


// geocodeLib.geocode(argv.stringVal, (errorcode, geoCodeResults)=>{
//     if( errorcode)
//         console.log(errorcode);
//     else
//     {
//         console.log(geoCodeResults.address);
//         weather.getWeather(geoCodeResults.latitude,geoCodeResults.latitude, (error, result) => {
//             if(error){
//                 console.log(error);
//             }
//             else{
//                 console.log(JSON.stringify(result));
//             }
//         })
//     }
// });

