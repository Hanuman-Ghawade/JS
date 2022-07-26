/* Regular Expression 
A regular expression is a sequence of characters that forms a search pattern

Regular expressions can be used to perform all types of text search and text replace 
operations. */

/* /pattern/modifiers; 
  /w3schools/i;
 # /w3schools/i  is a regular expression.
 # w3schools  is a pattern (to be used in a search).
 # i  is a modifier (modifies the search to be case-insensitive).

The search() method uses an expression to search for a match, and returns the position of 
the match.

 The replace() method returns a modified string where the pattern is replaced.

*/
 // using string search() with  string
let text_String = "My name is Hanuman";
let search_string = text_String.search("Hanuman");
console.log(search_string);
// using string search() with regula expression .

let reg_string = text_String.search(/hanuman/i);
console.log(reg_string);

// using string replace() with string
let replaceString = text_String.replace("Hanuman", "Poonam");

console.log(replaceString)

// using replace () with regular  expression 

console.log("****")
let replace_reg_string = text_String.replace(/hanuman/i, "Poonam")

console.log(replace_reg_string)

 // using test 

 let txt = 'I am from Beed.';
 let pattern = /e/;

 let testString = pattern.test(text_String)

 console.log(testString)
