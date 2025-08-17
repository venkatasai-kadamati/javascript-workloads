let iphone = {
    name: "iphone",
    price: 100000,
    desc: "iphone 13",
    rating: 4.9,

    display() {
        console.log("iphone display: ", this)
    }
}

let macbook = {
    name: "Macbook",
    price: 130000,
    desc: "Machine 13",
    rating: 4.3,

    display() {
        console.log("macbook display: ", this)
    }
}


iphone.display();
macbook.display();

console.log(this)

let Products = {
    arr: [
        {
            name: "iphone",
            price: 100000,
            desc: "iphone 13",
            rating: 4.9,
            getCategory: function print() {
                console.log(this.category)
            }
        },
        {
            name: "Macbook",
            price: 130000,
            desc: "Machine 13",
            rating: 4.3,
            getCategory: function print() {
                console.log(this.category)
            }
        }
    ],
    category: "Electronics"
}

Products.arr[0].getCategory();