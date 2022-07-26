/* JavaScript Errors 
Erros in Javscript :  Throw, and Try...Catch...Finally

1.try statement defines a code block to run (to try).
2.catch statement defines a code block to handle any error.
3.finally statement defines a code block to run regardless of the result.
4.throw statement defines a custom error.
*/

function division (a ,b){
    return a / b 

}
try {
   let div = division(5, 5) ;
   console.log(div) ;
} catch (Erros) {

    console.log(Erros.message) ;
}

finally {

    console.log(" Please always keep in mind value should not be 0 ") ;
}




