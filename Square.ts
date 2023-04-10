import {Colorable} from "./Colorable";

export class Square implements Colorable {
    private readonly _side: number;
    private readonly _color: boolean;

    constructor(side: number, color: boolean) {
        this._side = side;
        this._color = color;
    }

    howToColor(): string {
        return "Color all four sides"
    }

    getArea(): number {
        return this._side * this._side
    }

    showInfo(): string {
        if (this._color === true) {
            return `S = ${this.getArea()} and ${this.howToColor()}`
        } else {
            return `S = ${this.getArea()}`
        }
    }
}
