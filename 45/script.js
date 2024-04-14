console.log("conditional tutorial")

/* if-else statement syntax:
    if(condition)
    { 
        statement
    } 
    else
    {
        statement
    }*/

let age = 45;

if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cant vote")
}

/* operators in JavaScript -: +     -     *    **(exponentiation)    /      %       ++      -- */

let grace = 2;

console.log(age ** grace)

/*  === (equal value and equal type) -> checks type and value  */

3 == '3'  //true (checks only value)
3 === '3' //false (checks type and value)

/* !== (not equal value or not equal type) */

/* && logical and    || logical or   ! logical not */


//ternary operator ---->  condition ? if condition is true this statement will execute : else thi one


let vote = age>=18 ? console.log("can vote") : console.log("cannot vote")