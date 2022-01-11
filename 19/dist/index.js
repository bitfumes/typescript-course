"use strict";
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    abcd() { }
}
class MyCoordinate extends Coordinate {
    get anything() {
        return this.x;
    }
    set anything(value) {
        this.x = value;
    }
}
const point = new MyCoordinate(44, 5);
point.anything = 55;
console.log(point.anything);
