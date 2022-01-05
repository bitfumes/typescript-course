// Optional properties & Non-null Assertion

type Fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
    price?: number
}

let fruit1: Fruit = {
    name: 'Mango',
    taste: "Sweet",
    color: "Yellow",
    allSeason: false,
    price: 10
}

// console.log(fruit1.price);


let fruit2: Fruit = {
    name: 'Orange',
    taste: "Sweet-tart",
    color: "Orange",
    allSeason: false,
}


function getPrice(price: number, discount?: number) {
    if (discount)
        return price + discount
}

console.log(getPrice(fruit1.price!));
console.log(getPrice(fruit2.price!));