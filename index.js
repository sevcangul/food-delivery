const colors = require('colors')
const db = require('./database')
const Customer = require('./customer')
const Restaurant = require('./restaurant')

const sevcan = new Customer('Sevcan', 'hamburger', 'Urla')
const bigchefs = new Restaurant('Big Chefs', 'Alsancak')

const order1 = sevcan.giveAnOrder(bigchefs, 'hamburger', 'Urla')
const order2 = sevcan.giveAnOrder(bigchefs, 'pizza', 'Karşıyaka')
const order3 = sevcan.giveAnOrder(bigchefs, 'pasta', 'Alsancak')
const order4 = sevcan.giveAnOrder(bigchefs, 'cheeseburger', 'Bostanlı')

function printOrder(order) {
  console.log(`${colors.blue(order.customer.name)} wants to order ${colors.bgBlue.white(order.food)} from ${colors.green(order.restaurant.brand)} to ${colors.bgGreen.white(order.origin)}`)
}

function printOrderHistory(customer) {
  sevcan.orders.forEach(printOrder)
}

db.save('customers', [{name: 'Sevcan', food: 'hamburger', location: 'Urla'}])
// db.save('restaurants', [bigchefs])

const customers = db.load('customers')
console.log(customers)

// customers.forEach(printOrderHistory)

// printOrderHistory(sevcan)

console.log(`${sevcan.name} has ${sevcan.orders.length} order(s).`)
console.log(sevcan.orders[0].restaurant.location)
console.log(sevcan.orders[0].origin)
console.log(sevcan.orders[1].food)



