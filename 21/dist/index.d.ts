interface Fruit {
    name: string;
    readonly price: number;
    color?: string;
}
declare function getFruit(fruit: Fruit): string;
declare let mango: Fruit;
declare class MyFruit implements Fruit {
    name: string;
    price: number;
    constructor(name: string, price: number);
}
