interface item {
    name: string
    price: number
};

// creating two objects

const book: item={
    name = "Essentials of Typescript 5"
    price = 2000
};
const apple: item={
    name = "a for apple"
    price = 400
};

console.log(`i bought a book named ${book.name}, and the price was $${book.price}`)
console.log(`i bought apples named ${apple.name}, and the price was $${apple.price}`)