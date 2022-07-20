// JavaScript Classes
// Employee class created 

class Employee {
    constructor(name,age,place){
        this.name = name ;
        this.age = age ;
        this.place = place ;
    }

    getDetails(){
        console.log(`My name is ${this.name} .My age is ${this.age} year . I am from ${this.place}`,)
    }

}

class HumanResource extends Employee{
    constructor(name, education ){
        
        super(name) ;
        this.education = education ;
    }

    qualification(){
        console.log(`My name ${this.name} & i have studied ${this.education}`)

    }


}
let parent_obj = new Employee("Hanuman",28, "Beed")
parent_obj.getDetails()

let child_obj = new HumanResource("Hanuman","Mechanical Enginnering")

child_obj.qualification()



//  getter & setter method 

class person {
    constructor(name){
        this._name = name ;
    }
    set person_name(x){
        this._name = x
    }
    get person_name() {
        console.log(`My name is ${this._name}`)
    }
  
}

person_first = new person("Poonam")
person_first.person_name = "Deepak";
person_first.person_name


 // static method 

 class Dog{
    constructor(breed){
        this.breed = breed
    }
    static behaviour(){
        console.log("The German Shepherd or Alsatian is a German breed of \
working dog of medium to large size.")

    }

 }

dog_obj = new Dog("German Shepherd")
Dog.behaviour()