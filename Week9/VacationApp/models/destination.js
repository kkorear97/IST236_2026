class Destination {
  constructor(id, countryId, name, cost, rating, foundedYear, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.foundedYear= foundedYear;
    this.cost = cost;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Price: ${this.price}, Rating: ${this.rating}`;
  }
}

export default Destination;
