// Alan Contreras
// 300330244

const express = require("express");
const https = require('https');//can be changed for axios, or fetch
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req, res)=>{//request and response
    
    res.sendFile(__dirname+"/question2.html");
});

app.post("/", (req, res)=>{
    //retrieve userid
    const userId = req.body.userId;
    //value between 1 and 10
    if(Number(userId)){
        if(Number(userId) > 0 && Number(userId)< 11){
            //make the https get request
            const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    
            https.get(url, (response)=>{
                console.log(response.statusCode);
                //buffer data
                let chunks = "";
                response.on("data",d=>{
                    chunks += d;
                });
                response.on("end",()=>{
                    const payload = JSON.parse(chunks);
                    // console.log(payload);
                    res.write(createTable(payload));
                    res.send();
                    
                });
            }).on('error', (e)=>{console.log(e)});
                    res.set("Content-Type", "text/html");

            
            

        }else{
            res.send("User not valid, must be number between 1 and 10");
        }
    }else{
        res.send("User not valid, must be number between 1 and 10");
    }
    
    
})


const createTable = (hits) =>{
    let html = "" ;
    html += `<table>
            <thead>
                <tr>
                <th scope="col">UserId</th>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>`;
    
        hits.map(hit=>{
            console.log("creating row: ", hit.id);
            html += `
            <tr >
                <td>${hit.userId}</td>
                <td>${hit.id}</td>
                <td>${hit.title}</td>
                <td>${hit.body}</td>
            </tr>`;
        });
        html += `</tbody>
                </table>`;
        return html;
}

app.listen(3000, ()=>{console.log("server is up and listening on port 3000");});