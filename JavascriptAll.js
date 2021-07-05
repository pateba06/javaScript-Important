// ignore //? at the end of command I am using quokka in visual studio to get answer quickly

/*******************************************************************  *  * ***************************************************************/

/***********************************************************************************************************************
 *   we will see practical examples of string, substring, converting string to numbers in javascript****************
 * we will use indexOf() , lastIndexOf() and substring()****************************************************************
 * *********************************************************************************************************************/


// spliting string using substring  indexOf and Last Index of
var email = "badlarpatel@gmail.com";

var emailAddress = email;//?
var emailPart = email.substring(0,email.indexOf("@"))//?
// using last Index of
var emailPartLastIndex = email.substring(0,email.lastIndexOf("@"))//?
var domainPart = email.substring(email.indexOf("@") + 1)//?
// domainPart using last index
var domainPartLastIndex = email.substring(email.lastIndexOf("@") + 1)//?


/***********************************************************************************************************************
 *  Conditional Statements In Java Script
 * if statement
 * if else statement
 * if else if else statment
 * switch
 * ternary operator --- shortcurt for an if else statement
 * *********************************************************************************************************************/

//--------------------------------- Example If Statmeent-----------------------------------///

var userInput = 4 ; // change the number and you will see it will change the winner

if (userInput === 1){
    console.log("Number 1 is winner")
}
if (userInput === 2){
    console.log("Number 2 is winner")
}
if (userInput === 3){
    console.log("Number 3 is winner")
}
if (userInput != 1 && userInput != 2 && userInput != 3){
    console.log("Your number is not between 1 and 3")
}


//--------------------------------- Example If else Statmeent-----------------------------------///
var userInput1 = 4 ;
if (userInput1 === 1){
    console.log("Number 1 is winner")
} else if
 (userInput1 === 2){
    console.log("Number 2 is winner")
}
else if(userInput1 === 3){
    console.log("Number 3 is winner")
}
else  {
    console.log("Your number is not between 1 and 3")
}


//--------------------------------- Example Use Switch Statment to increase readeablity-----------------------------------///

var userInput2 = 3 ;
switch (userInput2) {
    case 1:
        console.log("Number 1 is winner")
        break;ú
    case 2:
        console.log("Number 2 is winner")
        break;
            
    case 3:
        console.log("Number 3 is winner")
        break;
        default:
            console.log("Your number is not between 1 and 3")
            break;
}

/***********************************************************************************************************************
 * Ternery Operator --boolean expression                                                          ? "True" :"False"
 * *********************************************************************************************************************/

// Lets see number is even or odd

// Option 1 --normal way to do 
var userInput3 = 8 ;
var message = "";

function oddeventest (){
    if ( userInput3 % 2 == 0){
        message ="Your number is even"
    } else {
        message ="Number is Odd"
    }
    return message
}
oddeventest() //?


// Option 2 -- using ternery operator
var userInput4 = 6;
var message1 = userInput4 % 2 == 0 ? "Your number is even" : "Your Number is odd";
console.log(message1)


// Month return  ---Using If Else Statement

                    var monthNumber = 5;
                    var monthName = "";

                    function monthNamecheck (){
                        if ( monthNumber == 1){
                            monthName = "January"
                        } else if (monthNumber == 2) {
                            monthName = "Febrauary"
                        } else if (monthNumber == 3) {
                            monthName = "March"
                        } else if (monthNumber == 4) {
                            monthName = "April"
                        } else if (monthNumber == 5) {
                            monthName = "May"
                        } else if (monthNumber == 6) {
                            monthName = "June"
                        } else if (monthNumber == 7) {
                            monthName = "July"
                        } else if (monthNumber == 8) {
                            monthName = "August"
                        } else if (monthNumber == 9) {
                            monthName = "September"
                        } else if (monthNumber == 10) {
                            monthName = "october"
                        } else if (monthNumber == 11) {
                            monthName = "November"
                        } else if (monthNumber == 12){
                            monthName = "December"
                        } else {
                            monthName = "Incorrect month name"
                        }

                        return monthName
                    }

                    console.log(monthNamecheck())

// Month return  ---Using ternery operator for multiple if else condition  
var monthNumber1 = 3;
var monthName2 = monthNumber1 == 1 ? "January" : monthNumber1 == 2 ? "February" : monthNumber1 == 3 ? "March" : monthNumber1 == 4 ? "April" : "Month number are not jan to feb";
console.log(monthName2)


