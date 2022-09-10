class Place {
    constructor(title, imageUri, address, location) {
        this.title = title
        this.imageUri = imageUri
        this.address = address
        this.location = location // { lat: 0.13165, lng: 231.546 }
        this.id = new Date().toString() + Math.random().toString()
    }
}
