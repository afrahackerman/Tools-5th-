const shop={
    owner: "bobby",
    address: {
        street: "Amondron",
        city: "Gokimum",
        country: "FY"
    },
    products: ['laptop', 'mac', 'monitor', 'keyboard'],
    revenue: 1000000,
    isOpen: true,
    isNew: false
}
console.log("shop", shop)

const shopJSON=JSON.stringify(shop)
console.log("shopJSON", shopJSON)
const parse = JSON.parse(shopJSON)
console.log("parse", parse)

// Array of Objects
const products = [
    {id:1, name:'lenovo', price:65000},
    {id:2, name:'dell', price:45000},
    {id:3, name:'mac', price:15000},
    {id:4, name:'hp', price:8000}
]
// 1
for(const i of products){
    console.log(i)
}
// 2
console.log(products.map(p=>p.name))
// 3
products.forEach(p=>console.log(p.price))

console.log(products.filter(p=>p.price>50000 && p.price<100000))
console.log(products.find(p=>p.price<50000))

// API - fething data

// token copy code from jasonplaceholder -
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) //convert data to json
    .then(json => console.log(json)) //show in output


console.log("DSPLAY using button")

// arrow function(without writing 'function')
const loadPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log("fetched data length", data.length);
            displayPosts(data)
        })
        .catch(error=>console.log(error))
}

const displayPosts=(data)=>{
    console.log(data)
    const product=document.getElementById("products-container")
    // product.innerHTML = ""; // clear before adding items

    for(const i of data) {
        console.log(i.body)

        const div=document.createElement("div")
        div.innerText=i.title;
        product.appendChild(div)
    }
}