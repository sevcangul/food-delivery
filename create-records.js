const Customer = require('./models/customer')
const Restaurant = require('./models/restaurant')
const customerDatabase = require('./database/customer-database')
const restaurantDatabase = require('./database/restaurant-database')

const printOrderHistory = require('./lib/print-order-history')

const sevcan = Customer.create({name: 'Sevcan', food: 'hamburger', location: 'Urla'})
const gizem = Customer.create({name: 'Gizem', food: 'cake', location: 'Karşıyaka'})
const bigchefs = Restaurant.create({brand: 'Big Chefs', location: 'Alsancak'})

sevcan.giveAnOrder(bigchefs, 'hamburger', 'Urla')
sevcan.giveAnOrder(bigchefs, 'pizza', 'Karşıyaka')
sevcan.giveAnOrder(bigchefs, 'pasta', 'Alsancak')
sevcan.giveAnOrder(bigchefs, 'cheeseburger', 'Bostanlı')
gizem.giveAnOrder(bigchefs, 'cake', 'Karşıyaka')

customerDatabase.save([sevcan, gizem])
restaurantDatabase.save([bigchefs])

const dilek = Customer.create({name: 'Dilek', food: 'cheeseburger', location: 'Güzelbahçe'})

customerDatabase.insert(dilek)

const customers = customerDatabase.load()

customers.forEach(printOrderHistory)