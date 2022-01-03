// Object type

type Fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}

let fruit1: Fruit = {
    name: 'Mango',
    taste: "Sweet",
    color: "Yellow",
    allSeason: false
}

let fruit2: Fruit = {
    name: 'Orange',
    taste: "Sweet-tart",
    color: "Orange",
    allSeason: false
}

console.log(typeof fruit1.name);
