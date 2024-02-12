console.log("javascript loops tutorial")

/* TYPES OF LOOPS
--> for loop - loop a block of code no. of times
--> for in loop - loops through the keys of an object
--> for of loop - loops through the values of an object
--> while loop - loops a block based on a specific condition
--> do while loop - while loop variant which runs atleast once */
let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i); 
}

let obj = {
    name : "arvinder",
    role : "CEO",
    company : "google"
}

for (const key in obj) {    //for in loop
        const element = obj[key];
        console.log(element) //output arvinder \n CEO \n google
}

for (const key in obj) {    //for in loop
    const element = obj[key];
    console.log(key,":",element) //output name : arvinder \n role : CEO \n company : google
}

for (const c of "ARVINDER") {   //for of loop
    console.log(c)  // A \n R \n V.....
}

let i =1 

while (i < 6) {   //while loop
    console.log(i)
    i++;
}

let x = 16

do {
    console.log(x)
    x++;
} while (x < 15);

