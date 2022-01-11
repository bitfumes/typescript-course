declare class Coordinate {
    protected x: number;
    protected y: number;
    constructor(x: number, y: number);
    protected abcd(): void;
}
declare class MyCoordinate extends Coordinate {
    get anything(): number;
    set anything(value: number);
}
declare const point: MyCoordinate;
