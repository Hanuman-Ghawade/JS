// JavaScript Arrays
// an Array is s special variable hold more than one value.

const city = ['Pune','Delhi','Mumbai'];
const  city1 = new Array("Beed","Latur","Aurangabad");
// Changing an array elements
city[0] = 'kolkata';

// Idetintify the type of array 
console.log(typeof city)

console.log(city);

console.log(city1)

// Array Properties and Methods
// length properties 
console.log(city.length)

// sort properties 
console.log(city.sort())

// Adding elements in array 

city.push('Beed')
console.log(city)

// deleteditem form array 

console.log(city.pop())

// shift method in array 

console.log(city.shift())

// unsfiting elements in array 

console.log(city.unshift('Kolhapur'))

// Converting array to string 
console.log(city.toString())

// joining array using join mehtod
console.log(city.join('*'))

// concetenating an array 

console.log(city.concat(city1))

// splice in array 
city1.splice(2,0,'Nagar','Jalna')
console.log(city1)

// slice in array

let city2 = city1.slice(2,5)
console.log(city2)

// sorting and reversing array

city2.sort()
console.log(city2)

city2.reverse()
console.log(city2)

//  sorting array using sort function 
// Ascending order 
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){return a-b})
console.log(points)

// Descending order 
const point = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){return b-a })
console.log(point)

// JavaScript Array map()

const numbers1 = [1,2,3,4,5,6,7,8,9,10];
const numbers2 = numbers1.map(myFunction);

console.log(numbers2)
function myFunction(value,index , array){
    return value * 3
}


// JavaScript Array filter)
const numbers3 = [1,2,3,4,5,6,7,8,9,10];
const numbers4 = numbers3.filter(myFunction);

console.log(numbers4)
function myFunction(value,index , array){
    return value > 5
}

// JavaScript Array filter)

const numbers5 = [1,2,3,4,5,6,7,8,9,10];
const numbers6 = numbers5.reduce(myFunction);

console.log(numbers6)
function myFunction(total , value,index , array){
    return total+ value
}


// JavaScript Array every()

const numbers7 = [1,2,3,4,5,6,7,8,9,10];
const numbers8 = numbers5.reduce(myFunction);

console.log(numbers8)
function myFunction(value,index , array){
    return value > 0
}

// JavaScript Array some()

const numbers9 = [1,2,3,4,5,6,7,8,9,10];
const numbers10 = numbers5.some(myFunction);

console.log(numbers10)
function myFunction(value,index , array){
    return value > 5
}

// JavaScript Array.find()
const numbers11 = [1,2,3,4,5,6,7,8,9,10];
const numbers12 = numbers11.find(myFunction);

console.log(numbers12)
function myFunction(value,index , array){
    return value > 2
}





