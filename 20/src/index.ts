class Fruit {
    readonly price: number;
    protected static count: number = 0

    constructor(price: number) {
        this.price = price
        Fruit.count++
    }

    static getCount() {
        return Fruit.count
    }
}

const mango = new Fruit(20)
console.log(Fruit.getCount());

const apple = new Fruit(23)
console.log(Fruit.getCount());
