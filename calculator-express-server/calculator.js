const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req, res)=>{//request and response
    // console.log(req);
       // res.send("<h1>calculator app</h1>");
    res.sendFile(__dirname + "/index.html");
} )

app.post("/", (req, res)=>{
    console.log(req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const sum = num1 + num2;
    res.send(`<div>The result is ${sum}</div>`);

})

app.get("/bmicalculator",(req, res)=>{//request and response
    // console.log(req);
       // res.send("<h1>calculator app</h1>");
    res.sendFile(__dirname + "/bmicalculator.html");
} )

app.post("/bmicalculator", (req, res)=>{
    console.log(req.body);
    const a = Number(req.body.weight);
    const b = Number(req.body.height);
    const sum = calculateBmi(a,b);
    res.send(`<div>Your BMI is ${sum.toFixed(2)}</div>`);

})


function calculateBmi(a,b){
    //weight/heightsquared
    console.log(a,b)
    return a/(b**2);
}

app.listen(3000, ()=>{console.log("server is up and listening on port 3000");});//listens to a port for http requests