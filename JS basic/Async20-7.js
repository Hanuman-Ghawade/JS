// JS Async
// JavaScript Callbacks ,Promises,Async, Awaits
// const datas = [
//     { name: "Hanuman",eduction  :"Enginnering"},
//     {name : "Ajay",eduction: "Pharmacy"}
// ]

function getDatas(){
    setTimeout(() => {
        let output = '';
        datas.forEach((data,index)=> {
            output += ' '+ data.name ;
        })
        console.log(output)
    },1000) ;
} ;

function createData(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData) ;
            let error = false ;
            if (!error) {
                resolve() ;
            } else {
                reject("Something going wrong") ;
            }
        },2000)

    })
   

}
createData({name : "Aditya",education : "Doctor"}.then(getDatas))


async function starts(){
    await createData({name : "Aditya",education : "Doctor"});
    getDatas();
}

starts()

 // Callback Function 

function OpsOutput() {
    console.log("The Sum of two value is ", sum)
}
let sum = 0;
function calculators(a, b, Callback) {
    sum = a + b;
    Callback();
    return sum
}

console.log(calculators(5, 10, OpsOutput))

// Promises in Javascript 


let myPromise = new Promise(function(resolve,reject){
    let x = 15 ;
    if (x == 0) {
        resolve("Right Value")
        
    } else {
        reject("Wrong Value")
        
    }
})


myPromise.then(
    function (value) {
        console.log("You entered the ",value)}
).catch(
    function(error) {
        console.log("You entered the ",error)       
    }
)

// Async $ Awaits 

async function trial() {
    await  console.log("1");
   console.log("2");
     console.log("3");
}
trial()
console.log("4");
console.log("5");
