"use strict";
// Generics constraints
const details = { lastname: "Shrivastava", firstname: "Sarthak" };
function getElement(obj, key) {
    return obj[key];
}
console.log(getElement(details, 'firstname'));
// function getPerson<T extends Person>(data: T) {
//     return data
// }
