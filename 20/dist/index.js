"use strict";
class Fruit {
    constructor(price) {
        this.price = price;
        Fruit.count++;
    }
    static getCount() {
        return Fruit.count;
    }
}
Fruit.count = 0;
const mango = new Fruit(20);
console.log(Fruit.getCount());
const apple = new Fruit(23);
console.log(Fruit.getCount());
