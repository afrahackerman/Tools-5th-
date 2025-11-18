// 1
const allHeading = document.getElementsByTagName("h1")
console.log(allHeading)

for(const h of allHeading){
    console.log(h)
    console.log(h.innerText);
}

// 2
const fruitTitle = document.getElementById("fruit-title");
console.log(fruitTitle)
console.log(fruitTitle.innerText)
fruitTitle.innerText = "Fruit title changes by JS"

// 3
const placess = document.getElementsByClassName("place")
for (const i of placess) {
    console.log(i);
    console.log(i.innerText);
}

// 4
const fruitTitle2 = document.querySelector("#fruit-title");
console.log(fruitTitle2 + " ======with query here");
console.log(fruitTitle2.innerText + " ======with query here");
fruitTitle2.innerText = "Fruit title changed by JS - querySelector";


// 5 html with js
const sections = document.querySelectorAll('section')
for (const i of sections) {
    i.style.border = '2px solid blue'
    i.style.marginBottom = '5px'
    i.style.borderRadius = '15px'
    i.style.paddingLeft ='7px'
    i.style.backgroundColor = 'pink'
}

const fruitTitlehtml = document.getElementById("fruit-list-ul")
const li = document.createElement("li")
li.innerText = "Papaya"
fruitTitlehtml.appendChild(li)

// class task
const changePlace = document.getElementById("places-list-ol")
const innerPlace = document.createElement("li")
innerPlace.innerHTML=<li>JavaScript Union</li>  // use template string for Dynamic to work!
// innerPlace.innerHTML="<li>JavaScript Union</li>"  ---- this also works - static
changePlace.appendChild(innerPlace)




// the one maam tried to do at first - corrected js
let listItems = document.querySelectorAll("#place-container li");

for (const place of listItems) {
    console.log(place.innerText);
}

listItems = document.getElementsByTagName("li");

for (const place of listItems) {
    console.log(place.innerText);
}