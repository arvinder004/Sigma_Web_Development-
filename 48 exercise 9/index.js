//create a faulty calculator using javascript

/*this faulty calculator does following 
1. it takes two numbers as input from the user
2. it performs wrong operations as follows:
    + ---> -
    * ---> +
    - ---> /
    / ---> **

    it performs wrong operations 10% of the time


    solution-:
    - generate a random number from 1 to 100
    - check if it is less than 10 aur greater than 10
    - perform faulty calculations if number is less than 10 (ie, 10% of the times)
    -perform real calculations if number is greater than 10 (ir, 90% of the times)
    */


//code

// let a = Number(prompt("ENTER FIRST NUMBER"));
// let b = Number(prompt("ENTER SECOND NUMBER"));

let a = 10, b=20;

let random = Math.random();
console.log(random)

if(random < 0.1){
    console.log("ADDITION OF NUMBERS :",a-b);
    console.log("SUBTRACTION OF NUMBERS :",a/b);
    console.log("MULTIPLICATION OF NUMBERS :",a+b);
    console.log("DIVISION OF NUMBERS :",a**b);
}
else{
    console.log("ADDITION OF NUMBERS :",a+b);
    console.log("SUBTRACTION OF NUMBERS :",a-b);
    console.log("MULTIPLICATION OF NUMBERS :",a*b);
    console.log("DIVISION OF NUMBERS :",a/b);

}
