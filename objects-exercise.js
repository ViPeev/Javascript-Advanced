function calorieObject(input) {
  let obj = {};
  for (let i = 0; i < input.length; i += 2) {
    obj[input[i]] = Number(input[i + 1]);
  }
  console.log(obj);
}

function workerObj(input) {
  if (input.dizziness) {
    input.dizziness = false;
    input.levelOfHydrated = input.weight * 0.1;
  }

  return input;
}

function carFactory(input) {
  let carParts = {
    small: {
      power: 90,
      volume: 1800,
    },
    normal: {
      power: 120,
      volume: 2400,
    },
    monster: {
      power: 200,
      volume: 3500,
    }
  };

  let newCar = {
    model: input.model,
    engine:
      input.power <= 90
        ? carParts.small
        : input.power <= 120
        ? carParts.normal
        : carParts.monster,
    carriage: {
      type: input.carriage,
      color: input.color,
    },
    wheels:
      input.wheelsize % 2 === 1
        ? [1, 1, 1, 1].fill(input.wheelsize)
        : [1, 1, 1, 1].fill(input.wheelsize - 1),
  };
  
  return newCar;
}

function heroicInventory(input){
  let heroes = [];

  class Hero {
      constructor(name,level,items){
          this.name = name,
          this.level = level,
          this.items = items
      }
  }

  for(let hero of input){
      let [name,level,items] = hero.split(" / ");
      items = items ? items.split(", "): [];
      let currentHero = new Hero(name,Number(level),items);
      heroes.push(currentHero);
  }
  return JSON.stringify(heroes);
}

function lowestPrice(input) {
  let products = {};

  for (let currentProduct of input) {
    let [town, product, price] = currentProduct.split(" | ");

    if (!products[product]) {
      products[product] = {};
    }

    products[product][town] = Number(price);
  }

  for (let key of Object.keys(products)) {
    let sorted = Object.entries(products[key])
    .sort(([town,price],[nextTown, nextPrice]) => price - nextPrice);
    console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
  }
}


function catalogueFunct(input) {
  class catalogue {
    constructor() {
      this.list = [];
    }
    addProduct(x) {
      this.list.push(x);
      this.list.sort((a, b) => a.localeCompare(b));
    }
    print() {
      this.list.sort((a, b) => a.localeCompare(b));
      let letter = this.list[0][0];
      let arr = [letter];
      for (let i = 0; i < this.list.length; i++) {
        let curLetter = this.list[i][0];

        if (curLetter !== letter) {
          arr.push(curLetter);
          letter = curLetter;
        }
        arr.push(`\t${this.list[i]}`);
      }
      this.list = arr;
      return this.list;
    }
  }

  let newCatalogue = new catalogue();

  for (let elem of input) {
    elem = elem.split(" : ");
    newCatalogue.addProduct(`${elem[0]}: ${elem[1]}`);
  }

  newCatalogue.print().forEach((elem) => console.log(elem));
}

function townToJason(input) {
  let townArr = [];

  class newTown {
      constructor(name, latitude, longitude) {
          this.Town = name,
              this.Latitude = Number(latitude.toFixed(2)),
              this.Longitude = Number(longitude.toFixed(2))
      }
  }
  input.shift();
  for(let elem of input){
      let [town,lat,long] = elem.split(" | ");
      town = town.replace("| ","");
      long = long.replace(" |","");
      let current = new newTown(town,Number(lat),Number(long));
      townArr.push(current);
  }
  return JSON.stringify(townArr)
}

function rectangle(param1, param2, param3) {
  return {
    width: Number(param1),
    height: Number(param2),
    color: param3.replace(param3[0], param3[0].toUpperCase()),
    calcArea: function () {
      return Number(this.width * this.height);
    },
  };
}

function createSortedList(input) {
  return {
    list: [].sort((a, b) => a - b),
    add(x) {
      this.list.push(Number(x));
      this.list.sort((a, b) => a - b);
    },
    remove(x) {
      if (x >= 0 && x < this.list.length) {
        this.list.splice(Number(x), 1);
        this.list.sort((a, b) => a - b);
      }
    },
    get(x) {
      if (x >= 0 && x < this.list.length) {
        return this.list[Number(x)];
      }
    },
    get size() {
      return this.list.length;
    },
  };
}

function solve() {
  return {
    mage(mageName) {
      return {
        name: mageName,
        health: 100,
        mana: 100,
        cast(spell) {
          console.log(`${this.name} cast ${spell}`);
          this.mana--;
        },
      };
    },
    fighter(fighterName) {
      return {
        name: fighterName,
        health: 100,
        stamina: 100,
        fight(move) {
          console.log(`${this.name} slashes at the foe!`);
          this.stamina--;
        },
      };
    },
  };
}

function janRotation(input) {
  let numArr = [];

  for (let elem of input) {
    if (isNaN(Number(elem))) {
      if (numArr.length < 2) {
        return console.log(`Error: not enough operands!`);
      }
      let operator = elem;
      let result = 0;
      let num2 = numArr.pop();
      let num1 = numArr.pop();
      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        result = num1 / num2;
      }
      numArr.push(result);
    } else {
      numArr.push(elem);
    }
  }

  if (numArr.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log(...numArr);
  }
}
