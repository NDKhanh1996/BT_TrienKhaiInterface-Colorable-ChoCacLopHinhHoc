import {Square} from "./Square";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let square = new Square(5, true);
let circle = new Circle(10, false);
let rect = new Rectangle(5,10,true);

let arr: (Square | Circle | Rectangle)[] = [square,circle,rect];
arr.forEach((i) => {
    console.log(i.showInfo())
})