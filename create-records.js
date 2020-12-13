const Customer = require('./models/customer')
const Restaurant = require('./models/restaurant')
const customerDatabase = require('./database/customer-database')
const restaurantDatabase = require('./database/restaurant-database')

const printOrderHistory = require('./lib/print-order-history')

const sevcan = Customer.create({name: 'Sevcan', food: 'hamburger', location: 'Urla'})
const gizem = Customer.create({name: 'Gizem', food: 'cake', location: 'Karşıyaka'})
const bigchefs = Restaurant.create({brand: 'Big Chefs', location: 'Alsancak'})

sevcan.giveAnOrder(bigchefs, 'hamburger')
sevcan.giveAnOrder(bigchefs, 'pizza')
sevcan.giveAnOrder(bigchefs, 'pasta')
sevcan.giveAnOrder(bigchefs, 'cheeseburger')
gizem.giveAnOrder(bigchefs, 'cake')
// sevcan.giveAnOrder(bigchefs, 'hamburger4', 'Urla4')

// sevcan.cancelOrder(bigchefs, 'cheeseburger', 'Bostanlı')

async function main() {
  try {
    await customerDatabase.save([sevcan, gizem])

    await restaurantDatabase.save([bigchefs])

    const dilek = Customer.create({ name: 'Dilek', food: 'cheeseburger', location: 'Güzelbahçe' })

    await customerDatabase.insert(dilek)
    const customers = await customerDatabase.load()
    customers.forEach(printOrderHistory)
  } catch (e) {
    console.log(e)
  }

}

main()