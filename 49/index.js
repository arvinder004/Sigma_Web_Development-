console.log("JavaScript Strings")

let a = "Arvinder";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);

for(let i = 0;i <a.length;i++){
    console.log(a[i]);
}

console.log(a.length)

let name = "arvinder"
let friend = "vidushi"

console.log("my name is "+name+" and my friends name is "+friend)

//template literals
console.log(`my name is ${name} and my friends name is ${friend}`)

friend = "vidushi"
console.log(friend.toUpperCase())

console.log(friend.toLowerCase())

console.log(friend.length)

console.log(friend.slice(1,3))
console.log(friend.slice(4))
console.log(friend.slice(1))

console.log(friend.replace("vi","69")) //only replaces the first occurence not the second third....


a = "arvinder bhai"
console.log(a.replace("bhai","boss"))

b = " don " 

console.log(a.concat(b))

console.log(b)
console.log(b.trim())


console.log(a.charAt(0))
console.log(a.indexOf("bhai"))