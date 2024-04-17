console.log("arvinder004")

box = document.getElementsByClassName("box")
console.log(box)
console.log(box[0])
box[2].style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green" //applies only to the first element with given class name

document.getElementById("yellowbox").style.backgroundColor = "yellow"

console.log(document.querySelectorAll(".box"))
//returns list of all the elements with class given

//to add style using querySelectorAll we use for loop

document.querySelectorAll(".box").forEach(e =>{
    e.style.border = "5px solid skyblue"
})

console.log(document.getElementsByTagName("div")) //returns all the div elements