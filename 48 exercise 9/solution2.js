let random = Math.random()
console.log(random)

let a = prompt("ENTER FIRST NUMBER")
let b = prompt("ENTER OPERATION")
let c = prompt("ENTER SECOND NUMBER")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",

}

if (random > 0.1) {
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

else{
    b = obj[b]
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}