/***********************************************************************************************************************
 *  Loops in Java Script
 * while loop
 * With while loop 
 * The initialization of the variable is done at one place
 * Boolean condition is checked at another place
 * the variable participating in the boolean expression is updated at another place
 * *********************************************************************************************************************/

// While Loop example ..we want to print all even numbers till the number enter

var target = 10;
var start = 0 ;

while (start <= target){
    console.log(start)
     start = start + 2
}

// While Loop example with Break ..we want to print all even numbers till the number enter ...we don't want it to exceed 100

var target1 = 10000;
var start1 = 0 ;

while (start1 <= target1){
    console.log(start1)
    start1 = start1 + 2
    if (start1 > 100)
    break;
}

// While Loop example with Continue ...continue will skip that blog and make it run 
 var start3 = 0;
 while (start3 < 10){
    start3 = start3 + 1;
     if (start3 % 2 ==0){
         continue
     }
     console.log(start3)

 }


/***********************************************************************************************************************
 *  Loops in Java Script
 *  Do while loop ---- Pending
 * *********************************************************************************************************************/





/***********************************************************************************************************************
 *  Loops in Java Script
 *  for loop ---- Pending
 *  With for loop 3 things can be done in one place i.e variable intialization, boolean condition check and updating the 
 *  variable participating in the boolean expression
 * *********************************************************************************************************************/

var targ1 = 10;
for (var start10 = 0; start10 <= targ1 ; start10 = start10 +2){
    console.log(start10)//?
}


/***********************************************************************************************************************
 * Arrays In java Script
 * *********************************************************************************************************************/

// Populating an even numbers array using for loop
var evennumbersArray = [];
for (var i=0; i<=5 ;i++){
    evennumbersArray[i] = i * 2;
}
console.log(evennumbersArray);


/***********************************************************************************************************************
 * Push,Pop,shift and Unshift method In java script
 * push() method adds news items to the end of the array
 * pop () method removes the last element of the array
 * shift() method  removes 1st element of the array
 * unshift() method adds elemsents at the start of an array
 * *********************************************************************************************************************/

arrayTest = [2,4,6,8];
// Push Method Example
arrayPush = arrayTest.push(10);
console.log(arrayPush)
console.log(arrayTest)
// Pop Method Example
arraypop = arrayTest.pop(arrayTest.length -1);
console.log(arraypop)
console.log(arrayTest)
// Shift method Example
arrayShift = arrayTest.shift();
console.log(arrayTest)
console.log(arrayShift)
// Shift method Example
arrayUnShift = arrayTest.unshift(1);
console.log(arrayUnShift)
console.log(arrayTest)


/***********************************************************************************************************************
 * JavaScript Array Mutators
 * Mutators can modify the array object. While non-mutators method does not modify array obj
 * mutotars methods push,pop,shift,unshift,reverse,sort,splice
 * non-mutator methods contains, indexOf, lastIndex
 * *********************************************************************************************************************/


/***********************************************************************************************************************
 * Sort Array Mutators
 * sort() method - sorts the elements of an array. By default, the sort()method sorts the values by converting
 * them to strings and then comparing those strigns. This work well for strings but not for numbers
 * *********************************************************************************************************************/
// sort() it works perfectly for string
var myArray = ["Zimbabmwe", "India" ,"Australia" ,"USA" ,"Dubai"]
console.log(myArray.sort())
// reverseing the order
console.log(myArray.sort().reverse())

// sort() method does not work as expected with numbers
var myArrayNumber = [10,2,1,5,4];
console.log(myArrayNumber.sort());

// sorting numbers we can achieve by other way is
var myArraySortNumber =[10,2,4,1,11,44,22];
// sorting numbers in ascending
console.log(myArraySortNumber.sort(function (a ,b){return a -b}))
//sorting numbers in descending
console.log(myArraySortNumber.sort(function (a ,b){return a -b}).reverse())


/***********************************************************************************************************************
 * Splice method
 * Add or Remove elements from an array
 * array.splice(index,deleteCount,item1....itemx)
 * index --required .specifies at what position to add or remove items
 * deleteCount --required. the number of items to be removed. if set to 0,no items will be removed
 * item1,....,itemx --Optional. The new item(s) to be added to the story
 * *********************************************************************************************************************/


var myArray = [1,2,5];
// it will add 3 and 4 from index 2
myArray.splice(2,0,3,4);
console.log(myArray)
// it will delte 2 numbers position from index 2
myArray.splice(2,2)
console.log(myArray)



