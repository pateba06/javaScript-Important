// accessing arrays
// const matrix =[
//   [1,3,4],
//   [2,3,4],
//   [3,4,4]
// ]
// matrix[1][2];

// initialise new array
// Array(12).fill(0);//?

//array length/push/pop/unshift/shift
// a=[1,2,3,4,5,6];
// a.length;//?
// a.push(50);//?
// console.log(a);//?
// a.pop();//?
// console.log(a)
// a.shift();//?
// console.log(a)

//joining two arrays - concat
// const a = [1,2,3,4];
// const b = [4,5,6,3,5];
// const c = a.concat(b);//?

//spread operator - it will work same as concat ..it will combine the array
// const a = [1,2,3];
// const b = [4,5,6,7];
// const c = [...a,...b];//?
// const d =[...a,...b,...c];//?

//while loop
// const list =['a','b','c','d'];//?
// let i=0;//?
// while (i < list.length){
//   console.log(list[i]);//?
//   console.log(i);//?
//   i = i+1;//?
// }

//do while loop
// const list =['a','b','c','d'];//?
// let i=0;//?
// do{
//   console.log(list[i]);//?
//   i = i +1;//?
// }
// while (i<list.length);//?

// const namee =['badal','sheetal','dhaval','aara','aaral'];
// let i=0;
// while(i < namee.length){
//   console.log(namee[i]);//?
//   console.log(i);//?
//   i=i+1;//?
// }

//for loop
// let list =[1,2,3,4,5,6,7,8,9,10];
// for (let i =0; i < list.length;i ++){
// console.log(list[i]);
// }

// let product =['iphon3','iphone4','iphone5','iphone6','iphone7','iphone8']
// for (i=0;i < product.length ;i++){
// console.log(product[i]);
// }

//for of loop
// let product =['iphon3','iphone4','iphone5','iphone6','iphone7','iphone8'];

// for (let pro of product){
//   console.log(pro);
// }

// let product =[1,2,3,4,5,6,7];
// for (let pro of product){
//   console.log(pro+1);
// }

//normal function and function using arrow
//example of normal function
//let getData = function (){
// }
//getData()
//arrow function
//let getData =() =>{
// }

//if function body contains single statment , we can omit the parentheses and write everything in single line
//example
//const getData = ()=>console.log('hi');

//parameters are passed in parentheses
//example
// const getDate = (param1,param2) =>
// console.log(para1,param2)

//arrow functions allow you to have an implicit return - values are returned without having to use the retrurn keyword
//example
// const getData = () => 'test'
// getData() //?

//practice arrow function
//Example 1
// let a =100;
// addFun=()=>(a + 100);
// addFun();//?

// //class can hold properties like name and methods
// class Person {
//     hello() {
//         return "Hello, my name is badal";
//     }
// }
// //we can invoke methods on an instance of class
// const employee = new Person(); //?
// employee.hello(); //?

//There is a special method called constructor () that we can use to initialize the class properties
//when we create a new object instances
// class Test {
//     constructor(name) {
//         this.name = "badal patel"
//     }
//     test2() {
//     return 'my name is badal' + this.name; //?
//     }
// }


/*
Asynchonous Programing and callbacks
Most of the time , Java Script code is run synchronosuly.
this means that a line of code is executed, then the next one is executed, and so on.
Everything is as you expect, and how it works in most programming languages.
However, there are times when you cannot just wait for aline of code to execute
You can't just wait 2 seconds for a big file to load, and halt the program completely.
you can't just wait for a network resource to be downloaded before doing something else
java script solves this problem by using callbacks
one of the simplest examples of how to use callbacks is with timers. Timers are not part of javaScript,
but they are provided by the browser and Node.js.

The setTimeout() function accepts 2 arguments;a function and a number. 
The number is the number is the milliseconds that must pass before the function is ran

*/
// console.log('before');
// setTimeout(()=>{
// console.log ('Hello badal')},2000);
// console.log('after');