console.log('this is promises')

// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("yes i am done")
//         resolve("arvinder")
//     }, 3000);
// })

// prom1.then((a=>{
//     console.log(a)
// }))

//promise to generate random number greater than 0.5
//if number is less than 0.5 then it will reject the number

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random()
  if(a <= 0.5){
    reject("random number not supported ")
  }

  else{
    console.log("random number generated ")
    resolve(a)
  }
})

prom1.then((a) => { // then() mthod provides 2 callbacks: one function to return when a promise is fullfiled and one to run when a promise is rejected
    console.log(a)
}).catch((err)=>{
    console.log(err)
})


