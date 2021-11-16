const express = require("express");
const https = require('https');//can be changed for axios, or fetch
const Joi = require("joi");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const users = [
    {id:101, name: "Alan"},
    {id:102, name: "Mary"},
    {id:103, name: "John"},
];

//get request
app.get("/", (req, res)=>{
    res.send(users);
})
app.get("/api/:id", (req, res)=>{
    const {id} = req.params;
    console.log(id);

    const user = users.find(user=>user.id == id);
    // const user = users.filter(user=>user.id == id);

    res.send(user);
})

app.get("/api/:id/:name", (req, res)=>{
    const params = req.params;
    console.log(params);
})


app.post("/api/newuser", (req,res)=>{
    const user = req.body;
    console.log(user);

    const schema = Joi.object({
        name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        id: Joi.number().min(3).max(5).required()
    });

    const {error, value} = schema.validate(user);
    
    if(error){
        console.log(error.details[0].message, value);
        res.status(400).send(error.details[0].message)
    }else{
        users.push(value);
        res.send(users);
    }

    
})

app.put("/api/:id", (req, res)=>{
    

})

//env variables
const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`server is up and listening on port ${port}`)});//listens to a port for http requests