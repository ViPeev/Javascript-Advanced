class Rectangle {
  constructor(width, height, color) {
    this.width = Number(width);
    this.height = Number(height);
    this.color = color;
  }

  calcArea() {
    return this.width * this.height;
  }
}

class Request {
  fulfilled = false;
  response = undefined;
  constructor(method, uri, version, message) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
  }
}

function ticket(ticketDescriptions, sortingCriteria) {
  let ticketsArr = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  ticketDescriptions.forEach((curTicket) => {
    let [destination, price, status] = curTicket.split("|");
    ticketsArr.push(new Ticket(destination, price, status));
  });

  return ticketsArr.sort((a, b) => {
    if (sortingCriteria === "price") {
      return a.price - b.price;
    }
    return a[sortingCriteria].localeCompare(b[sortingCriteria]);
  });
}

class List {
  #numbersArr = [];
  size = this.#numbersArr.length;

  add(value) {
    this.#numbersArr.push(Number(value));
    this.#numbersArr.sort((a, b) => a - b);
    this.size = this.#numbersArr.length;
    return this;
  }

  remove(value) {
    if (Number(value) < 0 || Number(value) >= this.size) {
      return;
    }

    this.#numbersArr.splice(Number(value), 1);
    this.#numbersArr.sort();
    this.size = this.#numbersArr.length;
    return this;
  }

  get(value) {
    if (Number(value) < 0 || Number(value) >= this.size) {
      return;
    }

    return this.#numbersArr[value];
  }
}

class Stringer {
  constructor(str, initLength) {
    this.innerString = str;
    this.innerLength = initLength;
  }

  increase(value) {
    this.innerLength += Number(value);
    this.innerLength = this.innerLength < 0 ? 0 : this.innerLength;
  }
  decrease(value) {
    this.innerLength -= Number(value);
    this.innerLength = this.innerLength < 0 ? 0 : this.innerLength;
  }
  toString() {
    let truncDots = this.innerString.length > this.innerLength ? "..." : "";
    return `${this.innerString.substr(0, this.innerLength)}${truncDots}`;
  }
}

class Company {
  departments = {};

  addEmployee(name, salary, position, department) {
    salary = Number(salary);
    let inputValidation = [name, salary, position, department].some(
      (parameter) => {
        if (!parameter) {
          return true;
        }
        if (typeof parameter === "number" && parameter < 0) {
          return true;
        }
      }
    );
    if (inputValidation) {
      throw new Error("Invalid input!");
    }

    if (!this.departments[department]) {
      this.departments[department] = { average: 0, employees: [] };
    }

    this.departments[department].employees.push({ name, salary, position });

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    Object.keys(this.departments).forEach((department) => {
      let current = this.departments[department];
      let averageSalary =
        current.employees.reduce((a, b) => a + b.salary, 0) /
        current.employees.length;
      current.average = averageSalary;
    });

    let bestDepartment = Object.keys(this.departments).sort(
      (a, b) => a.average - b.average
    )[0];

    let shorten = this.departments[bestDepartment];
    let sortedEmployess = shorten.employees
      .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .map((employee) => {
        return `${employee.name} ${employee.salary} ${employee.position}`;
      });

    return `Best Department is: ${bestDepartment}\nAverage salary: ${shorten.average.toFixed(
      2
    )}\n${sortedEmployess.join("\n")}`;
  }
}

class Hex {
  constructor(value) {
    this.value = Number(value);
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }

  plus(input) {
    let hexBase = this.value;
    if (typeof input === "number") {
      hexBase += input;
    } else if (input instanceof Hex) {
      hexBase += input.value;
    }

    return new Hex(hexBase);
  }
  minus(input) {
    let hexBase = this.value;
    if (typeof input === "number") {
      hexBase -= input;
    } else if (input instanceof Hex) {
      hexBase -= input.value;
    }

    return new Hex(hexBase);
  }
  parse(hexString) {
    return parseInt(hexString, 16);
  }
}

function juice(juiceArray) {
  let juiceBottles = {};
  let juiceObj = {};

  class Bottle {
    constructor(fruit, quantity) {
      this.fruit = fruit;
      this.quantity = quantity;
    }
    print() {
      console.log(`${this.fruit} => ${Math.floor(this.quantity / 1000)}`);
    }
  }

  juiceArray.forEach((current) => {
    let [fruit, quantity] = current.split(" => ");

    if (!juiceObj[fruit]) {
      juiceObj[fruit] = 0;
    }

    juiceObj[fruit] += Number(quantity);

    if (juiceObj[fruit] >= 1000) {
      juiceBottles[fruit] = new Bottle(fruit, juiceObj[fruit]);
    }
  });

  Object.keys(juiceBottles).forEach((bottle) => {
    juiceBottles[bottle].print();
  });
}

