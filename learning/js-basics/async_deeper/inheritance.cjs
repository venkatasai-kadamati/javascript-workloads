// common parent class - holding paint method
class Shape {
  constructor(color) {
    this.color = color;
  }

  // common methods
  paint() {
    console.log("coloring the item with: " + this.color);
  }
}

class Rectangle extends Shape {
  constructor(height, width, color) {
    super(color);
    this.height = height;
    this.width = width;
  }

  // methods
  area() {
    const area = this.width * this.height;
    console.log("area is: " + area);
  }

  perimeter() {
    const perimeter = 2 * (this.width + this.height);
    console.log(perimeter);
  }
}

class Square extends Shape {
  constructor(side, color) {
    super(color);
    this.side = side;
  }

  // methods
  area() {
    const area = this.side * this.side;
    console.log("area is: " + area);
  }

  perimeter() {
    const perimeter = this.side + this.side;
    console.log(perimeter);
  }
}

// trying out inherited methods/ data
let s = new Square(4, "red");
s.paint();
