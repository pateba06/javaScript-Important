/*
Syncronous & Asynchronous Java Script
-Synchronous:- An synchronous request blocks the client until opereation completes. i.e browser is
unresponsive. In such case, javascript engine of the browser is blocked
- Asynchronous (AJAX web-application model)
An asynchronous request doesn't block the client i.e browser is responsive
at that time ,user can perform another operations also. In such case java script engine of the
browser is not blocked. setTimeout,AJAX api calls, Dom manipulation comes in Aysnchronous.
let see example
*/

// //  1 - Synchronous
// //     const synch1 = () => {
// //         console.log(" Synchronous function 1 is starting");
// //         synch2();
// //         console.log(" Synchronous function 1 is ending")
//     }
    // const synch2 = () => {
    //     console.log("Synchronous function 2 is starting");
    // }
    // synch1()

// 2 - Asynchronous
// const asynch1 = () => {
//     console.log("Asynchronous function 1 is starting");
//     asynch2();
//     console.log("Asynchronous function 1 is ending")
// }
// const asynch2 = () => {
//     setTimeout(() => {
//         console.log("Asynchronous function 2 is starting");
//     },2000);
// } 
// asynch1()    

/*
Understanding Callbacks,Promises,Rxjs Observables and async/await
https://www.youtube.com/watch?v=jgWnccjXR4I
Callbacks Codepen: https://codepen.io/maximilian-schwarz...
Promises Codepen: https://codepen.io/maximilian-schwarz...
RxJS Observables Codepen: https://codepen.io/maximilian-schwarz...
async/ await Codepen: https://codepen.io/maximilian-schwarz...
- we will need html and js file both
*/


// Fat Arrow function 
// es5 Example writing function

// var sum = function () {
//   var a = 5;
//   var b =10 ;
//   return a + b;
// }
// console.log(sum())

// es6 example writing function using fat arrow or arrow function. const sum =() => {}

// example-1
// const sum = () => {
//   let a =5;
//   let b =10;
//   return a +b;
// }
// console.log(sum())


// example -2  -
// let a =25;
// let b =35;
// const sum = () => {
//   return a+b;
// }
// console.log(sum());

// example 3 -- ignore {}/return ---if one line need to pass in function
//  we can ignore writing curly brackets also we do not need to give  return if there is single line of code 
// let a=100;
// let b=200;
// const sum = () => a+b; 
// sum();//?

// // example 4 -- paasing 1 parameter 
// let a =500;
// const sum = (b) => a+b;
// sum (100);//? 

// example 5 -- paasing 2 parameter 
// const sum = (a,b) => a+b;
// sum (100,300);//? 



// /------------------------------------------------------------------------------------------------------------------------------------
/* How to search and filter out falsy elements(values)
 clean the data. so we will use filter
*/

// var data=[
//   {name: 'badal' , age: 50},
//   {name:'john' , age: 40},
//   {name:'robert' , age: null},
//   {name:'macys' , age: undefined},
//   {name:'julia' , age: undefined},
// ];

// const newAges = data.filter ( (elem) => {
//   // console.log(elem.age);
//   return elem.age != undefined;//?
// })

// console.log(newAges);

// /------------------------------------------------------------------------------------------------------------------------------------

/* */