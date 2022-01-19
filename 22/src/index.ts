// Generics
let arrNum = [23, 45, 643, 345, 12345]
let arrString = ['a', 'b', 'c', 'd', 'e']

function getRandomElement<A>(arr: A[]): A {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

let result: string
getRandomElement(arrString);
getRandomElement(arrNum);
