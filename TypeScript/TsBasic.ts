// When varibale called as function 
let userName = "Hanuman" ;
let upperCase = userName.toUpperCase() ;
userName()
console.log(upperCase)

// // when object called without  having the property
const user = {
    name : "Hanuman" ,
    age : 28 
} ;
console.log(user.location)


// //  when we call varibale name with typo error 

const city = [ 2,3,6,9,78,2,] ;

city.sort()
console.log(cty)

 // When we miss to pass an arguement in function 

 function habbit(name,time){
    console.log(`He is ${name} & He sleep ${time} daily in night`)

 }

habbit("Hanuman",)

// data types declaration 

let str : string  = "Pune" ;
let num : number = 20 

function add(a : number, b : number) {
    return a + b ;
}

console.log(add(5,10))

// object type 

function printCoord(pt: { x: number; y: number }) {

    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);

  }
  printCoord({ x: 3, y: 7 });


  // Optional Properties using ? 

  function substraction(a:number , b : number){
    let sub = a - b ;
    console.log(sub)

  }
console.log(substraction(10,5))


//defining a union types 

function id (id : number | string ){
    console.log(`Your id is ${id}`)
    console.log(`You id is ${id}`)
}
id(100)
