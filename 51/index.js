//JAVASCRIPT ARRAYS

let arr = [1,2,3,4,5];

console.log(arr);
console.log(arr.length);
arr[0] = 666;
console.log(arr);
//arrays are mutable

arr[0] = 1;
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//array to string
console.log(arr.toString());
console.log(arr.join(" and "))  //adds an element between the array elements to display them 

console.log(arr.pop())  //deletes the last element
console.log(arr)

arr.push(6) //adds element at the end of the array
console.log(arr)
arr.push("arvinder")  
console.log(arr)

arr.shift() //deletes the starting element
console.log(arr)

arr.unshift("sharan")  //adds element to the start of the array
console.log(arr)

delete(arr[2])  //deletes the element but not the memory location
console.log(arr)

let a1 = [1,2,3], a2 = [4,5,6], a3 = [7,8,9]
console.log(a1.concat(a2,a3))  //returns a new array...does not change existing array

