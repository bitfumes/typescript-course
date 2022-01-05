// Type Alias & Interface

type Fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}

type Mango = Fruit & {
    price: number
}

let fruit1: Mango = {
    name: 'Mango',
    taste: "Sweet",
    color: "Yellow",
    allSeason: false,
    price: 123
}

let fruit2: Fruit = {
    name: 'Orange',
    taste: "Sweet-tart",
    color: "Orange",
    allSeason: false
}