/***********************************************************************************************************************
 * ()filter method of JavaScript
 * ()filter method creates a new array and populates that array with all the elements
 * that meet the condition specified in a callback function
 * 
 * array.filter(callbackFuction[,thisArg])
 * callbackFunction --Required.Function that gets called for each elment of the array. if the function returns
 * true, the element is kept otherwise filtered
 * thisArg ---Optional. An objec to which the this keyword can refer in the callbackfn function
 * 
 * The filter method calls the callebackfn function one time for each element in the array
 * if the callback Function returns false for all the elements of the array, the length of the new array that will be return is o
 * 
 * callback function sytax
 * function callbackFunction(value,index,array)
 * value --the value of the element in the array
 * index --the index position of the element in the array
 * array --the source array object that contains the element
 * *********************************************************************************************************************/

// Example 1  --using if else 
var myArray = [1,2,3,4,5,6,7,8,9,10];

// we want to filter out odd numbers and keep only even numbers
// so 1st thing we have to do is specify callback function
function isEven(value,index,array){
if (value % 2 ==0){
    return true
}else{
    return false
}

}
// filter method is instant method
var result = myArray.filter(isEven)
console.log(result)



//////////////////// Example 2 ///////////////////
var myArray1 = [10,11,12,13,14,15,16,17,18,19,20];
function isEven1(value,index,array){
    return value % 2 == 0;
}
// filter method is instant method
var result1 = myArray1.filter(isEven)
console.log(result1)



///////////// Example 3 --by passing arg in filter///
var myArray2 = [30,31,32,33,34,35,36,37,38,39,40];
// filter method is instant method
var result2 = myArray2.filter(function(value,index,array){
    return value % 2==0
})
console.log(result2)

 

//////Very important example asked in interview  remove duplicate from Array///////
// remove duplicate
// Example1
var myArray = ["sam" ,"John" ,"lilly" ,"sam","Robert", "John"]
var result = myArray.filter(function (value,index,array){
    return array.indexOf(value) == index;
})
console.log(result)

// Example2
var empName = ["Dhaval" , "Badal" , "Dhaval" , "Sheetal" , "Saroj" ,"Sheetal"]
var result = empName.filter(function(value,index,array){
    return array.indexOf(value) == index;
})
console.log(result)



/***********************************************************************************************************************
 * Two Dimensonal Array
 * do in html
 * *********************************************************************************************************************/

//  <!DOCTYPE HTML>
//  <html>
//  <body>
 
//  <script>
//  // Two Dimensional array
 
//  // Example 1
//  var myArray1 = new Array(3);
 
//  for (var i=0;i<3;i++){
//      myArray1[i] = new Array(3)
//  }
//  myArray1[0][0] = 1;
//  myArray1[0][1] = 2;
//  myArray1[0][2] = 3;
 
//  myArray1[1][0] = 4;
//  myArray1[1][1] = 5;
//  myArray1[1][2] = 6;
 
//  myArray1[2][0] = 7;
//  myArray1[2][1] = 8;
//  myArray1[2][2] = 9;
//  // nested for loop
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//     document.write(myArray1[i][j] + "&emsp;");
//  }
//  document.write("<br>")
//  }
//  document.write("<hr>")
 
//  // Example2
//  var myArray2 = new Array(3);
 
//  for (var i=0;i<3;i++){
//      myArray2[i] = new Array(3)
//  }
 
//  var start = 1;
 
//  // Populating value in array
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//          myArray2[i][j] = start;
//          start = start + 1;
//  }
//  }
 
//  // nested for loop
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//     document.write(myArray2[i][j] + "&emsp;");
//  }
//  document.write("<br>")
//  }
//  </script>

//  </body>
//  </html>


/***********************************************************************************************************************
 * Two Dimensonal Array
 * Performing additon between 2 two dimensional arrays in javascript
 * the first 3*3 array should contain numbers from 1 to 9
 * the second 3*3 array should contain numbers from 9 to 1
 * the number present at each index position in the first and second array should be 
 * added and the result should be stored in third 3*3 array
 * *********************************************************************************************************************/
//  <!DOCTYPE HTML>
//  <html>
//  <body>
 
//  <script>
//  // Two Dimensional array
 
//  // Creating 1st array
//  var myArray2 = new Array(3);
 
//  for (var i=0;i<3;i++){
//      myArray2[i] = new Array(3)
//  }
 
//  var start = 1;
 
