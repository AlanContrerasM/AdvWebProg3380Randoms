const mongoose = require('mongoose');

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

module.exports = Student;