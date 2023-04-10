import {Colorable} from "./Colorable";

export class Circle implements Colorable {
    radius: number;
    color: boolean;

    constructor(radius: number, color: boolean) {
        this.radius = radius;
        this.color = color;
    }

    howToColor(): string {
        return "Color all four sides"
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI
    }

    showInfo(): string {
        if (this.color === true) {
            return `S = ${this.getArea()} and ${this.howToColor()}`
        } else {
            return `S = ${this.getArea()}`
        }
    }
}
