/* Method overloading & Method Overriding in javascript 
   Method overloading not supported in javascript 
   javascript is interpretd language so that code run line by  line .so file line run 
*/

 // Method Overloading in javascript 
class Operation {
    addition(a ,b, c){
        console.log(a + b + c)
    }
    addition(a,b){
        console.log( a + b )
    }
}

let add = new Operation() ;
add.addition(5,10,20)


// Method overriding in javascript 

class Person {
    constructor(firstName, lastName) {
        this.first = firstName;
        this.last = lastName;
        
    }
    fullName(){
        console.log(`My name is ${this.first + " " + this.last}`)
    }
}
class Child extends Person {
    constructor(first, last, city) {
        super(first,last)
        this.city = city ;
    }
    fullName(){
        console.log(`My name is ${this.first + " " + this.last} & I am from ${this.city}`)
    }

}

let obj = new Child ("Hanuman","Ghawade","Beed")

obj.fullName()

