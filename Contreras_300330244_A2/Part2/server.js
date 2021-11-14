const express = require("express");
const https = require('https');//can be changed for axios, or fetch
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req, res)=>{//request and response
    
    res.sendFile(__dirname+"/imageGallery.html");
});


app.post("/", (req, res)=>{
    const id = "24326252-a44aebf7e29551393fc7887c2";
    const editorsChoice = false;
    const search = req.body.input1;
    const perPage = req.body.input2;
    const url = `https://pixabay.com/api/?key=${id}&q=${search}&per_page=${perPage}&editors_choice=${editorsChoice}`;
    
    https.get(url, (response)=>{
        console.log(response.statusCode);
        //buffer data
        let chunks = [];
        response.on("data",d=>{
            chunks.push(d);
        });
        response.on("end",()=>{
            const pictures = JSON.parse(Buffer.concat(chunks).toString('utf8'));
            // console.log(pictures.hits);
            res.set("Content-Type", "text/html");
            
            res.write(addBoilerPlateForm(res));
            res.write(addPicturesHtml(pictures.hits));
            res.write(addBoilerPlateEnding())
            
            res.send();
        });
    }).on('error', (e)=>{console.log(e)});
})




const addBoilerPlateForm = () =>{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <!-- jQuery CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <style>
            #content {
                text-align: center;
            }
    
            input {
                width: 25%;
            }
        </style>
    </head>
    
    <body>
        <div id="content">
            <h1> The Image Gallery </h1>
            <form action="/" method="POST">
                <input type="text" size="30" placeholder="Enter your choice, e.g. Yellow Flower" id="input1" name="input1">
                <input type="number" size="30" placeholder="Enter number of images" id="input2" name="input2" min="1" max="10">
                <button type="submit"> Click to see results </button>
            </form>
        </div>`;
}

const addBoilerPlateEnding = () =>{
    return `</body>
    </html>`
}

const addPicturesHtml = (pictures) =>{
    let response = ``;

    response += `<div id="resultsContainer" style='margin-top: 20px;'>`


    pictures.forEach(picture => {

        //add image
        response += `<div style='display: grid; grid-template-columns: 1fr 1fr; padding: 20px; max-width: 80%; margin: auto;'>
                    <img src='${picture.webformatURL}'/>`;

        //add content div
        response += `<div style='overflow: hidden; padding: 30px; background-color: rgb(220, 229, 238); text-align: left;'> 
                        <h3 style='text-align:center'>Image Details</h3>
                        <p><strong>Downloads</strong>: ${picture.downloads}</p>
                        <p style='word-wrap:break-word'><strong>Large Image URL</strong>: <a href='${picture.largeImageURL}'>${picture.largeImageURL}</a></p>
                        <p><strong>Image Likes</strong>: ${picture.likes}</p>
                        <p><strong>Tags</strong>: ${picture.tags}</p>
                        <p><strong>Image type</strong>: ${picture.type}</p>
                        <p><strong>User</strong>: ${picture.user_id}</p>
                        <p style='word-wrap:break-word'><strong>URL</strong>: <a href='${picture.pageURL}'>${picture.pageURL}</a></p>
                    </div>`;
        
        //close div
        response += '</div>';

    });

    response += `</div>`;//close resultsContainer div

    
    return response;
}

app.listen(3000, ()=>{console.log("server is up and listening on port 3000");});