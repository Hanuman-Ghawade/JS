
const map_arr = [1,2,3,4,5,6,7,8,9,10] ;

// map() function

function double(x){
    return x * 2 
}
const map_output = map_arr.map(double) ;

console.log(map_output)

 // Filter function()

 const filter_arr = [1,2,3,4,5,6,7,8,9,10]

function isOdd(x){
    return x % 2 != 0 ;
}

function isEven(x){
    return x % 2 == 0
}

var filter_output = filter_arr.filter(isOdd)
var filter_output = filter_arr.filter(isOdd)
console.log(filter_output)


// Reduce() function
var reduce_arr = [1,2,3,4,5,6,7,8,9,10]

var reduce_output = reduce_arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc ;
},0 )
console.log(reduce_output)


// array with object using map function 

const user  = [
    {firstName: "Hanuman",lastName : "Ghawade",age: 27},
    {firstName: "sanjay",lastName : "Ghawade",age: 28},
    {firstName: "Bhagwan",lastName : "Ghawade",age: 25},
    {firstName: "Laxman",lastName : "Ghawade",age: 30}
]

const user_map_output = user.map((x) => x.firstName + " " + x.lastName) ;

console.log(user_map_output) ;

// reduce function 

const reduces_output = user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age]
    }else{
        acc[curr.age] = 1 ;
    }
    return acc

},{})

console.log(reduces_output)

// filter function the array 

const filters_output = user.filter(x =>x.age< 30).map(x => x.firstName)
console.log(filters_output)
