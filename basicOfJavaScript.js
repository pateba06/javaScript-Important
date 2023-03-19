DATA TYPES

1. String Data Type: `The string data type is used to represent textual data (i.e. sequences of characters). Strings are created using single or double quotes surrounding one or more characters`

  ```js 
  var a = 'Hi there!';  // using single quotes
  var b = "Hi there!";  // using double quotes
  var a = "Let's have a cup of coffee."; // single quote inside double quotes
  var b = 'He said "Hello" and left.';  // double quotes inside single quotes
  var c = 'We\'ll never give up.';     // escaping single quote with backslash
  ```
2. Number Data Type:`The number data type is used to represent positive or negative numbers with or without decimal place, or numbers written using exponential notation e.g. 1.5e-4 (equivalent to 1.5x10-4).`
  ```js 
  var a = 25;         // integer
  var b = 80.5;       // floating-point number
  var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
  var d = 4.25e-6;    // exponential notation, same as 0.00000425
  ```
3.Boolean Data Type:`The Boolean data type can hold only two values: true or false. It is typically used to store values like yes (true) or no (false), on (true) or off (false), etc.`
```js 
 var isReading = true;   // yes, I'm reading
  var isSleeping = false; // no, I'm not sleeping
  ```
  ```js 
 var a = 2, b = 5, c = 10;
 
  alert(b > a) // Output: true
  alert(b > c) // Output: false
  ```
4. Object Data Type:`The object is a complex data type that allows you to store collections of data.An object contains properties, defined as a key-value pair. A property key (name) is always a string, but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function and other objects.`

  ```js 
      var emptyObject = {};
      var person = {"name": "Clark", "surname": "Kent", "age": "36"};

      // For better reading
      var car = {
          "modal": "BMW X3",
          "color": "white",
          "doors": 5
      }
  ```
5. Array Data Type:`An array is a type of object used for storing multiple values in single variable. Each value (also called an element) in an array has a numeric position, known as its index, and it may contain data of any data type-numbers, strings, booleans, functions, objects, and even other arrays. The array index starts from 0, so that the first array element is arr[0] not arr[1].`
  ```js 
    var colors = ["Red", "Yellow", "Green", "Orange"];
    var cities = ["London", "Paris", "New York"];
    alert(colors[0]);   // Output: Red
    alert(cities[2]);   // Output: New York
  ```
   
    
6. Null Data Type:`This is another special data type that can have only one value-the null value. A null value means that there is no value. It is not equivalent to an empty string ("") or 0, it is simply nothing.A variable can be explicitly emptied of its current contents by assigning it the null value.`
  ```js 
    var a = null;
  alert(a); // Output: null

  var b = "Hello World!"
  alert(b); // Output: Hello World!

  b = null;
  alert(b) // Output: null
  ```

7. Undefined Data Type:`The undefined data type can only have one value-the special value undefined. If a variable has been declared, but has not been assigned a value, has the value undefined.`
  ```js 
  var a;
  var b = "Hello World!"

  alert(a) // Output: undefined
  alert(b) // Output: Hello World!
  ```
                                                   
                                                   
                                                   Numbers Examples
  
  ```js 
  let number =34;
  let number1 =-1;
  let number2 =5.5;
  console.log(number);
  console.log(number1);
  console.log(number2);

  ```
  `operators` Try Below codes 1 by 1 to see how the operator performs
  
   ```js 
  let number =5.5 +2;
  console.log(number);
  ```
  
  ```js 
  let number =5.5 -2;
  console.log(number);
  ```
  
  ```js 
  let number =5.5 - -2;
  console.log(number);
  ```
  
  ```js 
  let number =5.5 * 2;
  console.log(number);
  ```

  
  ```js 
  let number =5.5 / 2;
  console.log(number);
  ```
  
  ```js 
  let number =6 % 2;
  console.log(number);
  ```
  
  ```js 
  let x =11;
  let num = x + 1 * 2;
  console.log(num);
  ```
  
  `our age represent as number, 1 dog age is 7 years to human 1 year.so we will add 1 to our age/7 for dog years`
  ```js 
  let age =26;
  let dogYears = (age + 1 )/7;
  console.log(dogYears);
  ```
  
  `Calculate percent, score 18,MaxScore 20 Percentage ?????`

  ```js 
  let studentScore =18;
  let maxScore = 20;
  let percent = studentScore / maxScore * 100;
  console.log(percent);
  ```
                           
                                            Rules For Creating Variables
  
