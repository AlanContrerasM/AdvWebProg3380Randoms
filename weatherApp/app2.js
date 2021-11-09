const express = require("express");
const https = require('https');//can be changed for axios, or fetch
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req, res)=>{//request and response
    
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res)=>{
    console.log(req.body);
    const city = req.body.city;
    const appid = "1e85942e45c02b9062e34d797fa226de";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}`;
    console.log(url);
    //get(url, callback)
    https.get(url, (response)=>{
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const imageURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;


            const output = `The city ${weatherData.name} in country ${weatherData.sys.country} has a temperature of ${weatherData.main.temp} celsius`;
            res.write(`<h1>${output}</h1>`);
            res.write(`<h2>It's ${weatherData.weather[0].description}</h2>`);
            res.write(`<img src='${imageURL}'/>`)
            res.send();
        })
    });
})

// const city = "London";
//     const appid = "1e85942e45c02b9062e34d797fa226de";
//     const units = "metric";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${units}`;
//     //get(url, callback)
//     https.get(url, (response)=>{
//         response.on("data", (data)=>{
//             const weatherData = JSON.parse(data);
//             console.log(weatherData);
//             const imageURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;


//             const output = `The city ${weatherData.name} in country ${weatherData.sys.country} has a temperature of ${weatherData.main.temp} celsius`;
//             res.write(`<h1>${output}</h1>`);
//             res.write(`<h2>It's ${weatherData.weather[0].description}</h2>`);
//             res.write(`<img src='${imageURL}'/>`)
//             res.send();
//         })
//     });


app.listen(3000, ()=>{console.log("server is up and listening on port 3000");});//listens to a port for http requests