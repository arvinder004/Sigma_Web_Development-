console.log("JavaScript Functions")

function greeting(name) {
    console.log("hello " + name + ", How are you?")
}

greeting("arvinder")
greeting("harshit")

function sum1(a , b){
    console.log (a+b)
}

sum1(3,5)

function sum2(a , b){
    return a+b
}

result = sum2(10,29)

console.log(result)


//arrow function

const func1 = (x,y)=>{
    console.log("i am an arrow function", x)
    console.log("i am an arrow function", y)
}

func1(20,32);