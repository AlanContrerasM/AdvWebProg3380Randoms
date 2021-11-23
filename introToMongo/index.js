const express = require('express');
const mongoose = require('mongoose');

// run().catch(error => console.log(error.stack));

// async function run() {
//     await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
  
//     // Clear the database every time. This is for the sake of example only,
//     // don't do this in prod :)
//     await mongoose.connection.dropDatabase();
  
//     const customerSchema = new mongoose.Schema({ name: String, age: Number, email: String });
//     const Customer = mongoose.model('Customer', customerSchema);
  
//     await Customer.create({ name: 'A', age: 30, email: 'a@foo.bar' });
//     await Customer.create({ name: 'B', age: 28, email: 'b@foo.bar' });
  
//     // Find all customers
//     const docs = await Customer.find();
//     console.log(docs);



    
//   }

//prof examples
//first open the mongodb compass, and connect, to see the port.
//if the table exists it connects, otherwise creates it
mongoose.connect("mongodb://localhost:27017/studentsDB");

const studentSchema = new mongoose.Schema({
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
const Student = mongoose.model("Student", studentSchema);

//creating the document
const student = new Student({
    first_name: "John",//if we comment out this line, it will throw an error
    last_name: "Perry",
    age: 35
});

//saves the document to collection.
// student.save((err)=>{
//     if(err){
//         console.log(err.message);
            // return;
//     }
// });
// console.log(student);

//insert many
const arr = [
    {
        first_name: "Alan",
        last_name: "Perry10",
        age: 35
    },
    {
        first_name: "Alan",//if we comment out this line, it will throw an error
        last_name: "Perro11",
        age: 35
    }
]


// Student.insertMany(arr, (err, docs)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// });


//reading data using find
Student.find((err, students)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(students);
        // mongoose.connection.close();
    }
})


Student.updateOne(
    {_id: "619d5cdd1df54f85c8e29e5a"},
    {first_name: "Sam"},
    (err)=>{
        if(err){
            console.lof(err);
        }else{
            console.log("successfully updated one document");
        }
    }
)

//delete
// Student.deleteOne(
//     {_id: "619d5cdd1df54f85c8e29e5a"},
//     (err)=>{
//         if(err){
//             console.lof(err);
//         }else{
//             console.log("successfully deleted one document");
//         }
//     }
// )
