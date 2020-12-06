const BaseDatabase = require('./base-database')
const Restaurant = require('../models/restaurant')

class RestaurantDatabase extends BaseDatabase {
  findByRestaurantName(brand) {
    return this.findBy('brand', brand)
  }
  findByRestaurantLocation(location) {
    return this.findBy('location', location)
  }
}

module.exports = new RestaurantDatabase(Restaurant)