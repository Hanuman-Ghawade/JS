// Single Inheritance

class Parent {
    constructor(first, last){
        this.firstName = first ;
        this.lastName = last ;
    }
    getDetails(){
        console.log(`My Name is ${this.firstName} ${this.lastName}`)

    }

}
class Child extends Parent{
    constructor(firstName,lastName,city){
        super(firstName,lastName) ;
        this.city = city ;
    }
    getInformation(){
        console.log(`My name is ${this.firstName} ${this.lastName}. I am from ${this.city}`)
    }
}

let obj = new Child("Hanuman","Ghawade","Beed")

obj.getDetails()


 // Multilevel Inheritance 

class PersonA { 
    constructor(city){
        this.city = city ;
    }

    address(){
        console.log(`He is from ${this.city}`)
    }
}
class PersonB extends PersonA {
    constructor (city,education){
        super(city)
        this.education = education ;
    }
    qualification(){
        console.log(`He is completed ${this.education}`)
    }
}


class PersonC extends PersonB {
    constructor (city ,education ,hobbies){
        super(city ,education)
        this.hobbies = hobbies ;
    }

    hobby(){
        console.log(`He like to play ${this.hobbies}`)
    }
}

let multilevel = new PersonC("Beed","Engineering","Cricekt") ;

multilevel.address()



