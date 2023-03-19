// Return the Sum of Two Numbers

var a = 20;
var b = 30
function sum (){
    return a + b
}
console.log(sum())

// Convert Minutes into Seconds

var input = input;

function minToSec (input){
return input * 60
}
console.log(minToSec(5))

// Other Option converting arrow function
const convert =(minutes) => minutes * 60;
console.log(convert(5))


// Return the Next Number from the Integer Passed
var num = 0;
function nextNum(num){
    return ++num
}
console.log(nextNum(2))

        // other way
const num1 = (nextNum) => ++ nextNum;
console.log(num1(2))



// Area of a Triangle
// it is 1/2 height and base

var h = 0;
var b = 0;
function areaTriangele(h,w){
    return 1/2 * h * w
}

console.log(areaTriangele(10,5))

        //Other way
const areaTriangle = (height,base) => 1/2 * height * base;
console.log(areaTriangele(10,7))   