const uuid = require('uuid')

class Order {
  constructor(customer, restaurant, food, id = uuid.v4()) {

    this.customer = customer
    this.restaurant = restaurant
    this.food = food
    this.id = id
  }
}

module.exports = Order