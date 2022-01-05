declare type Fruit = {
    name: string;
    taste: string;
    color: string;
    allSeason: boolean;
    price?: number;
};
declare let fruit1: Fruit;
declare let fruit2: Fruit;
declare function getPrice(price: number, discount?: number): number | undefined;
