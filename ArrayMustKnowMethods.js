// ARRAY OF iTEMS
// we will re-assign entire array in example so we can re-use it
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]


/***********************************************************************************************************************
// FILTER METHOD
// 1 - GET ALL THE ITEMS THAT ARE LESS OR EQUAL TO $100
// filter method creates new array ..true as one array and false as one array
 * *********************************************************************************************************************/

const filterItems = items.filter((item) => {
    return item.price <= 100
})

// new array created after filter method
console.log(filterItems)


/***********************************************************************************************************************
// Map METHOD
// 2 - Map allows one array convert into new array. we want name of every item 
 * *********************************************************************************************************************/

const mapArrayName = items.map((item) => {
    return item.name
})

console.log(mapArrayName)

const mapArrayPrice = items.map((item) => {
    return item.price
})

console.log(mapArrayPrice)


/***********************************************************************************************************************
// Find METHOD
// 3 - Find Method allows to find single object in array
 * *********************************************************************************************************************/

// We want to find item with name Phone

const foundItem = items.find((item) => {
    return item.name === "Computer"
})

console.log(foundItem)

/***********************************************************************************************************************
// For Each  --- it is alternative of for loop
// 4 - Find Method allows to find single object in array
 * *********************************************************************************************************************/

const info = items;

info.forEach((item) => {
    console.log(item.name)
    console.log(item.price)
})

/***********************************************************************************************************************
//  some   -- if some of the condition satisfy it will give boolean value
// 5 - it will create new array where some of items satisfiey condition true
 * *********************************************************************************************************************/

// lets get expesive item >100

const hasexpensiveItems = items.some((item) => {
    return item.price >= 100
});

console.log(hasexpensiveItems)

/***********************************************************************************************************************
//  every  ---   -- if every iterable items is true then it will give true
// 6 - every method
 * *********************************************************************************************************************/

const allItemsGreaterThanFive = items.every((item) => {
    return item.price >= 5;
})

console.log(allItemsGreaterThanFive)

/***********************************************************************************************************************
//7 Reduce
 * *********************************************************************************************************************/

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)

/***********************************************************************************************************************
//8 Includes
 * *********************************************************************************************************************/
const itemArray = [1, 2, 3, 8, 9, 15, 20]
const includesTwo = itemArray.includes(2)
const includesFive = itemArray.includes(5)
console.log(includesTwo)
console.log(includesFive)



/***********************************************************************************************************************
*9 //Fibonaci series starts from 0 ,1 and it keeps on adding last two numbers 0,1,1,2,3,5,8,13
 * **********************************************************************************************/


//takin input from cutomer
x = 10;
//assigning first number
let num1 = 0;
//assigning second number
let num2 = 1;
//assigning nextnumber 0 as default
let nextNum = 0;

console.log("Fibonaci Series")

for (i = 0; i < x; i++) {
    //printing 0 first
    console.log(num1);
    //finding next number by adding last two numbers
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum
}


// 10. Calculate the sum of digits of a positive integer number -> value passed - 1235231 -> Output -> 17

// method 1 to solve

let number = 123456789;
// converting number into Array using toString(), and we spliting the each number individually
let arrayNumber = number.toString().split("");
console.log(arrayNumber)

let sum = arrayNumber.reduce((lastValue, currentValue) => {
    return parseInt(lastValue) + parseInt(currentValue)
}, 0)
console.log(sum)


// 11. Print prime numbers from 1 -100

for (var i = 2; i <= 100; i++) {
    var primeNumber = true;
    for (var j = 2; j <= (i - 1); j++) {
        if (i % j === 0) {
            primeNumber = false;
        }
    }
    if (primeNumber === true) {
        console.log(i)
    }
}

// 12.  Reverse an array -> ar = [1, 2, 3] -> Output - 3,2,1

let array12 = [1, 2, 3];
array12.sort().reverse()

// 13  Reverse a string -> value - JavaScript -> Output - tpircSavaJ
var test13 = "JavaScript"
var reversertest = test13.toString().split("").reverse().join("")
console.log(reversertest)


// Exercise 14:
// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100

        // solution -1
        function checkNumber(a, b) {
            if (a === 100 || b===100 || a+b ===100) {
                return true
            } else {
                return false
            }
        }
        console.log(checkNumber(100,50))
        // Solution -2  -- we can use latest ES feature arrow function 

        const checkNumber100 = (a,b)=> {a===100 ||b===100 || (a+b)==100 }
        // or  const checkNumber100 = (a,b)=> a===100 ||b===100 || (a+b)==100 
        console.log(checkNumber(100,50))

// Exercise 15:
// Write a JavaScript exercise to get the extension of a filename.
    let fileName = 'angular.json'
    const getFileExtension = (x)=> x.slice(x.lastIndexOf('.'))
    console.log(getFileExtension(fileName))

