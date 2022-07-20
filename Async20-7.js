// JS Async
// JavaScript Callbacks ,Promises,Async, Awaits
const datas = [
    { name: "Hanuman",eduction  :"Enginnering"},
    {name : "Ajay",eduction: "Pharmacy"}
]

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
// createData({name : "Aditya",education : "Doctor"}.then(getDatas))


async function starts(){
    await createData({name : "Aditya",education : "Doctor"});
    getDatas();
}

starts()