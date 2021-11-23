const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require("./models/students");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
const url = "mongodb://localhost:27017/studentsDB";


app.get("/api/StudentInfo/", async (req,res)=>{
    

    try{
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const students = await Student.find();
        console.log(students);
        res.send(students);
        
        

    }catch(err){
        console.log(err);

    }finally{
        try{
            await mongoose.connection.close();
        }catch(err){
            console.log(err);
        }
        
    }    
});

//create
app.post("/api/StudentInfo/", async (req, res)=>{
    try{
        const {first_name, last_name, age} = req.body;

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        //both work
        // const student = new Student({first_name, last_name, age});
        // await student.save();
        const student = await Student.create({first_name, last_name, age});
        res.send(student);
        
        

    }catch(err){
        console.log(err);
        res.send(err);

    }finally{
        try{
            await mongoose.connection.close();
        }catch(err){
            console.log(err);
        }
        
    } 

})

//get one
app.get("/api/StudentInfo/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        _id = mongoose.Types.ObjectId(id);
        const {first_name, last_name} = req.body;

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const student = await Student.findOne({_id: _id});
        res.send(student);
        

    }catch(err){
        console.log(err);
        res.send(err);

    }finally{
        try{
            await mongoose.connection.close();
        }catch(err){
            console.log(err);
        }
        
    } 

})

//update
app.put("/api/StudentInfo/:id", async (req, res)=>{
    try{
        

        const {id} = req.params;
        _id = mongoose.Types.ObjectId(id);
        const {first_name, last_name} = req.body;

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const student = await Student.updateOne({_id: _id}, {first_name, last_name});

        res.send(student);
        
        

    }catch(err){
        console.log(err);
        res.send(err);

    }finally{
        try{
            await mongoose.connection.close();
        }catch(err){
            console.log(err);
        }
        
    } 

})


//delete
app.delete("/api/StudentInfo/:id", async (req, res)=>{
    try{
        
        const {id} = req.params;
        _id = mongoose.Types.ObjectId(id);
        const {first_name, last_name} = req.body;

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const student = await Student.deleteOne({_id: _id});

        res.send(student);
        
        

    }catch(err){
        console.log(err);
        res.send(err);

    }finally{
        try{
            await mongoose.connection.close();
        }catch(err){
            console.log(err);
        }
        
    } 

})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log("the server is up and listening on port 5000");
})
