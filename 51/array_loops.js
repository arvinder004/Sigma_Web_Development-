let a = [1,2,3,4,5]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

//for in loop

let obj = {
    a : 1,
    b : 2,
    c : 3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)    
    }
} 


//for of loop

for (const iterator of a) {
    console.log(iterator)
}


//map method

let arr = [1,2,3,4,5]
let newarr = arr.map((e,index,array)=>{
    return e**2
})

console.log(newarr)

//filter method

// const GreaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
// }
// console.log(newarr.filter(GreaterThanSeven))

console.log(newarr.filter((e)=>{
    if(e>7){
        return true
    }
}))


//reduce method

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))  //returns a number by applying function to all elements in the array 