Rule 1: You can not define variable more then once.

`Error because of re-declaring the variable. we can not define fName again`

```js
let fName='john';
let fName= 'tiger';
console.log(fName);
````

`Solution to above scenario. We are assigning new value to the existing variable we are not defining the fName again.`

```js
let fName='john';
fName= 'tiger';
console.log(fName);
````

Rule 2: There are rules related to variable names

`Variable name can not start with number. It can start with Letters or "_" or "$". Below code will show error `
```js
let 5 =4;
let result =5+5;
console.log(result);
````

Rule 3: Variable names cannot used reserved keywords

`There are many reserved keywords which we cannot used reserved keywords for naming variable. 
Below link has list of reserved keywords`
https://www.w3schools.com/js/js_reserved.asp



                                Booleans : It only returns true or false

`Static Boolean`

```js
let test1 =false;
console.log(test1);
//it will return false.
```

                                Boolean using Comparision Operators
                                
                                
`=== Equality Operator: comparision will check value and data type`
```js
let age =32;
let test1 =age === 32;
console.log(test1);
//it will return true.
```

```js
let age =32;
let test1 =age === 30;
console.log(test1);
//it will return false. As the value is not same.
```


`!== Not Equal Operator`
```js
let age =32;
let test1 =age !== 30;
console.log(test1);
//it will return True. As the value is not same .
```

`< Less than Operator `
```js
let age =32;
let test1 =age < 30;
console.log(test1);
//it will return false. 
```

`> Greater than Operator `
```js
let age =32;
let test1 =age > 30;
console.log(test1);
//it will return True. 
```

`<= Less than equal Operator `
```js
let age =32;
let test1 =age <= 32;
console.log(test1);
//it will return True. As it is equal to , so satisfy one condition
```

`>= Greater than equal Operator `
```js
let age =32;
let test1 =age >= 30;
console.log(test1);
//it will return false. As it is not greater or equal
```
# Conditional statements are used to perform different actions based on different conditions.

In JavaScript we have the following conditional statements:

* Use if to specify a block of code to be executed, if a specified condition is true
* Use else to specify a block of code to be executed, if the same condition is false
* Use else if to specify a new condition to test, if the first condition is false
* Use switch to specify many alternative blocks of code to be executed


# Basic of If Structure
```js
Default Structure--we should use 
if (){
}

//If we keep true the functions inside curly brackets will always run
 if (true){
 }

//If we keep boolean type false. The code will never run.
if (false){
 }
```
 
 
 ```js
 //The code will run and print "Hello" as test1 fulfil condition age<= 32.
 //The condition is true, so the arguement in the function will be passed and run the code.
 
 let age =32;
 let test1= age <= 32;
 if (test1){
     console.log("Hello ");
 }
 
 //The code will not print "Hello" as test1 does not fulfil condition age <= 30. 
 //so as the argument is false, the function won't be performed.
  let age =32;
 let test1= age <= 30;
 if (test1){
     console.log("Hello ");
 }
 
 ```
 
 
 
 
 ## Example of Pass or Fail...Try it yourself. Copy the code, and change marks 30 then 45 and see the result
  ```js
  let marks = 70;
  if (marks <= 40){
    console.log("fail");
  }
  if (marks > 40){
    console.log("pass");
  }
 ```


                                    If Else Example

```js
 \\Basic structure of If Else
 if (){
 } else {
 }
```
Let see If Else simple example, so if the account is locked we will call message "Welcome" if the account is locked we will call"account is locked"

```js
\\example 1: Lets keep the isAccountLocked=true;
  
let isAccountLocked=true;
if (isAccountLocked){
  console.log("Account is Locked")
} else {
  console.log("Welcome")
}
\\the console will print Account is locked

