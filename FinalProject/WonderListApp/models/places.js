class Places {
    constructor(
        id,
        name,
        country,
        region,
        rating,
        imageUrl,
        description,
        mapLink
    ) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.region = region;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.description = description;
        this.mapLink = mapLink;
    }

    toString() {
        return `${this.name}, ${this.country} (${this.region}) - ${this.rating}`;
    }
}


export default Places;