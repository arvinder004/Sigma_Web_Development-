let button = document.getElementById("btn")

button.addEventListener("click",()=>{
    // document.body.style.backgroundColor = "red"
    // alert("i was clicked...yay!!")
    document.querySelector(".box").innerHTML = "<b>yayy you were clicked</b>"
})

button.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor = "yellow"
})

button.addEventListener("contextmenu"/*right clickk */,()=>{
    alert("dont right click")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
})