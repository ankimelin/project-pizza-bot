const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
let orderName

window.onload = () => {
    document.getElementById("welcome").innerHTML = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
    document.getElementById("enterPizza").innerHTML = `Enter the name of the pizza you want to order today.`
}

const validateOrderName = (pizza) => {
    event.preventDefault();
    orderName = pizza
    if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
        document.getElementById("response").innerHTML = `How many ${orderName} do you want?` 
    } else {
        return wrongOrder()
    }
}

const great = (orderQuantity) => {
    event.preventDefault();
    const orderTotal = (orderQuantity * pizzaPrice)
    calculateCookingTime(orderQuantity)
    document.getElementById("great").innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and take ${orderTime} minutes.`
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

const wrongOrder = () => {
    alert(`No such pizza on the menu. Please choose one of the following pizzas: ${vegetarian}, ${hawaiian} or ${pepperoni}.`)
    whatPizza()
}

// const welcome = () => {
//     alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)
// }

// welcome()

// const whatPizza = () => {
//     orderName = prompt(`Enter the name of the pizza you want to order today.`)
//     validateOrderName(orderName)
// }

// const validateOrderName = (orderName) => {
//     if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
//         calculateTotalCost()
//         calculateCookingTime()
//         return alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${orderTime} minutes.`)
//     } else {
//         return wrongOrder()
//     }
// }

// let validateOrderName = () => {
//     if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
//         calculateTotalCost()
//         calculateCookingTime()
//         return alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${orderTime} minutes.`)
//     } else {
//         return wrongOrder()
//     }
// }

// const calculateTotalCost = () => {
//     orderQuantity = prompt(`How many of ${orderName} do you want?`)
//     orderTotal = (orderQuantity * pizzaPrice)
// }








