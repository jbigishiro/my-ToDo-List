function changeWeekDay(day){
let p2=document.querySelector("#p2")
p2.innerText=day
}
changeWeekDay("Saturday")

function addImage(img_url){
    let image=document.querySelector("img")
    image.src=img_url
}
addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Koe_in_weiland_bij_Gorssel.JPG/200px-Koe_in_weiland_bij_Gorssel.JPG")

// change the color of background
function changeBodyBackgroundColor(color){
    let body=document.querySelector("body")
    body.style.background=color
}
changeBodyBackgroundColor("yellow")

//add an event listener to alert

document.querySelector("#alertMe").addEventListener("click", alertMe)
function alertMe(){
return alert("I was clicked")
}

//add event listener to console log button
document.querySelector("#consoleLog").addEventListener("click", function(){
    console.log(" I am console Logged")
 })

 //will delete task
 function handleDelete(btn){
  return btn.target.parentNode.remove()
 }

//Grabs button and delete parent Node
function addEventListenerToDeleteButtons(){
    let buttons=document.getElementsByClassName("delete_button")
   for(let btn of buttons){
    btn.addEventListener("click", handleDelete)
   }
}
addEventListenerToDeleteButtons()

// increase the height of div2
let div2=document.getElementById("div2")
div2.style.height="250px"













 /*
 // add event to submit form, once clicked new line below
 function submitForm(){
    let submit=document.querySelector(".btn")
    submit.addEventListener("click", addText)
 }
 
 // function to add text 
 function addText(){
    let div6=document.querySelector("#div6")
    let par5=document.createElement("p")
    par5.innerText=
 }
 */