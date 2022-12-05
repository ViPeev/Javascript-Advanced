(function extendArray() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    let arr = [];
    let inputNum = n < 0 ? 0 : n > this.length - 1 ? this.length - 1 : n;
    [...this].forEach((element, index) => {
      if (index + 1 > inputNum) {
        arr.push(element);
      }
    });

    return arr;
  };

  Array.prototype.take = function (n) {
    let arr = [];
    let inputNum = n < 0 ? 0 : n > this.length - 1 ? this.length - 1 : n;

    [...this].forEach((element, index) => {
      if (index < inputNum) {
        arr.push(element);
      }
    });

    return arr;
  };

  Array.prototype.sum = function (n) {
    let sum = 0;
    this.forEach((element) => {
      sum += element;
    });

    return sum;
  };

  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str.concat(this);
    }
    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this.concat(str);
    }
    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return this.length === 0 ? true : false;
  };

  String.prototype.truncate = function (n) {
    if (n < 3) {
      return ".".repeat(n);
    }
    if (this.toString().length <= n) {
      return this.toString();
    } else {
      let lastIndex = this.toString()
        .substring(0, n - 2)
        .lastIndexOf(" ");
      if (lastIndex !== -1) {
        return this.toString().substring(0, lastIndex) + "...";
      } else {
        return this.toString().substring(0, n - 3) + "...";
      }
    }
  };

  String.format = function (str, ...params) {
    for (let i = 0; i < params.length; i++) {
      str = str.replace(`{${i}}`, params[i]);
    }
    return str;
  };
})();

function extensibleObject() {
  let obj = {};
  obj.extend = function (template) {
    Object.getOwnPropertyNames(template).forEach((prop) => {
      if (typeof template[prop] === "function") {
        let proto = Object.getPrototypeOf(this);
        proto[prop] = template[prop];
      } else {
        this[prop] = template[prop];
      }
    });
  };

  return obj;
}

function balloons() {
  class Balloon {
    constructor(color, hasWeight) {
      this.color = color;
      this.hasWeight = Number(hasWeight);
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength) {
      super(color, hasWeight);
      this._ribbon = {
        color: ribbonColor,
        length: Number(ribbonLength),
      };
    }

    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
      super(color, hasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }

    get text() {
      return this._text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

function solution() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    work() {
      if (this.tasks) {
        if (this.taskCount >= this.tasks.length) {
          this.taskCount = 0;
        }
        console.log(this.tasks[this.taskCount]);
        this.taskCount++;
      }
    }

    collectSalary() {
      if (this.salary) {
        let salary = this.dividend ? this.salary + this.dividend : this.salary;
        console.log(`${this.name} received ${salary} this month.`);
      }
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.salary = 0;
      this.taskCount = 0;
      this.tasks = [`${this.name} is working on a simple task.`];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.salary = 0;
      this.taskCount = 0;
      this.tasks = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`,
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.salary = 0;
      this.taskCount = 0;
      this.dividend = 0;
      this.tasks = [
        `${this.name} scheduled a meeting.`,
        `${this.name} is preparing a quarterly report.`,
      ];
    }
  }

  return { Employee, Junior, Senior, Manager };
}

function solve() {
  class Post {
    constructor(title, content) {
      this._title = title;
      this._content = content;
    }

    get content() {
      return this._content;
    }

    set content(value) {
      this._content = value;
    }

    get title() {
      return this._title;
    }

    set title(value) {
      this._title = value;
    }

    toString() {
      return `Post: ${this._title}\nContent: ${this._content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      const result = [
        super.toString(),
        `Rating: ${this.likes - this.dislikes}`,
      ];
      if (this.comments.length > 0) {
        result.push("Comments:");
        this.comments.forEach((c) => result.push(` * ${c}`));
      }

      return result.join("\n");
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

function createComputer() {
  class Part {
    constructor(manufacturer) {
        if (new.target === Part) {
            throw new Error;
        }

        this.manufacturer = manufacturer;
    }
}
  class Keyboard extends Part{
    constructor(manufacturer, responseTime) {
      super(manufacturer);
      this.responseTime = responseTime;
    }
  }

  class Monitor extends Part{
    constructor(manufacturer, width, height) {
      super(manufacturer);
      this.width = width;
      this.height = height;
    }
  }

  class Battery extends Part{
    constructor(manufacturer, expectedLife) {
      super(manufacturer);
      this.expectedLife = expectedLife;
    }
  }

  class Computer extends Part {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error;
      }
      super(manufacturer);
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }

    set battery(value) {
      if (!(value instanceof Battery)) {
          throw new TypeError;
      }

      this._battery = value;
  }

    get battery() {
      return this._battery;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    set keyboard(value) {
      if (!(value instanceof Keyboard)) {
          throw new TypeError;
      }

      this._keyboard = value;
  }

    get keyboard() {
      return this._keyboard;
    }

    set monitor(value) {
      if (!(value instanceof Monitor)) {
          throw new TypeError;
      }

      this._monitor = value;
  }

    get monitor() {
      return this._monitor;
    }
  }

  return {
    Desktop,
    Laptop,
    Computer,
    Keyboard,
    Battery,
    Monitor,
  };
}
