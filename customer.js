const Order = require('./order')
class Customer {
  constructor(name, food, location) {
    this.name = name
    this.orders = []
    this.food = food
    this.location = location
  }

  giveAnOrder(restaurant, food, origin) {
    const order = new Order(this, restaurant, food, origin)
    this.orders.push(order)

    return order
  }
}

module.exports = Customer