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

