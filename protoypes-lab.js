class Person {
  constructor(first, last) {
    this._firstName = first;
    this._lastName = last;
    this._fullName = `${first} ${last}`;
  }

  set firstName(val) {
    this._firstName = val;
    this._fullName = `${this._firstName} ${this._lastName}`;
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(val) {
    this._lastName = val;
    this._fullName = `${this._firstName} ${this._lastName}`;
  }
  get lastName() {
    return this._lastName;
  }
  set fullName(val) {
    if (typeof val === "string" && val.split(" ").length === 2) {
      let [firstName, lastName] = val.split(" ");
      this._firstName = firstName;
      this._lastName = lastName;
      this._fullName = val;
    }
  }
  get fullName() {
    return this._fullName;
  }
}

function personAndTeacher() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
  }

  return {
    Person,
    Teacher,
  };
}

function toStringExtension() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      let objName = this.constructor.name;
      let message = Object.entries(this)
        .map(([key, val]) => {
          return `${key}: ${val}`;
        })
        .join(", ");
      return `${objName} (${message})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
  }
  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}

function extendPrototype(classToExtend) {
  classToExtend.prototype.species = "Human";
  classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

function classHierarchy() {
  class Figure {
    constructor(unit = "cm") {
      this.units = unit;
    }

    changeUnits(newUnit) {
      this.units = newUnit;
    }

    toString() {
      if (this.hasOwnProperty("radius")) {
        return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
      }
      if (this.hasOwnProperty("width")) {
        return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
      }
    }

    metricConversion(num) {
      if (this.units === "m") return (num /= 10);
      if (this.units === "mm") return (num *= 10);
      return num;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this._radius = Number(radius);
    }

    get area() {
      this.radius = this.metricConversion(this._radius);
      return Math.PI * this.radius ** 2;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this._width = Number(width);
      this._height = Number(height);
    }
    get area() {
      this.width = this.metricConversion(this._width);
      this.height = this.metricConversion(this._height);
      return this.width * this.height;
    }
  }

  return { Figure, Circle, Rectangle };
}
