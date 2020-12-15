const Order = require('./order')
const uuid = require('uuid')

class Customer {
  constructor(id = uuid.v4(), name, food, location, orders = []) {
    this.id = id

    this.name = name
    this.food = food
    this.location = location
    this.orders = orders
  }

  giveAnOrder(restaurant, food) {
    const order = new Order(this, restaurant, food)
    this.orders.push(order)

    return order
  }

  cancelOrder(orderId) {
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == orderId) {
        this.orders.splice(i, 1)
      }
    }
    console.log(this.orders)
  }

  static create({id, name, food, location, orders}) {
    return new Customer(id, name, food, location, orders)
  }
}

module.exports = Customer