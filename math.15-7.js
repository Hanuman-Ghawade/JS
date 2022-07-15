// Javascript Math Object
// Javascript math object used to do mathematical operation on numbers.

console.log(Math.PI)
console.log(Math.SQRT1_2)

// Math Methods

console.log(Math.round(3.124))
console.log(Math.ceil(3.9))
console.log(Math.floor(3.9))
console.log(Math.trunc(3.124))
console.log(Math.pow(5,2))
console.log(Math.sqrt(64))
console.log(Math.abs(25.8888))
console.log(Math.sin(180*Math.PI/180))
console.log(Math.cos(180*Math.PI/180))
console.log(Math.max(20,23,25,26,27,28))
console.log(Math.min(20,23,25,26,27,28))
console.log(Math.random())


// JavaScript Random

console.log(Math.floor(Math.random()*100))

// random number create function

function randomInterger(min,max){
    return Math.floor(Math.random()*(max - min+1) + min )
}

let randomNumber = randomInterger(30,40)
console.log(randomNumber)





