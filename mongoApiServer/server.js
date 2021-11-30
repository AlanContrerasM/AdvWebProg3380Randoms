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

        await mongoose.connection.close();
        
        

    }catch(err){
        console.log(err);
        res.status(400).send(err);

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
        await mongoose.connection.close();
        
        

    }catch(err){
        console.log(err);
        res.status(400).send({err, message: "wrong data sent to create new student"});

    }

})
// {
//     "first_name": "Alan",
//     "last_name": "soemthing",
//     "age": 24
// }

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
        await mongoose.connection.close();
        
        

    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }

})

//update
app.put("/api/StudentInfo/:id", async (req, res)=>{
    try{
        

        const {id} = req.params;
        _id = mongoose.Types.ObjectId(id);
        const {first_name, last_name, age} = req.body;

        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const student = await Student.updateOne({_id: _id}, {first_name, last_name, age});

        res.send(student);
        await mongoose.connection.close();
        
        

    }catch(err){
        console.log(err);
        res.status(400).send(err);

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
        await mongoose.connection.close();
        
    }catch(err){
        console.log(err);
        res.status(400).send(err);

    }

})

//delete all students
app.delete("/api/StudentInfo/", async (req, res)=>{
    try{
        
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log("database connected");

        const student = await Student.deleteMany({});

        res.send(student);
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
