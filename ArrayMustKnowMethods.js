// ARRAY OF iTEMS
// we will re-assign entire array in example so we can re-use it
const items = [
    {name: 'Bike', price: 100 },
    {name: 'TV', price: 200 },
    {name: 'Album', price: 10 },
    {name: 'Book', price: 5 },
    {name: 'Phone', price: 500 },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25 },
]


/***********************************************************************************************************************
// FILTER METHOD
// 1 - GET ALL THE ITEMS THAT ARE LESS OR EQUAL TO $100
// filter method creates new array ..true as one array and false as one array
 * *********************************************************************************************************************/

const filterItems = items.filter((item)=>{
    return item.price <= 100
})

// new array created after filter method
console.log(filterItems)


/***********************************************************************************************************************
// Map METHOD
// 2 - Map allows one array convert into new array. we want name of every item 
 * *********************************************************************************************************************/

const mapArrayName = items.map((item)=>{
    return item.name
})

console.log(mapArrayName)

const mapArrayPrice = items.map((item)=>{
    return item.price
})

console.log(mapArrayPrice)


/***********************************************************************************************************************
// Find METHOD
// 3 - Find Method allows to find single object in array
 * *********************************************************************************************************************/

// We want to find item with name Phone

const foundItem = items.find((item)=>{
    return item.name === "Computer"
})

console.log(foundItem)

/***********************************************************************************************************************
// For Each  --- it is alternative of for loop
// 4 - Find Method allows to find single object in array
 * *********************************************************************************************************************/

const info = items;

info.forEach((item)=>{
    console.log(item.name)
    console.log(item.price)
})

/***********************************************************************************************************************
//  some   -- if some of the condition satisfy it will give boolean value
// 5 - it will create new array where some of items satisfiey condition true
 * *********************************************************************************************************************/

// lets get expesive item >100

 const hasexpensiveItems = items.some((item)=>{
   return item.price >=100
 });

 console.log(hasexpensiveItems)

/***********************************************************************************************************************
//  every  ---   -- if every iterable items is true then it will give true
// 6 - every method
 * *********************************************************************************************************************/

const allItemsGreaterThanFive = items.every((item)=>{
    return item.price >= 5;
})

console.log(allItemsGreaterThanFive)

/***********************************************************************************************************************
//7 Reduce
 * *********************************************************************************************************************/

const total = items.reduce((currentTotal , item)=>{
    return item.price + currentTotal
},0)
console.log(total)

/***********************************************************************************************************************
//8 Includes
 * *********************************************************************************************************************/
const itemArray = [1,2,3,8,9,15,20]
const includesTwo = itemArray.includes(2)
const includesFive = itemArray.includes(5)
console.log(includesTwo)
console.log(includesFive)