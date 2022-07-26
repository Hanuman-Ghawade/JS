/*  Bubble sort is one of the easiest and brute force sorting algorithm. 
It is used to sort elements in either ascending or descending order.
 Every element is compared with every other element in bubble sort.
 
*/ 
// exmaple of bubble sort algorithm

arr = [25,31,4,897,2,85,1,989771] ;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j]   >   arr[i]) {
            let temp = arr[i] ;
            arr[i] = arr[j] ;
            arr[j] = temp  ;
        }
    }
}

console.log(arr) ;

