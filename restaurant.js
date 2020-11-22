class Restaurant {
  constructor(brand, location) {
    this.brand = brand
    this.location = location
  }

  static create({brand, location}) {
    return new Restaurant(brand, location)
  }
}

module.exports = Restaurant