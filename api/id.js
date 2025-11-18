const fruitlist=document.getElementById("fruits") //call from html,id name from html
const li=document.createElement("li")  //create tag
li.innerText="Jackfruit" //tag e jackfruit boshai dibo; parent-ul,child li
fruitlist.appendChild(li)

function makepink(){
    document.body.style.backgroundColor="pink"
}

const blue=document.getElementById("make-blue")
blue.onclick= function makeblue(){
    document.body.style.backgroundColor="blue"
}

const red=document.getElementById("make-red")
red.addEventListener('click',function(){ //name or name not,still works
    document.body.style.backgroundColor="red"
})

//changing text
const text=document.getElementById("change-text")
function changetext(){text.innerText="Bangladesh "} //using changedtext(); not innerhtml

document.getElementById("event").addEventListener("click",function(){ //direcetly ,no variablke taken
    document.getElementById("change-text").innerText=("ALtered by event listener")
})