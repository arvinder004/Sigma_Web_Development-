// document.querySelector(".box") //displays html for given class

// document.querySelector(".container").innerHTML //gives html inside the class

// document.querySelector(".container").innerText //gives the text inside the elements

// document.querySelector(".container").tagName //gives the element name using the given class


// document.querySelector(".box").innerHTML = "Hey i am arvinder"

// document.querySelector(".box").hasAttribute("style") //returns True if class element has attribute style

// document.querySelector(".box").getAttribute("style") //returns the style css of the elements

// document.querySelector(".box").setAttribute("style","display:inline") //sets the attribute

// document.querySelector(".box").removeAttribute("style") //removes the given attribute

let div2 = document.createElement("div")
let div1 = document.createElement("div")
div1.innerHTML = "i have been inserted by <b> arvinder </b> using javascript(append)"
div2.innerHTML = "i have been inserted by <b> arvinder </b> using javascript (prepend)"
div1.setAttribute("class","created")
document.querySelector(".container").append(div1)
document.querySelector(".container").prepend(div2)



document.querySelector(".container").insertAdjacentHTML("beforeend","before end insertadjacenthtml")

document.querySelector(".container").insertAdjacentHTML("afterend","after end insertadjacenthtml")

document.querySelector(".container").insertAdjacentHTML("afterbegin","after begin insertadjacenthtml")

document.querySelector(".container").insertAdjacentHTML("beforebegin","before begin insertadjacenthtml"

document.querySelector(".container").classList.toggle("clas_name") //adds or removes the class to an element