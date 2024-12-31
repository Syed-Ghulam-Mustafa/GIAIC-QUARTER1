type Author = {
    firstName: String,
    lastName: String
}

type Book = {
    author: Author,
    bookName: string
}
let myBook : Book = {
    author: {
        firstName: "John",
        lastName: "Doe"
    },
    bookName: "The Lord of the Rings"
}

let car = {
    make: "Ford",
    model: "Mustang",
    year: 2020}

    