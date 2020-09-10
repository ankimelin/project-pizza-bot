const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

alert(`Hey, happy to see you! We have ${vegetarian}, ${hawaiian} and ${pepperoni} today on the menu!`)

const orderName = prompt("Enter the name of the pizza you want to order")









let orderQuantity = 0;


if (orderName === ((vegetarian), (hawaiian), (pepperoni))) {
    orderQuantity = prompt(`How many ${orderName} do you want?`);
} else {
  prompt("Select a pizza from the menu");
}

const orderTotal = (orderQuantity*pizzaPrice)

let orderTime = 0;
if (orderQuantity >= 6) {
    orderTime = 20; 
} else if (orderQuantity >= 3) {
    orderTime = 15;
} else {
    orderTime = 10;
}

alert(`Great, I'll start your ${orderName} right away, it will cost ${orderTotal} and take ${orderTime} minutes.`)


//const age = document.getElementById("age").value;

//const age = document.getElementById("age").innerHTML = doubleAge;

//event.preventDefault();

//should we use event handlers in html <button onclick="choosePizza()"> or write in js document.getElementById("button").onclick = choosePizza; ? FIRST ONE AS FOR NOW

//no prompts, use form


