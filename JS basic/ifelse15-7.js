// JavaScript if, else, and else if

// Conditional statement are used to perform  different actions based on different condition .

// Checking for+

const voterAge = 25;

if (voterAge > 18) {
    msg = 'You can vote '
}
else if ( voterAge == 18){
    vmsg = ' You just completed 18 year.you can vote'
}
else {
    msg = "He can't vote .He Need to complete 18 year"
}
console.log(msg)


// The JavaScript Switch Statement

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day)


