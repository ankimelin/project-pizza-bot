const vegetarian = "Vegetarian"
const hawaiian = "Hawaiian"
const pepperoni = "Pepperoni"

const pizzaPrice = 80

let orderName
let orderQuantity
let orderTotal
let orderTime

window.onload = () => {
    document.getElementById("welcome").innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni} pizza.`
    document.getElementById("enter-pizza").innerHTML = `Enter the name of the pizza you want to order today.`
}

const validateOrderName = (pizza) => {
    event.preventDefault()
    orderName = pizza
    document.getElementById("response").style.display = "block"
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        document.getElementById("response").innerHTML = `How many ${orderName} pizza do you want?` 
        document.getElementById("second-answer").style.display = "block"
    } else {
        document.getElementById("response").innerHTML = `No such pizza on the menu. Try again!`
    }
}

const great = (quantity) => {
    event.preventDefault()
    orderQuantity = quantity
    orderTotal = (orderQuantity * pizzaPrice)
    calculateCookingTime(orderQuantity)
    document.getElementById("great").style.display = "block"
    document.getElementById("great").innerHTML = `Great, I'll get started on your ${orderName} pizza right away, it will cost ${orderTotal} kr and take ${orderTime} minutes.`
}

const calculateCookingTime = (orderQuantity) => {
    if (orderQuantity > 0 && orderQuantity <= 2) {
        orderTime = 10
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        orderTime = 15
    } else if (orderQuantity >= 6) {
        orderTime = 20
    }
}






