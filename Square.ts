import {Colorable} from "./Colorable";

class Square implements Colorable{
    private _side: number;
    private _color: boolean;

    constructor(side: number, color: boolean) {
        this._side = side;
        this._color = color;
    }

    getSide(): number {
        return this._side;
    }

    setSide(value: number) {
        this._side = value;
    }

    getColor(): boolean {
        return this._color;
    }

    setColor(value: boolean) {
        this._color = value;
    }

    howToColor(): string {
        return "Color all four sides"
    }
    getArea(): number{
        return this._side * this._side
    }
    showInfo():string{
        if (this._color === true){
            return `S = ${this.getArea()} and ${this.howToColor()}`
        }
        else {
            return `S = ${this.getArea()}`
        }
    }
}
let square1 = new Square( 10, true);
let square2 = new Square( 5, false);
let square3 = new Square( 8, false);
let square4 = new Square( 3, true);

let arr = [square1,square2,square3,square4]

arr.forEach((i) => {
    console.log(i.showInfo())})
