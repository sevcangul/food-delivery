class Order {
  constructor(customer, restaurant, food, origin) {
    this.customer = customer
    this.restaurant = restaurant
    this.food = food
    this.origin = origin // customer.location?  müşterinin nerede olduğu
    // this.destination = destination // müşterinin nereye gitmek istedği
  }
}

module.exports = Order