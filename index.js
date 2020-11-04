// Restaurant = driver
// Customer = passenger
// Order = booking
const Customer = require('./customer')
const Restaurant = require('./restaurant')

const sevcan = new Customer('Sevcan', 'hamburger', 'Urla')
const nusret = new Restaurant('Nusret', 'Alsancak')

const order1 = sevcan.giveAnOrder(nusret, 'hamburger', 'Urla')
const order2 = sevcan.giveAnOrder(nusret, 'pizza', 'Karşıyaka')
const order3 = sevcan.giveAnOrder(nusret, 'pasta', 'Alsancak')
const order4 = sevcan.giveAnOrder(nusret, 'cheeseburger', 'Bostanlı')

function printOrder(order) {
  console.log(`${order.customer.name} wants to order ${order.food} from ${order.restaurant.brand} to ${order.origin}`)
}

function printOrderHistory(customer) {
  sevcan.orders.forEach(printOrder)
}

printOrderHistory(sevcan)

// nusret.sendAnOrder(order.origin)
console.log(`${sevcan.name} has ${sevcan.orders.length} order(s).`)
console.log(sevcan.orders[0].restaurant.location)
console.log(sevcan.orders[0].origin)
console.log(sevcan.orders[1].food)

// printOrder(order1)
// printOrder(order2)
// printOrder(order3)


