console.log("This is javascript tutorial")
 
//variable names are case sensitive

//var is globally scoped while let and const are block scoped
//var can be updated and re-declared within its scope
//let can be updated but not re-declared
//const can neither be updated nor be re-declared


var a = 5;
var b = 6;
var c = "harry";
console.log(a+b)
console.log(typeof a, typeof b, typeof c)

{
    let a = 66;
    console.log(a)  //output will be 66
}

console.log(a)  //output will be 5



//-----DATA TYPES-----

//NULL , NUMBER, STRING, SYMBOL, UNDEFINED, BOOLEAN, BIGINT

let x = "harry"; //string
let y = 22; //number
let z = 3.55; //number
const p = true; //boolean
let q = undefined;  //undefined
let r = null;   //object
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

//object in javascript is key value combination

const item = {
    name : "arvinder",
    age : 20,
    "job role" : "CEO",
    sallary : 10000000000 
}


console.log(item) 

item.sallary = "1000cr"

console.log(item)

const human = {
    "name" : "Arvinder",
    "age" : 20,
    "is_cute" : true,
    "is_handsome" : true,
    "heartbroken" : true
}

console.log(human)