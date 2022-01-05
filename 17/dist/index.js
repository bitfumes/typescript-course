"use strict";
// Optional properties & Non-null Assertion
let fruit1 = {
    name: 'Mango',
    taste: "Sweet",
    color: "Yellow",
    allSeason: false,
    price: 10
};
// console.log(fruit1.price);
let fruit2 = {
    name: 'Orange',
    taste: "Sweet-tart",
    color: "Orange",
    allSeason: false,
};
function getPrice(price, discount) {
    if (discount)
        return price + discount;
}
console.log(getPrice(fruit1.price));
console.log(getPrice(fruit2.price));