\\example 2: Lets keept the isAccountLocked=false;
let isAccountLocked=false;
if (isAccountLocked){
  console.log("Account is Locked")
} else {
  console.log("Welcome")
}
  
```

                              Else If

The basic structure
```
if(){
} else if() {
} else {
}
```

Lets understand the scenario how it works
```js
//Scenario 1    --the parameters inside If is True
if(true){           
//as the If condition is true it will run the code inside if and it wont go further.
} else if() {   
//it Won't run
} else {
//it Won't run
} 

//Scenario 2    --the parameters inside If is false
if(false){           
//it won't run as the condition are not satisfied. It will go further
} else if(true) {    
//it will run as the condition is true and satisfied.
} else {
//it Won't run as it stopped at else if
} 

//Scenario 3    --the parameters inside If and else if are false
if(false){           
//it won't run as the condition are not satisfied. It will go further
} else if(false) {    
//it won't run as the condition are not satisfied. It will go further
} else {
//it will print whatever is here as above both condition are not satisfied
} 
```

Lets see an example :
Declare two variable  
isAccountLocked=false
userRole='admin'
We want to print 'Account is locked' if account is locked.
If account is not locked then we will print 'welcome admin' if userRole=== `admin`
else it will print 'welcome' message.

```js
//Scenario 1: if isAccountLocked is true..then it will only run block inside If

let isAccountLocked=true;
let userRole= 'admin'; 
if (isAccountLocked){                    //it will run the code which is inside if block and stop
  console.log("Account is Locked")
} else if(userRole==='admin') {
  console.log("Welcome admin")
} else {
  console.log("welcome")
}
  
     //Output:   Account is locked
     
 //Scenario 2: if isAccountLocked is false..then it will go next block to else if.
// as userRole==='admin'
// it will only run the code inside the block of else if and it will stop here
 
 let isAccountLocked=false;
let userRole= 'admin';                     
if (isAccountLocked){                     //condition not satisfied as false
  console.log("Account is Locked")                
} else if(userRole==='admin') {            //it will run the code which is inside else if block as it satisfy
  console.log("Welcome admin")
} else {
  
  console.log("welcome")
}
     // Output: Welcome Admin
     
//Scenario 3: if isAccountLocked is false and if we keep userRole==='accountant'.
//it would run the code which is inside the block of else.
  
let isAccountLocked=false;  
let userRole= 'admin';
if (isAccountLocked){                      //condition not satisfied as false
  console.log("Account is Locked")
} else if(userRole==='accountant') {       //condition not satisfied 
  console.log("Welcome admin")
} else {                                   //So it will run the code which is inside else block
  
  console.log("welcome")
}
  
```


                   Logical Or ||     And Operator &&
                   

  
  Example:
  ```js
  // && And Operator - Both conditions have to satify.
  //Example 1:
  let temp=60;      //change it to 50 to see condition not satisfied
  if (temp >=60 && temp<=80){
  console.log('it is pretty nice out')
  } else{
    console.log('It is not pretty outside')
  }
  
  
   // || Or Operator - Either of condition need to be satisfied.
  //Example 2:
  let temp=60;      //change it to 100 to see condition not satisfied
  if (temp <=40 || temp >=90){
  console.log('Do not go outside')
  } else{
    console.log('It is  pretty outside')
  }
  
  
  ```
  
  
                          Variable Scope
                          
Scenario 1:Global Scope - Defined outside of all code blocks

```js
let name ='John';   //name is declare Globally.We can call inside function or outside
if(true){
console.log(name)
}
//Output: John

```

Scenario 2: Local Scope -- Defined inside a code block
```js
let name ='John';  //global Scope
if(true){
console.log(name);
let place="USA"    //place has local scope. It can be only use inside the If function in this scenario
}
console.log(place);   // we will get error. As place has local scope inside the If function.
//Output: error
```


Scenario 3: Local Scope 
```js
let name ='John';

if(true){
console.log(name)
let place="USA"      //local scope
console.log(place)   // it will work as it calling from inside code block of local scope
}

//console.log(place)  // we will get error. As place has local scope inside the If function.
//Note:
//console.log(place) --which is inside the if block code it will work
//console.log(place) --which is Outside of if block code it wont work

```

