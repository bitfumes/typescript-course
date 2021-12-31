"use strict";
function calTotalPrice(price) {
    return +(price + (price * 0.18)).toFixed(1);
}
const priceOfToy = calTotalPrice(1234);
const discountedPrice = priceOfToy / 2;
console.log(discountedPrice);
