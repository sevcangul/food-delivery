const uuid = require('uuid')

class Order {
  constructor(customer, restaurant, food, origin, id = uuid.v4()) {

    this.customer = customer
    // this.orderId = orderId
    this.restaurant = restaurant
    this.food = food
    this.origin = origin // customer.location?
    this.id = id
  }
}

module.exports = Order