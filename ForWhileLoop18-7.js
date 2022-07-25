// JavaScript For Loop
// Loops can execute a block of code a number of times.

// For Loops
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += ' ' + cars[i];
}
console.log(text)

/*For in

Syntax 
for (key in object) {
code block to be executed } */

const values = [10,20,30,40,50,60]

let txt = "";
for (let x in values){
    txt += ' '+ values[x];
}
console.log(txt)

// forEach loop

const values1 = [21,26,27,28,30];

var txt1 = '';

values1.forEach(myFunction);

function myFunction(value,index,array){
    txt1 += " " + value ;
}
console.log(txt1)


// JavaScript For Of

let txt2 = '';
for (const x of cars) {
txt2 += ' '+ x ;
}

console.log(txt2)


// while Loops 
let text2  = '';
let i = 0;
while(i < 10){
  text2 += `The Number is  ${i} `;
  i++;
}

console.log(text2)


// Do While Loops 

let text3 = '';
let j = 0;
do {
  text3 += `The number is  ${j} `;
  j++;
} while (j < 5);

console.log(text3)
