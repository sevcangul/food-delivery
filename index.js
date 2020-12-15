const { customerDatabase, restaurantDatabase } = require('./database')
const printOrderHistory = require('./lib/print-order-history')

async function main() {
  const bigchefs = await restaurantDatabase.findBy('brand', 'Big Chefs')
  const sevcan = await customerDatabase.findByName('Sevcan')

  // sevcan.giveAnOrder(bigchefs, 'san sebastian cheesecake')
  // await customerDatabase.update(sevcan)

  sevcan.cancelOrder('375a2331-b018-4ea2-95a5-13b832cec2d2')


  printOrderHistory(sevcan)
  // console.log(await customerDatabase.findBy('location', 'Karşıyaka'))

}

main()


































// const sevcan = Customer.create({name: 'Sevcan', food: 'hamburger', location: 'Urla'})
// const gizem = Customer.create({name: 'Gizem', food: 'cake', location: 'Karşıyaka'})
// const bigchefs = Restaurant.create({brand: 'Big Chefs', location: 'Alsancak'})
// restaurantDatabase.save(bigchefs)
// sevcan.giveAnOrder(bigchefs, 'hamburger', 'Urla')
// sevcan.giveAnOrder(bigchefs, 'pizza', 'Karşıyaka')
// sevcan.giveAnOrder(bigchefs, 'pasta', 'Alsancak')
// sevcan.giveAnOrder(bigchefs, 'cheeseburger', 'Bostanlı')
// gizem.giveAnOrder(bigchefs, 'cake', 'Karşıyaka')

// function printOrder(order) {
//   console.log(`${colors.blue(order.customer.name)} wants to order ${colors.bgBlue.white(order.food)} from ${colors.green(order.restaurant.brand)} to ${colors.bgGreen.white(order.origin)}`)
// }

// function printOrderHistory(customer) {
//   if (customer.orders.length == 0) {
//     return console.log(`${colors.blue(customer.name)} has no orders yet.`)}

//  customer.orders.forEach(printOrder)

// }

// customerDatabase.save([sevcan, gizem])
//  const customers = customerDatabase.load()
  // customers.forEach(printOrderHistory)

// console.log(restaurantDatabase.findBy('brand', 'Big Chefs'))
// db.save('customers', [sevcan, gizem])
// db.save('customers', [{name: 'Sevcan', food: 'hamburger', location: 'Urla'}])
// db.save('restaurants', [bigchefs])

// const dilek = new Customer('Dilek', 'cheeseburger', 'Güzelbahçe')
// customerDatabase.insert('customers', dilek)
// customerDatabase.remove('customers', 2)

// const customers = db.load('customers')
// const sevcan = customerDatabase.findByName('Sevcan')
// customers.forEach(printOrderHistory)
// console.log(sevcan)
// console.log(restaurantDatabase.findByRestaurantName('Big Chefs'))



// sevcan.giveAnOrder(bigchefs, 'burgerrrrr', 'Urrrrla')
// customerDatabase.update(sevcan)
// printOrderHistory(sevcan)
