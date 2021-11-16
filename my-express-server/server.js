const express = require("express");

const app = express();

app.get("/",(req, res)=>{//request and response
    // console.log(req);
    res.send("Hello World!");
} )

app.get("/contact",(req, res)=>{//request and response
    // console.log(req);
    res.send("my mail");
} )

app.get("/about",(req, res)=>{//request and response
    // console.log(req);
    res.send("<h1>my name is alan</h1><p>I'm okay</p>");
} )

app.get('*', function(req, res){
    res.status(404).send('what???');
  });
  
app.listen(3000, ()=>{console.log("server is up and listening on port 3000");});//listens to a port for http requests