function autoEngineeringCompany(input) {
  let carsStore = {};

  input.forEach((car) => {
    let [brand, model, quantity] = car.split(" | ");
    if (!carsStore[brand]) {
      carsStore[brand] = {};
    }

    if (carsStore[brand][model]) {
      carsStore[brand][model] += Number(quantity);
    } else {
      carsStore[brand][model] = Number(quantity);
    }
  });

  Object.entries(carsStore).forEach(([brand, models]) => {
    console.log(brand);
    Object.entries(models).forEach(([model, quantity]) => {
      console.log(`###${model} -> ${quantity}`);
    });
  });
}

class Contact {
  isOnline = false;
  current = undefined;

  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

  render(id) {
    let article = document.createElement("article");
    let title = document.createElement("div");
    let button = document.createElement("button");
    let infoDiv = document.createElement("div");
    let phone = document.createElement("span");
    let email = document.createElement("span");

    infoDiv.classList.add("info");
    title.classList.add("title");

    if (this.isOnline) {
      title.classList.add("online");
    }

    let textContents = [
      `\u2139`,
      `\u260E ${this.phone}`,
      `\u2709 ${this.email}`,
      `${this.firstName} ${this.lastName}`,
    ];
    Array.from([button, phone, email, title]).forEach(
      (el, index) => (el.textContent = textContents[index])
    );

    infoDiv.style.display = "none";

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      let info = e.currentTarget.parentElement.nextElementSibling;
      if (info.style.display === "none") {
        info.style.display = "block";
      } else {
        info.style.display = "none";
      }
    });

    let parents = [infoDiv, infoDiv, title, article, article];
    let children = [phone, email, button, title, infoDiv];

    Array.from(parents).forEach((el, index) => el.appendChild(children[index]));

    if (!this.current) {
      document.getElementById(id).appendChild(article);
    } else {
      document.getElementById(id).replaceChild(article, this.current);
    }

    this.current = article;
  }
  set online(bool) {
    this.isOnline = bool;
    if (this.current && this.isOnline) {
      this.current.querySelector(".title").classList.add("online");
    } else if (this.current) {
      this.current.querySelector(".title").classList.remove("online");
    }
  }
  get online() {
    return this.isOnline;
  }
}

class Textbox {
    //TODO
    #currValue = "";
  
    constructor(selector, regex) {
      this._invalidSymbols = regex;
      this._elements = document.querySelectorAll(selector);
  
      Array.from(this._elements).forEach((el) => {
        el.addEventListener("input", (e) => {
          this.#currValue = e.currentTarget.value;
          this.changeAll();
        });
      });
    }
  
    get elements() {
      return this._elements;
    }
  
    get value() {
      return this.#currValue;
    }
  
    set value(val) {
      this.#currValue = val;
      this.changeAll();
    }
  
    isValid() {
      return Array.from(this._elements)
        .map((el) => el.value)
        .every((val) => {
          return this._invalidSymbols.exec(val) === null;
        });
    }
  