// Exercise 16:
// Write a JavaScript program to replace every character in a
//  given string with the character
// following it in the alphabet

        // planning - we can use either String.fromCharCode or charCodeAt
        /** String.fromCharCode -- it takes numeric code which represent the 
         * string and converts it back into an actual character into a string
         * so we need to pass that an actual value
         */
        // .split() ---- Returns every characters of string as an Array
        // .map()  --- It mutates(change) every item in an array depending what we pass in the function 

        const moveCharsForward = (str) =>
            str
            // split returns every character of string as an array
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0)+1))
            // converting an array to string
            .join('')
        
        console.log(moveCharsForward('abcd'))
// Exercise 17:
// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

        var  dateTest = new Date()

        const formatDate = (dateTest)=>{
        const days = dateTest.getUTCDay() + 1;
        const month = dateTest.getUTCMonth()+1;
        const year = dateTest.getUTCFullYear()
        return `${month}/${days}/${year}`
        }

        console.log(formatDate(dateTest))

    // `${}` template literal which is basically just a string with some 
    // with some values inside it

// Exercise 18:
// Write a JavaScript program to create a new string adding "New!" in front of a given string. If
// the given string begins with "New!" already then return the original string.

        // Solution 1
        const checkNew = (res)=>{
            if(res.slice(0,3)=== 'New!'){
                return res
            }else{
                return res= "New! " + res
            }
        }
        console.log(checkNew("badal"))

        // Solution 2
        const addNew = (str)=> 
            str.indexOf('New!') === 0? str: `New! ${str}`
        console.log(addNew('test'))

// Exercise 19:
// Write a JavaScript program to create a new string from a given string taking the last 3
// characters and added at both the front and back. The string length must be 3 or more, if
// not, the original string is returned.

        /** Strategy
         * get first 3 character from string in seperate variable
         * get last 3 character from string in seperate variable
         * check length of string >= 3
         * if var length is >=3 concenate at beginning and end of string
         * if < 3 then will return original string
         */

        // solution 1
        function characterCheck(string){
            if(string.length < 3){
                return string
            } else {
                const firstThree = string.slice(0,3);
                const lastThree = string.slice(-3)
                string = firstThree + lastThree
                return string
            }
        }
        console.log(characterCheck('abceeexyz'))

        // solution 2
        const newString = (str)=>
            str.length < 3 ? str : str.slice(0,3)+str.slice(-3)
        console.log(newString('abcddxyz'))
        
// Exercise 20:
// Write a JavaScript program to extract the first half of a string of even length.

// Exercise 21:
// Write a JavaScript program to concatenate two strings except their first character.

// Exercise 22:
// Given two values, write a JavaScript program to find out which one is nearest to 100

// Exercise 23:
// Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified
// character.

// 3

// Part 03
// https://youtu.be/0_sbUwVU32k

// Exercise 1:
// Write a JavaScript program to find the number of even digits in a an array of integers

// Exercise 2:
// Write a JavaScript program to find the number of even values up to a given number

// Exercise 3:
// Write a JavaScript program to check whether a given array of integers is sorted in ascending
// order

// Exercise 4:
// Write a JavaScript program to get the largest even number from an array of integers.

// Exercise 5:
// Write a JavaScript program to replace the first digit in a string (should contain at least one
// digit) with a $ character.

// 4

// Part 04
// https://youtu.be/FGklOjedW7E

// Exercise 1:
// Given a year, report if it is a leap year.

// Exercise 2:
// Write a JavaScript program to compare two objects to determine if the first one contains
// the same properties as the second one (which may also have additional properties). For
// example, objA and objB are equal (but not equal to objC).
// const objA = { a: 1, b: 1, c: 1 };
// const objB = { a: 1, b: 1, c: 1 };
// const objC = { a: 1, b: 1, d: 1 };

// Exercise 3:
// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array.
// A new line indicates a new row in the array. Example input:
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza

// Exercise 4:
// Write a JavaScript program to generate a random hexadecimal color code.

// Exercise 5:
// Write a JavaScript function that returns true if the provided predicate function returns true
// for all elements in a collection, false otherwise.

// 5

// Part 05
// https://youtu.be/Alo1giKd3s8

// Exercise 1:
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

// Exercise 2:
// Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.

// Exercise 3:
// Write a JavaScript function to convert an amount to coins.
// Example input: 46 and possible coins 25, 10, 5, 2, 1
// Output: 25, 10, 10, 1

// Exercise 4:
// Write a JavaScript function to extract unique characters from a string.

// Exercise 5:
// Write a JavaScript function to find the first not repeated character
// Example string: 'abacddbec'
// Expected output: 'e'