//  // Populating value in array
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//          myArray2[i][j] = start;
//          start = start + 1;
//  }
//  }
 
//  // nested for loop
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//     document.write(myArray2[i][j] + "&emsp;");
//  }
//  document.write("<br>")
//  }
 
//  document.write("</br>")
//  document.write("&emsp;+")
//  document.write("</br>")
 
//  // Creating 2nd array
//  var myArray3 = new Array(3);
 
//  for (var i=0;i<3;i++){
//      myArray3[i] = new Array(3)
//  }
 
//  var start1 = 10;
 
//  // Populating value in array
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//          start1 = start1 - 1;
//          myArray3[i][j] = start1;
         
//  }
//  }
 
//  // nested for loop
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//     document.write(myArray3[i][j] + "&emsp;");
//  }
//  document.write("<br>")
//  }
 
 
//  document.write("</br>")
//  document.write("&emsp;=")
//  document.write("</br>")
 
 
//  // addition of 1st and 2nd array
//  var myArray4 = new Array(3);
 
//  for (var i=0;i<3;i++){
//      myArray4[i] = new Array(3)
//  }
 
 
//  // Populating value in array
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//          myArray4[i][j] = myArray3[i][j] + myArray2[i][j]
         
//  }
//  }
 
//  // nested for loop
//  for (var i=0;i<3;i++){
//      for (var j=0;j<3;j++){
//     document.write(myArray4[i][j] + "&emsp;");
//  }
//  document.write("<br>")
//  }
 
//  </script>
 
 
 
//  </body>
//  </html>


/***********************************************************************************************************************
 * Different ways of defining function in java script
 * *********************************************************************************************************************/

// Example 1 - Defining a function and then calling it
function addNumbers(first,second){
    var result = first + second;
    return result;
}

var sum = addNumbers(20,30);
console.log(sum);

// Example 2 - A function call is present before the function definition

var sum1 = addNum(10,20);
console.log(sum1);
function addNum(firstnum,secondnum){
    var result = firstnum + secondnum;
    return result
}

// Example 3 - named function expression

var factorial = function computeFactorial(number)
                    {
                        if(number<=1){
                            return 1
                        }
                        return number * computeFactorial(number-1);
                    }   
var result = factorial(5);
console.log(result)


/***********************************************************************************************************************
 * Local and Global variable
 * Local Variables  - are the variables declared with in a function that contains them.
 * local variables are created when a function starts and deleted as soon as the function completes
 * *********************************************************************************************************************/

// Example 1 local variable -- only access inside the function block

function localEg1 (){
    var greeting ="Hello"
    // The variable greeting is available in the function 
    greeting = greeting + "JavaScript"
    return greeting
}
console.log(localEg1())

// the variable greeting is not available outside the function
// console.log(greeting)


// Example 2 Global Variable
var greeting1 = "hello global";
function globalEg2(){
// the variable greeting1 is available in the function 
greeting1 = greeting1 + "javaScript";
return greeting1
}

console.log(globalEg2())


// // Example 3 --Global Variable -- if you assign a value to a variable that has not been declared.
// it will automatically become a global variable , even if it is present inside a function

function globaleg3(){
    // the variable greeting3 is not declared but a value is assigned.
    // so it will automatically become a global variable
    greeting3 ="Hello global variable as I am declare here"
}
// able to access greeting3 as it is assinged value direclty before declaring variable
// console.log(greeting3)


// Example 4 - Global Variable/local variable
// a local variable can have the same name as a global variable. changing the value of one variable
// has no effect on other. if the variable value is changed inside a function, and if a local version of 
// the variable exists then the local variable gets modified.
// if the variable value is changed outside a function then the global variable gets modified.

var greetings4 ="This is from global Variable"
function example4(){
    var greetings4 = "This is from local Variable"
    return greetings4
}
// This line will modify the global greeting variable
greetings4 +="!!!"
// Calling function  accessing local greetings4
console.log(example4());
// the global value of greetings 4 is different
console.log(greetings4)





/***********************************************************************************************************************
 * Working with dates in java script
 * *********************************************************************************************************************/

// example 1 -- getting date

var d = new Date();
console.log(d);

// example 2 -- creating specific date object in java script using date string

var dob = new Date("December 14, 1986 11:20:00");
console.log(dob);

