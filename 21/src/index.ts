interface Fruit {
    name: string,
    readonly price: number
    color?: string
}

function getFruit(fruit: Fruit) {
    return `${fruit.name} is having price of $${fruit.price}`
}

let mango: Fruit = { name: 'Mango', price: 20 }
console.log(getFruit(mango));

class MyFruit implements Fruit {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}
