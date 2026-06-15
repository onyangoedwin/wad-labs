// an external js file(.css) (.html)
//variables and types
let age=20;
var course="BBIT";
const university="Strathmore";

//Redeclareing a variable
let age=22;
//cont universuty="UON"
//Var Course="ICS"
//===, ==

//re-assigned
//university="UON"

//Scope(const, let-block)var, global

//function definition
//year =2026;
/**
 * 
 * @param {int} height 
 * @param {int} width 
 * @returns {int} area
 */
function calculateArea(height, width){
    if (height===null){
        console.log("Height is missing")
    }else if(width===null){
            console.log("Width is missing")
        }else{
            let area=height*width
            return area
        }

    //console.log("function CalculateArea")
    //alert("Function called/executed");
}
//return a value is Not printing out
//execution-called
console.log(calculateArea(20, 3))
console.log(calculateArea(20))
console.log(calculateArea())

//function expression
const add=function(number_1, number_2){
    return number_1+number_2
}
console.log(add(4, 2))

//arrow functions
const multiply=(x, y)=>x  * y;
console.log(multiply(2, 5));

/**Javascript Arrays (related) */

let courseScores=[80, 90, 75, 85];

//access array name[index]
//80
console.log(courseScores[4]);

//90
console.log(scores[2]);

//75
console.log(scores[0]);


//85
console.log(scores[1]);
let names=["Omondi", "Wafula", "Kiprotich", "Nyambane", " Edwin"];

//print out Kiprotich on the console window
console.log(student_names[2]);

let governors=[
    [47,"Johnson Sakaja"],
    [1,"AbdulSwamad Sharif"],
    [21,"Irungu Kang'ata"],
];
//The governor of county number 1 is AbdulSwamad Sharif
console.log("The governor of county number "+governors[1][0]+" is "+governors[4][1]);


//map(perform an operation on each element)
let doubledScores = courseScores.map(x => x * 2);
console.log(doubledScores);

//properties
//The class has j students(student_names)
console.log("The class has "+student_names.length+" students");

//Kenya has b governors
console.log("Kenya has "+governors.length+" governors");

//for in
for(let index in scores){
    console.log(scores[index]);
}
//for of
for(let score of scores){
    console.log(score);
}
forEach
scores.forEach(function(score){
    console.log("score: "+score);
});

const student={
    name:"Edwin",
    age: 20,
    course: "BBIT", 
    passed: true
    grade:'A',
    "admission number": 12345,
    group:"2A"
    attendance: 20,
    addAttendance: function(){
        this.attendance=this.attendance+1;

    }
};

//accessing items
//student name
console.log("My name is",
   student.name,"from",
   student["admission number"],
   "university"
);

//add attendance
student.addAttendance(); //add attendance by 1
console.log(student.attendance);//21

//array of objects
let bbit_2b_students=[
    {adm:22238, name : "Blessing"},
    {adm:22239, name : "Ryan"},
    {adm:22240, name : "Ambrose"},
    {adm:22241, name : "Wafula"}

//print out the name of all students in bbit_2b_students using a loop
bbit_2b_students.forEach(function(student){
    console.log(student.name);
});
//getting the keys of an object as an array
console.log(Object.keys(student));

//getting the values of an object as an array
console.log(Object.values(student));

//getting both keys and values of an object as an array
console.log(Object.entries(student));


/* DOM - Document Object Model */
console.log(document);

//Elements on our page (variables)
const heading=document.querySelector("#mainHeading");
console.log(heading);
const preview=document.querySelector("img");
console.log(preview);
const aboutSection=document.getElementById("about");
console.log(aboutSection);

//all the sections
const sections=document.querySelectorAll("section");
console.log(sections);

const allNavLinks=document.querySelectorAll(".nav a");
console.log(allNavLinks);

//getting an element
let aboutParagraphs=document.querySelectorAll("#about p");
console.log(aboutParagraphs);

//change its text
aboutParagraph.textContent="This text was changed!";
aboutParagraph.style.color="red";
