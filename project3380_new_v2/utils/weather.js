const {WEATHER_KEY} = require('../config');
const axios = require('axios');

const city = "Vancouver";
const appid = WEATHER_KEY;
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}`;
console.log(url);

exports.getWeather = async (req, res) =>{
    const resp = await axios.get(url);
    // console.log(resp);
    res.status(200).send(resp.data);
}

// fetch(url)
//     .then(response=>{
//         if(!response.ok){
//             throw Error(response.statusText);
//         }
//         return response.json();

//     })
//     .then(weatherData=>{
//         console.log(weatherData);

//         const weatherData = JSON.parse(data);
//         console.log(weatherData);
//         const imageURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
//         const output = `The city ${weatherData.name} in country ${weatherData.sys.country} has a temperature of ${weatherData.main.temp} celsius`;
//         res.write(`<h1>${output}</h1>`);
//         res.write(`<h2>It's ${weatherData.weather[0].description}</h2>`);
//         res.write(`<img src='${imageURL}'/>`)
//         res.send();
//         const output = `The city ${weatherData.name} in country ${weatherData.sys.country} has a temperature of ${weatherData.main.temp} celsius`;
//         $('#info').text(output);
//     })
//     .catch((error)=>{
//         console.log("Error guys: ", error);
//     })