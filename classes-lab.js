class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

function getPersons() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  let people = [
    {
      firstName: "Anna",
      lastName: "Simpson",
      age: 22,
      email: "anna@yahoo.com",
    },
    { firstName: "SoftUni" },
    { firstName: "Stephan", lastName: "Johnson", age: 25 },
    {
      firstName: "Gabriel",
      lastName: "Peterson",
      age: 24,
      email: "g.p@gmail.com",
    },
  ];

  return people.map(
    (person) =>
      new Person(person.firstName, person.lastName, person.age, person.email)
  );
}

class Circle {
  constructor(radius) {
    this.radius = Number(radius);
  }
  set diameter(num) {
    this.radius = Number(num) / 2;
  }
  get diameter() {
    return this.radius * 2;
  }
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Point {
  constructor(x, y) {
    this.x = Number(x);
    this.y = Number(y);
  }

  static distance(point1, point2) {
    let y = point2.x - point1.x;
    let x = point2.y - point1.y;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }
}
