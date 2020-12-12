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

  giveAnOrder(restaurant, food, origin) {
    const order = new Order(this, restaurant, food, origin)
    this.orders.push(order)

    return order
  }

  cancelOrder(customer,restaurant, food, origin) {
    const order = new Order(this, restaurant, food, origin)

    if(customer.id == this.id) this.orders.splice(order, 1)
    return order
  }

  static create({id, name, food, location, orders}) {
    return new Customer(id, name, food, location, orders)
  }
}

module.exports = Customer