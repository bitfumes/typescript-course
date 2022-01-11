declare class Fruit {
    readonly price: number;
    protected static count: number;
    constructor(price: number);
    static getCount(): number;
}
declare const mango: Fruit;
declare const apple: Fruit;
