const colors = require('colors')

function printOrder(order) {
  console.log(`${colors.blue(order.customer.name)} wants to order ${colors.bgBlue.white(order.food)} from ${colors.green(order.restaurant.brand)}`)
}

function printOrderHistory(customer) {
  if (customer.orders.length == 0) {
    return console.log(`${colors.blue(customer.name)} has no orders yet.`)
  }

  customer.orders.forEach(printOrder)

}

module.exports = printOrderHistory