    changeAll() {
      Array.from(this._elements).forEach((elVal) => {
        elVal.value = this.#currValue;
      });
    }
  }

  describe('Tests for PaymentPackage Class', () => {
 
    describe('Tests for the Name', () => {
 
        it('constructor', () => {
            let instance = new PaymentPackage('Name', 100);
 
            assert.equal(instance._name, 'Name', '1');
            assert.equal(instance._value, 100, '3');
            assert.equal(instance._VAT, 20, '4');
            assert.equal(instance._active, true, '5');
        });
 
        it('Should throw errow when the new Name is a number', () => {
            expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
        });
 
        it('Should throw errow when the new Name is an array', () => {
            expect(() => new PaymentPackage(['abc'], 123)).to.throw('Name must be a non-empty string');
        });
 
        it('Should throw errow when the new Name is empty', () => {
            expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string');
        });
 
        it('Should return the new Name if the input is good', () => {
            expect(() => new PaymentPackage('abc', 123)).not.to.throw('Name must be a non-empty string');
        });
    });
 
    describe('Tests for the Value', () => {
 
        it('Should throw errow when the new Value is a string', () => {
            expect(() => new PaymentPackage('abc', 'abc')).to.throw('Value must be a non-negative number');
        });
 
        it('Should throw errow when the new Value is an array', () => {
            expect(() => new PaymentPackage('abc', [123])).to.throw('Value must be a non-negative number');
        });
 
        it('Should throw errow when the new Value is negative', () => {
            expect(() => new PaymentPackage('abc', -123)).to.throw('Value must be a non-negative number');
        });
 
        it('Should return the new Value if the input is good', () => {
            expect(() => new PaymentPackage('abc', 123)).not.to.throw('Value must be a non-negative number');
        });
 
        it('Set value to null', () => {
            let instance = new PaymentPackage('Name', 100);
            assert.doesNotThrow(() => { instance.value = 0 })
        });
    });
 
    describe('Tests for the VAT', () => {
 
        it('Should throw errow when the new VAT is a string', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = 'abc').to.throw('VAT must be a non-negative number');
        });
 
        it('Should throw errow when the new VAT is an array', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = [123]).to.throw('VAT must be a non-negative number');
        });
 
        it('Should throw errow when the new VAT is negative', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = -123).to.throw('VAT must be a non-negative number');
        });
 
        it('Should return the new VAT if the input is good', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = 123).not.to.throw('VAT must be a non-negative number');
        });
    });
 
    describe('Tests for the Active', () => {
 
        it('Should throw errow when the new Active is a string', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = 'abc').to.throw('Active status must be a boolean');
        });
 
        it('Should throw errow when the new Active is an array', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = [123]).to.throw('Active status must be a boolean');
        });
 
        it('Should throw errow when the new Active is negative', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = -123).to.throw('Active status must be a boolean');
        });
 
        it('Should return the new Active if the input is good', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = true).not.to.throw('Active status must be a boolean');
        });
    });
 
    describe('Tests for toString Method', () => {
 
        it('Should return a string as all the input is correct - 1', () => {
            let flagClass = new PaymentPackage('abc', 123);
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
 
        it('Should return a string as all the input is correct - 2', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
 
        it('Should return a string as all the input is correct - 3', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
 
        it('Should return a string as all the input is correct - 4', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    });
});

describe("Testing StringBuilder", function() {
    describe("Testing StringBuilder initialization with correct input", function() {
        it("Testing with valid params", function() {
            let newString = new StringBuilder("Misho");
            newString.append(" Shamara");
            assert.equal(newString.toString(),"Misho Shamara");
            newString.prepend("Nai-dobriya raper e ");
            assert.equal(newString.toString(),"Nai-dobriya raper e Misho Shamara");
            newString.insertAt("nai-",4);
            assert.equal(newString.toString(),"Nai-nai-dobriya raper e Misho Shamara");
            newString.remove(0,16);
            assert.equal(newString.toString(),"raper e Misho Shamara");
            assert.equal(newString._stringArray.length,21);
        });
        it("Testing with no initial params", function() {
            let newString = new StringBuilder();
            assert.equal(newString._stringArray.length,0);
            newString.append("Shamara");
            assert.equal(newString.toString(),"Shamara");
            newString.prepend("Nai-dobriya raper e ");
            assert.equal(newString.toString(),"Nai-dobriya raper e Shamara");
            newString.insertAt("nai-",4);
            assert.equal(newString.toString(),"Nai-nai-dobriya raper e Shamara");
            newString.remove(0,16);
            assert.equal(newString.toString(),"raper e Shamara");
            assert.equal(newString._stringArray.length,15);
        });
        it("Testing with invalid data", function() {
            assert.throws(() => new StringBuilder(2), 'Argument must be a string');
            assert.throws(() => new StringBuilder([1,2,3]), 'Argument must be a string');
            assert.throws(() => new StringBuilder(["a","b","c"]), 'Argument must be a string');
            assert.throws(() => new StringBuilder({a:1}), 'Argument must be a string');

            let newString = new StringBuilder();
            assert.throws(() => newString.append(3), 'Argument must be a string');
            assert.throws(() => newString.append({b:2}), 'Argument must be a string');
            assert.throws(() => newString.append(true), 'Argument must be a string');
            assert.throws(() => newString.append([1,2,3]), 'Argument must be a string');
            assert.throws(() => newString.prepend(3), 'Argument must be a string');
            assert.throws(() => newString.prepend({b:2}), 'Argument must be a string');
            assert.throws(() => newString.prepend(true), 'Argument must be a string');
            assert.throws(() => newString.prepend([1,2,3]), 'Argument must be a string');
            assert.throws(() => newString.insertAt(3,5), 'Argument must be a string');
            assert.throws(() => newString.insertAt(2,{b:2}), 'Argument must be a string');
            assert.throws(() => newString.insertAt(1,true), 'Argument must be a string');
            assert.throws(() => newString.insertAt(5,[1,2,3]), 'Argument must be a string');
            assert.equal(newString.toString(),"");
            newString.append("hello");
            newString.remove(0,1);
            assert.equal(newString.toString(),"ello");
        });
    });
});