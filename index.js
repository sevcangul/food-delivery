// Restaurant = driver
// Customer = passenger
// Order = booking


class Customer {
  constructor(name, food, location) {
    this.name = name
    this.orders = []
    this.food = food
    this.location = location
  }

  giveAnOrder(restaurant, food, destination, origin) {
    const order = new Order(this, restaurant, food, destination, origin)
    this.orders.push(order)
  }
}

class Order {
  constructor(customer, restaurant, food, destination, origin) {
    this.customer = customer
    this.restaurant = restaurant
    this.food = food
    this.origin = customer.location // where is customer is
    this.destination = destination // where the restaurant is
  }
}

class Restaurant {
  constructor(brand) {
    this.brand = brand
  }
}

const sevcan = new Customer('Sevcan', 'hamburger', 'Urla')
const nusret = new Restaurant('Nusret')

sevcan.giveAnOrder(nusret, 'hamburger','Alsancak', 'Urla')
sevcan.giveAnOrder(nusret, 'pizza', 'Karşıyaka', 'Çeşme')
console.log(`${sevcan.name} has ${sevcan.orders.length} orders.`)
console.log(sevcan.orders[1].destination)
console.log(sevcan.orders[1].origin)
console.log(`${sevcan.name} wants to order ${sevcan.orders[1].food} from ${sevcan.orders[1].restaurant.brand} to ${sevcan.orders[1].origin}`)
