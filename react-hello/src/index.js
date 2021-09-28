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