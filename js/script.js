//let age = 20;
//var course = "BBIT";
//const University = "Strathmore University";
//Redeclare
//let course= "BBIT";
//const course = "BCOM";
///let University = "Riara University";

//if(true){
 //   let time = "11:30";
   // var day = "Monday";
   // const year =2024
//}
//console.log(day);
//let age =20;
//const university = "Strathmore University";
//var course = "BBIT";

//redeclare
//et age =30

//reassign
//university = "UON"
/**
 *@param {number} height 
 *@param {number} width 
 *@returns {number} 
*/
function calculateArea(height,width){
    if(height == null){
        console.log("Height missing")
        return;
    }else if(width == null){
        console.log("Width missing");
        return;
    }else{



    let area = height * width;
    return area;
    }}
    //console.log("function calculateArea");
    //alert("Function called")

//execution
console.log(calculateArea(20,3));//a function call
console.log(calculateArea(10));
console.log(calculateArea());

//function expression
const add = function(number_1, number_2 ){
    return number_1 + number_2;



}
console.log(add(10,20));

//arrow function
const multiply = (x,y) => x*y

console.log(multiply(10,20));

/**Javascript Arrays (related)*/
const scores = [45,56,67,67,78];
// access
//78
console.log(scores[4]);
//67
console.log(scores[2]);

//45
console.log(scores[0]);

//56
console.log(scores[1]);

let student_names=["omondi","wafula","kiprotich","nyambane","Toipan"];

//print out Kiprotich on the console window

console.log(student_names[2])

let governors =[
    [47,"Johnson Sakaja"],
    [1,"Abdullswamad Sheriff"],
    [21,"Irungu Kangata"]


]
//The governor of county number 1 is Abdullswamad Sheriff

console.log("The governor of county number",governors[1][0],"is",governors[1][1]);

//map (perfrom an operation on each element)
let doubled = scores.map(x => x *2);
console.log(doubled);

//properties
//The class has J studennts

console.log("The class has " , student_names.length, "students");

//Kenya has b governors
console.log("Kenya has" ,governors.length ,"Governors");

//for

for(let score of scores){
    console.log(scores);
}
//for each

scores.forEach(function(score){
    console.log("score:",score)
});


const student ={
    name :"Alice",
    age :20,
    passed :true,
    grade : 'A',
    "admission number":183380,
    course: "BBIT",
    group : "2A",
    attendance: 20,
    addAttendance: function(){
        this.attendance += 1;


    }

};
console.log('My name is', 
    student.name,"my admission number is",
    student["admission number"],
    "university"
);

//a method in the object
student.addAttendance();//add attendance by 1
console.log(student.attendance);//21

//array of objects
let bbit_2b_students = [
    {adm: 223251 , name :"Blessing"},
    {adm :192977 , name :"Ryan"},
    {adm :222024 , name :"Ambrose"},
    {adm :220941 , name :"Neema"},

];
//print out the names of all students  in bbit 2b using a loop
bbit_2b_students.forEach(function(student){
    console.log(student.name)
});

//getting the keys of an object as an array
console.log(Object.keys(student));

//getting the values of an object as an array
console.log(Object.values(student));

//getting both keys and values of an object as an array
console.log(Object.entries(student));

/*DOM -Document Object Model(tree -like)*/
console.log(document);


//Elements on our page (variables)
const heading = document.querySelector("#mainHeading");
console.log(heading);

const aboutSection = document.getElementById('about');
console.log(aboutSection);

//all the sections
const allSections = document.querySelectorAll('section');
console.log(allSections);

const allNavLinks = document.querySelectorAll("nav a");
console.log(allNavLinks);

let aboutParagraph = document.querySelector("#about p");

//change its text
aboutParagraph.textContent="This text was changed!";
aboutParagraph.style.color ="red";

//setting/setter - updating the page from js
const previewImage = document.querySelector("img");
console.log(previewImage);
//via the DOM
previewImage.setAttribute("title","New Title of Image");
previewImage.setAttribute("alt","New alternate text for the image");
console.log(previewImage.alt)
console.log(previewImage.title)

//Event Handling - Events(user events - click,key events,scroll)
//get the element of interest - button with an id of changeTextBtn
let changeTextBtn = document .querySelector("#changeTextBtn");
let demoText = document .querySelector("#demoText");
//we are handling the click event of the button with an id of changeTextBtn
changeTextBtn.addEventListener("click",function(event){
    console.log("someone clicked me!");
    demoText.textContent = "I have been changed when you clicked";
    demoText.style.color = "orange";
    demoText.style.fontSize = "16px";
});

//use case 2
let highlightSectionsBtn = document.querySelector("#highlightSectionsBtn");
highlightSectionsBtn.addEventListener("click",function(event){
    document.querySelector("#about").classList.toggle("section-highlight");

    //highlight all the sections
    //document.querySelectorA("section").classList.toggle("section-highlight");

    document.querySelectorAll("section").forEach(function(section){
        section.classList.toggle("section-highlight")
    });

});
//get the textbox with id name input
document.querySelector("#nameInput").addEventListener("input",function(event){
    document.querySelector("#nameOutput").textContent ="Hello "+document.querySelector("#nameInput").value + "!";



});
//case 4 - character counter
let gtaCommentTextArea = document.querySelector("#commentInput");
let charCountParagraph = document.querySelector("#charCount");

gtaCommentTextArea.addEventListener("input",function(e){
    //code goes here a.k.a ehat will be executed when the
    //event happens
    

   
    //count the number characters
    let numberOfChars = gtaCommentTextArea.value.length;

    //prevent the user from typing after 60
    if(numberOfChars > 60){
        //prevent the default behavior of the event 
        e.preventDefault();
        gtaCommentTextArea.readOnly= true;
    } else{
       //update the paragraph
       charCountParagraph.textContent="Characters:" + numberOfChars;
    }
    // number of words

});

// case 5- keyboard events
let passwordInput = document.querySelector("#keyOutput");
//the event listener
// when you press a key, anywhere on the page coz
// we've attached it to the entire page not just one element
document.addEventListener("keydown",function(event){
    //updating the paragraph
    keyOutputParagraph.textContent="You pressed: " + event.key;
});

//case 6 - todo list, wish list
let wishlistInput = document.querySelector("#wishlistInput");
let wishListButton = document.querySelector("#wishlistForm button");
//<ul></ul>
let wishList = document.querySelector("#wishListItems");

wishListButton.addEventListener("click",function(event){
    //prevent the form from being submittied
    event.preventDefault();

    //read ehatever is in the wishListInput
    let wishListInputValue = wishlistInput.value;
    console.log(wishListInputValue);
    
    //update the list if the wishListInputValue != null
    if(wishListInputValue !=""){
        //console.log("wishListInputValue");
        let li= document.createElement("li");
        let button = document.createElement("button");
        button.textContent = "Delete";
        li.textContent = wishListInputValue;
        
        li.appendChild(button);

        //we append the list to the UL
        wishList.appendChild(li);

        //finally we clear what the user typed in the input field
        wishlistInput.value = "";
    }

});

    