import {Colorable} from "./Colorable";

export class Rectangle {
    width: number;
    height: number;
    color: boolean;

    constructor(width: number, height: number, color: boolean) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    howToColor(): string {
        return "Color all four sides"
    }

    getArea(): number {
        return this.width * this.height
    }

    showInfo(): string {
        if (this.color === true) {
            return `S = ${this.getArea()} and ${this.howToColor()}`
        } else {
            return `S = ${this.getArea()}`
        }
    }
}