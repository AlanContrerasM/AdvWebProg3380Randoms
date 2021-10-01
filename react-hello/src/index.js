import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World!!</h1>;

ReactDOM.render(element, document.getElementById("root"));

const person = {
    name: "Anu",
    walk(){
        console.log(this.name + " walks");
        
    },
    talk: function(){
        console.log(this.name + " talks");
    },
    me(){
        console.log(this); //returns the object
    },
    meArrow: () =>{
        console.log(this); //returns undefined
    },
    /*talkArrow: ()=>{
        console.log(this.name + " talks");//error, cause undefined.
    },*/

}

person.walk();
person.talk();
person.me();
person.meArrow();

const student = {
    courses: ["JavaScript", "Java", "C#"],
    print(){
        console.log(this); //this returns the object
        setTimeout(function(){
            console.log(this);//this returns window global
            //console.log(this.courses.join(", ")); //this returns error cause this.courses is undefined
        }, 1000)
    },
    printArrow(){
        console.log(this);//sends student
        setTimeout(()=>{
            console.log(this);//sends student
            console.log(this.courses.join(", "));//sends correct string
        }, 1000)
    },
    printArrowNew: ()=> {
        console.log(this);//prints undefined cause strict so no window is returned
        setTimeout(()=>{
            console.log(this); //same undefined
            //console.log(this.courses.join(", "));// error
        }, 1000)
    },
}

// student.print();
student.printArrow();
// student.printArrowNew();

//print arrow doesnt send a context, gets it from parent.!!



const square = num => num*num; //cannot be hoisted, must be declared before usage
// function square(num){return num*num}; //function declarationS
// const square = function(num){return num*num}; //function expression
console.log(square(3));

const courses= ["JavaScript", "Java", "C#"];
const newCourses = courses.map((course, index)=> `<li>${course}</li>`);
console.log(newCourses);

//loops 
for(let i; i < 5; i++){};
for(let course of courses){
    console.log(course);
}
for(let key in student){//recommended for objects, not for arrays
    console.log(key);
    console.log(student[key]);
}
courses.forEach((course,index)=>{
    console.log(`${index}: ${course}`);
})


//functional prgramming

//using default paramenter

const multiply = (num1 = 2, num2 = 2) => `The product of ${num1} and ${num2} is ${num1*num2}`;
console.log(multiply());
console.log(multiply(5));

//use of MAP
const colors = ["red", "green", "orange", "purple", "white"];
//returns new array
let colorsNew = colors.map((color, index)=>`<li>${index}: ${color}</li>`);

console.table(colorsNew);

//use of foreach
const fruits = ["apple", "strawberry", "pineapple", "blueberry", "grapes"];
//returns nothing
fruits.forEach((fruit, index)=>{
console.log(`${index}: ${fruit}`);
})


//use of filter

const filteredFruits = fruits.filter((fruit, index)=>fruit.includes('berry'));

console.log(filteredFruits);


//reduce, returns a single value
const arrToReduce = [5,10,15];

let reducedSum = arrToReduce.reduce((acc,cur)=>acc + cur);//optional at the end put a comma and add an initial value
//let reducedSum = arrToReduce.reduce((acc,cur)=>acc + cur, 5); //35
console.log(reducedSum); //30

//FIND
const findresult = fruits.find((fruit)=> fruit.includes("berry"));
console.log(findresult)

//FINDINDEX
const findIndex = fruits.findIndex((fruit)=> fruit.includes("berry"));
console.log(findIndex);

//some and every
//some check whether at least one passes the text
const arraySome = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(arraySome.some(even));
// expected output: true


//every checks if everyone passes

const isBelowThreshold = (currentValue) => currentValue < 40;

const arrayEvery = [1, 30, 39, 29, 10, 13];

console.log(arrayEvery.every(isBelowThreshold));
// expected output: true


//object and Array Destructuring
const address= {
    street: "Royal Street",
    city: "New Westminster",
    province: "BC"
}

const {street, province} = address;
const {city:ct} = address;
console.log(street, province);
console.log(ct);


const personMe ={
    fname: "Alan",
    lname: "Contreras",
}

const showPerson = ({fname})=>console.log(fname);
showPerson(personMe);

const nums = [1,2,5,7,8,9,3];

const [first, sec,,,fourth,quinto] = nums;
console.log(first, sec, fourth,quinto);


//Object reestructuring
const name = "alan";
const courseId = "CSIS3380";

const printDetails = () => console.log(`Hi ${name}, from ${courseId}`);

const instructor = {name, courseId, printDetails};
console.log(instructor);
console.log(instructor.printDetails());



//use of Spread

//combine two arrays
const firstArr = [1,2,3];
const secondArr = [4,5,6];

const combined = [...firstArr, ...secondArr];
console.log(combined);//[1,2,3,4,5,6]

//clone
const clone = [...firstArr];


//with objects cloning
const newObj = {...instructor};

//getting remaining elements in array
const [firstele, ...others] = nums;
console.log(others); //[2,5,7,8,9,3]

//collect incoming fuction arguments.

function foo(...args){
    console.log(args);//array
    console.log(args.length);
    const[,...remaining] = args;
    console.log(remaining);
}

console.log(foo(1,2,3,4,5,6,7))


class Person{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log(`${this.name} walks!`);
    }
}

const obj = new Person("John");

obj.walk();

class InstructorNew extends Person{
    constructor(name, course){
        super(name);
        this.course = course;
    }
    display(){
        console.log(`${this.name} is on ${this.course}`);
    }
}

const newInstructor = new InstructorNew("alan", "csis3380");

newInstructor.display();
newInstructor.walk();