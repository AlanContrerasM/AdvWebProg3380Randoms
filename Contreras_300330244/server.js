const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
//mongo url, database name finalexamdb
const url = "mongodb://localhost:27017/finalexamdb";

//collection name should be autosafety
const Auto = mongoose.model('Auto', 
               new mongoose.Schema({ carid: Number, modelname: String, brand: String, price: Number, safetyscore: Number}), 
               'autosafety'); 

//get all cars info
app.get("/api/finalExam/", async (req,res)=>{
    
    try{
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");
        
        const cars = await Auto.find();
        // console.log(cars);

        res.send(cars);
        
        await mongoose.connection.close();

    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }
});

//get one car info
app.get("/api/finalExam/:id", async (req,res)=>{
    
    try{

        const {id} = req.params;
        _id = mongoose.Types.ObjectId(id);

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");
        
        const cars = await Auto.findById(_id);
        // console.log(cars);

        res.send(cars);
        
        await mongoose.connection.close();

    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }
});


//add car to database
app.post("/api/finalExam/", async (req,res)=>{
    
    try{
        const {carid, modelname, brand, price, safetyscore} = req.body;

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const car = await Auto.create({carid, modelname, brand, price, safetyscore});
        res.send(car);
        await mongoose.connection.close();

    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }
});


//delete a car
app.delete("/api/finalExam/:id", async (req, res)=>{
    try{
        
        const {id} = req.params;
        _id = mongoose.Types.ObjectId(id);
        

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const car = await Auto.deleteOne({_id: _id});

        res.send(car);
        await mongoose.connection.close();
        
    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }

})




//update a car
app.put("/api/finalExam/:id", async (req, res)=>{
    try{
        

        const {id} = req.params;
        _id = mongoose.Types.ObjectId(id);
        const {carid, modelname, brand, price, safetyscore} = req.body;

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const car = await Auto.updateOne({_id: _id}, {carid, modelname, brand, price, safetyscore});

        res.send(car);
        await mongoose.connection.close();
        
        

    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }

})





const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log("the server is up and listening on port 5000");
})


//mongoose schema
const carSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "The first name is required, please provide one"],//the message is optional

    },
    last_name:{
        type: String,
        required: [true, "The last name is required, please provide one"],
    },
    age: {
        type: Number,
        min: 18,
        max: 40,
        required: [true, "age is missing"],

    }

});

//compiling the schema into model
const Car = mongoose.model("Car", carSchema);
