class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

const point = new Coordinate(44, 5)
console.log(point.x);