/***********************************************************************************************************************
 * Some useful Date Object methods in javascript
 * getFullYear() --returns the full year (all four digits)
 * getMonth() --returns the month number (from 0-11)
 * getDate()--retuns the day of the month (from 1-31)
 * getDay() -- returns the day number of the week (from0-6)0 is sunday
 * getHours() getMinutes() getSeconds() getMilliSeconds()
 * *********************************************************************************************************************/

// Example 1 get month name 


var dob = new Date("December 14, 1986 11:20:00");
var monthNumber = dob.getMonth()
console.log(monthNumber)

// getting month name from month
function getMonthNameFromMonthNumber(monthNumber){
    var monthNames = ["January","February","March","April","May",
    "June", "July" , "August" , "September","October" , "November", "December"];
    return monthNames[monthNumber];
}

console.log(getMonthNameFromMonthNumber(monthNumber))


/*******************************************************************  *  * ***************************************************************/

/******************************************************************
 *  Create an Array
 * ***************************************************************/
// const namee =["Apple" ,"Bananana" , "Oranges"]
// console.log(namee.length)


/******************************************************************
 *   Access an Array item using the index position
 * ***************************************************************/
// const fruits =["Apple" ,"Bananana" , "Oranges"]
// let first = fruits[0] //?
// let last =fruits[fruits.length -1] //?

// // Loop over an Array
// const fruits =["Apple" ,"Bananana" , "Oranges"]

// fruits.forEach(function(item,index,array){
//     console.log(item,index) //?
// })



/******************************************************************* 
 *  Push/Pop/shift/unshift
 * ***************************************************************/
// // Add an item to the end of an Array
// let fruits =["Apple" ,"Bananana" , "Oranges"]

// // adding at the end of array  -- Push
// let newLength = fruits.push('Pineapple') //?
// console.log(fruits)
// console.log(newLength)

// // deleteting from the end of array  -- pop
// let deletefruit = fruits.pop()
// console.log(fruits);
// console.log(deletefruit)

// // Adding at the start of array  -- pop
// let addfruitstart = fruits.unshift('stawberry') 
// console.log(fruits);
// console.log(addfruitstart)

// // Deleting at the end of array  -- pop
// let deletefruitstart = fruits.shift()
// console.log(fruits);
// console.log(deletefruitstart)

/******************************************************************* 
 *  Find the index of an item in the Array
 * ***************************************************************/

// const fruits =["Apple" ,"Bananana" , "Oranges"]

// fruits.push('mango') //?
// let pos = fruits.indexOf('Bananana');
// console.log(pos);



/******************************************************************* 
 * Remove an item by index position
 * ***************************************************************/

// const fruits =["Apple" ,"Bananana" , "Oranges"]
// fruits.push('mango') //?
// let pos = fruits.indexOf('Bananana');//?
// let revoveItems =fruits.splice(pos,1) 
// let revoveItems2 =fruits.splice(pos,2) //?



/******************************************************************* 
 * Remove items from an index position
 * ***************************************************************/

//  const fruits =["Apple" ,"Bananana" , "Oranges" , "Strawberry" ,"Pineapple"]
//  let pos = 1
//  let n =2
//  removeVariable = fruits.splice(pos,n)
//  console.log(fruits)


// /******************************************************************* 
//  * Copy an Array
//  * ***************************************************************/
//  const fruits =["Apple" ,"Bananana" , "Oranges" , "Strawberry" ,"Pineapple"]
//  let pos = 1
//  let n =2
//  removeVariable = fruits.splice(pos,n)
//  console.log(fruits)
//  let shallowCopy = fruits.slice() //?



// /******************************************************************* 
//  * Array.prototype.at() Array.at()
//  * ***************************************************************/
//  / Our array with items
//  const cart = ['apple', 'banana', 'pear'];

//  // A function which returns the last item of a given array
//  function returnLast(arr) {
//    return arr.at(-1);
//  }

//  // Get the last item of our array 'cart'
//  const item1 = returnLast(cart);
//  console.log(item1); // Logs: 'pear'

//  // Add an item to our 'cart' array
//  cart.push('orange');
//  const item2 = returnLast(cart);
//  console.log(item2); // Logs: 'orange



// /******************************************************************* 
// This example compares different ways to select the penultimate (last but one)
//  item of an Array. While all the methods shown below are valid, this example 
// highlights the succinctness and readability of the at() method.
//  * ***************************************************************/

// // Our array with items
// // Our array with items
// const colors = ['red', 'green', 'blue'];

// // Using length property
// const lengthWay = colors[colors.length-2];
// console.log(lengthWay); // Logs: 'green'

