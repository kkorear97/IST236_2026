class News {
  constructor(id, type, headline, date, author, agency, description, imageUrl) {
    this.id = id;
    this.type = type;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  toString() {
    return `${this.headline} by ${this.author} (${this.agency}) on ${this.date}`;
  }
}

export default News;
