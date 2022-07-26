/* The concept of Abstraction in JavaScript is to hide the implementation details and highlight an object’s essential features 
 to the users */ 

 class Operation {
    constructor(a, b){
        this.a = a ;
        this.b = b;
    }
    addition(){
        console.log(`The Addition of ${op.a} & ${op.b} is`,  op.a + op.b)
    }
    // substraction(){
    //     console.log(`The substraction of ${this.a} & ${this.b} is `,this.a - this.b)
    // }

    // multiplication(){
    //     console.log(`The product of ${this.a} & ${this.b} is `,this.a * this.b)
    // }

    // division(){
    //     console.log(`The Division Of ${this.a} & ${this.b} is `, this.a / this.b)
    // }
 }

let op = new Operation(15,10)
op.addition()
// op.substraction()
// op.multiplication()
// op.division()