// // Using slice() method. Note an array is returned
// const sliceWay = colors.slice(-2, -1);
// console.log(sliceWay[0]); // Logs: 'green'

// // Using at() method
// const atWay = colors.at(-2);
// console.log(atWay); 



//******************************************************************* 
// The copyWithin() method shallow copies part of an array to another location 
// in the same array and returns it without modifying its length.
// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)
//  * ***************************************************************/


// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // copy to index 0 the element at index 3
// console.log(array1.copyWithin(0,3,4))

// // copy to index 1 all elements from index 3 to the end

// console.log(array1.copyWithin(1,3,4))//>



//******************************************************************* 
// Array.prototype.find()
//  * ***************************************************************/
// const array1 = [5, 12, 8, 130, 44];
// const findTest = array1.find(x => x > 10)//?


//******************************************************************* 
// // Arrow function
// find((element) => { ... } )
// find((element, index) => { ... } )
// find((element, index, array) => { ... } )

// // Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// // Inline callback function
// find(function callbackFn(element) { ... })
// find(function callbackFn(element, index) { ... })
// find(function callbackFn(element, index, array){ ... })
// find(function callbackFn(element, index, array) { ... }, thisArg)
//  * ***************************************************************/


/***********************************************************************************************************************
 * For Loops
 * forEach
 * For in
 * for of
 * *********************************************************************************************************************/

// Example 1  -- for loop
let pets = ['Dog' , 'Cat', 'Snake' , 'Lizard', 'Tiger']
pets[5]='fish';
pets['species'] ='mamals' // it will only come in "for in" 
console.log(pets);


// itereating over integers
for (let i=0; i<pets.length; i++){
    console.log(pets[i])
}

// forEach it takes callback function as a parameter.it takes each element as parameter
pets.forEach(pet =>{
    console.log(pet)
})

// for in loop

for(petid in pets){
    // pet will take index of elements
    console.log(petid);
    // to get value
    console.log(pets[petid])

}

// for of loop

for(pet of pets){
    console.log(pet)
}



/***********************************************************************************************************************
 *Array Iteration Methods
 * *********************************************************************************************************************/

//  Example 1 : forEach   
array1=[1,2,3]
array1.forEach(function(item,index){
    console.log(item,index)
})

//  Example 2 : map   
const three = [1,2,3];
const double = three.map(function(item){
    return item *2
})
console.log(double)

// Example 3: Filter
const ints = [1,2,3,4,5,6,7,8,9,10];
const evenNum = ints.filter(function(item){
    return item % 2 ==0;
})
console.log(evenNum)

// Example 4: reduce

const array2 =[1,2,3];
const sumReduce = array2.reduce(function(result,item){
    return result + item
},0);

console.log(sumReduce)


// Example 5: Some  
const numArray =[1,-4,2,3,-7,-8];
const hasNegativeNumb = numArray.some(function(item){
    return item < 0
})
console.log(hasNegativeNumb)


// Example 6 : Every
const numArray1 = [1,2,3]
const allPositiveNumbers = numArray1.every(function(item){
    return item > 0
})
console.log(allPositiveNumbers)

// Example 7 : find
const objects = [{id:'a'} , {id:'b'} , {id:'c'} , {id:'d'} ];
const found = objects.find(function(item){
    return item.id =='b';
})
console.log(found)

// Example 8 : find index
const objects2 = [{id:'a'} , {id:'b'} , {id:'c'} , {id:'d'} ];
const foundIndex = objects2.findIndex(function(item){
    return item.id =='b';
})
console.log(foundIndex)



/***********************************************************************************************************************
*Objects.keys(obj)
*Objects.values(obj)
*Objects.entries(obj)
*Create an iterable object from the Object i.e converting object into array
 * *********************************************************************************************************************/

let gameOfThrones ={
    cersei:'Lannister',
    arya: 'Stark',
    jon: 'snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah:'Mormont',
    sandor:'clegane'
}

// for(let prop of arr)  -- We can use on array not on object. but we can covert object into array and then use this method
// forEach() filter () map () reduce () -- we cannot use on object but we can convert object into array then use this methods

// Keys will give an array. iterable object which will have all the keys in array
let keys = Object.keys(gameOfThrones);
console.log('keys', keys)

// value will give an array. iterable object which will have all the Values in array
let vals = Object.values(gameOfThrones);
console.log('vals', vals)

let entries = Object.entries(gameOfThrones);
console.log('entries',entries)

// two get value of 'snow'
console.log(entries[2][1])

