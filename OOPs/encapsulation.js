/* the javascript encapsulation is a process of binding  the data ( i.e Variable) with function 
acting on data. It allows us to control the data and validate it. 
*/
class Student {
    constructor (name,marks){
        this.name = name ;
        this.marks = marks ;
    }
    getResult(){
        if (this.marks < 35) {
            console.log(`Dear ${this.name} You Failed the exam .Please try Again`)
            
        }else{
            console.log(`Congratulation ${this.name}.You passed exam`)
        }
    }
}
let student = new Student("Hanuman",24)

student.getResult()