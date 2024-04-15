/* WAP to calculate factorial of a number using reduce and using for loop */

var a = prompt("enter number")

let arr = []

for(i=1;i<=a;i++){
    arr.push(i)
}
console.log(arr.reduce((a,b)=>{return a*b}))



var b = prompt("enter number")
var fact = 1

for (let i = 1; i <= b; i++) {
    fact = fact * i   
}
console.log(fact)