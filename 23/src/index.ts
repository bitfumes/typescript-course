// Generics constraints

type Person = {
    firstname: string
}
const details = { lastname: "Shrivastava", firstname: "Sarthak" }

function getElement<O extends object, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}
console.log(getElement(details, 'firstname'));


// function getPerson<T extends Person>(data: T) {
//     return data
// }
