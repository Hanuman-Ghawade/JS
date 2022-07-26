// String Method 
const name = "Hello";
const name1 = "World ";
// string Concatenate 
console.log(name  + ' '+ name1)

const name2 = name.concat(' ', name1)
console.log(name2)

// string length
console.log(name.length)

// uppercase & lower case
console.log(name.toUpperCase())
console.log(name.toLowerCase())

// indexing 
console.log(name[2])

// indexof
console.log(name.indexOf('l'))

// lastindex of
console.log(name.lastIndexOf('l'))

// CharAt
console.log(name.charAt(0))

// Start with
console.log(name.startsWith('h'))

// Endswith
console.log(name.endsWith('h'))

// includes

console.log(name.includes('r'))

// slice
console.log(name.slice(-1))

// substring

console.log(name.substring())

// split
console.log(name.split(''))

// replace

console.log(name.replace('Hello',"Hanuman"))

// Teplates literals

let name3 = `${name} ${name1}`;
console.log(name3)
