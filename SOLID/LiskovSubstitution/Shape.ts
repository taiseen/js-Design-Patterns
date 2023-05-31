// 30 - May - 2023

/* 
Liskov Substitution Principle - LSP

any instance of a Parent Class should be substitutable for 
an instance of its Child class without affecting the correctness of the program.

In other words, a Parent Class should behave like its Child Class in all contexts. 
In more simple terms, if Class "Rectangle" is a subtype/child of Class "Shape", 
then we should be able to replace child "Rectangle" class with parent "Shape" class
without breaking the behavior of your program.

*/


class Shape {

    // Common properties and methods for all shapes
    protected area: number;

    constructor() {
        this.area = 0;
    }

    calculateArea(): void {
        // Calculation of area specific to each shape
    }

    getArea(): number {
        return this.area;
    }
}

// #######################################################
// #######################################################
// #######################################################

class Rectangle extends Shape {

    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): void {
        this.area = this.width * this.height;
    }
}

// #######################################################
// #######################################################
// #######################################################

class Square extends Shape {

    constructor(private sideLength: number) {
        super();
    }

    calculateArea(): void {
        this.area = this.sideLength * this.sideLength;
    }
}

// #######################################################
// #######################################################
// #######################################################

function printShapeArea(shape: Shape): void {

    shape.calculateArea();
    console.log(`Area: ${shape.getArea()}`);

    // if (shape instanceof Square) {
    //     console.log(`Square Area: ${shape.getArea()}`);
    // } else if (shape instanceof Rectangle) {
    //     console.log(`Rectangle Area: ${shape.getArea()}`);
    // }
}

// #######################################################
// #######################################################
// #######################################################

// Usage
const rectangle = new Rectangle(5, 12);
const square = new Square(5);


printShapeArea(rectangle); // Output: Area: 60
printShapeArea(square); // Output: Area: 25