class Rectangle {
  constructor(height, width, color) {
    this.color = color;
    this.height = height;
    this.width = width; // if suppose width isn't passed (3rd param) then it is set to "undefined"
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

  paint() {
    console.log(`painting rectangle with ${this.color}`);
  }

  // static method - doesn't need to have a object/ global method
  static whoami() {
    console.log("I am a rectangle");
  }
}

let r1 = new Rectangle(10, 20, "red");
r1.area();
r1.paint();
// calling a static method -> used in singleton implementations
Rectangle.whoami();

// promise in itself is a class someone has written
