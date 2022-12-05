function sortArray(arr, order) {
  return order === "asc"
    ? arr.sort((a, b) => a - b)
    : arr.sort((a, b) => b - a);
}

function argumentInfo(...input) {
  let obj = {};
  for (let arg of input) {
    console.log(`${typeof arg}: ${arg}`);

    if (!obj.hasOwnProperty(typeof arg)) {
      obj[typeof arg] = 1;
    } else {
      obj[typeof arg]++;
    }
  }

  Object.entries(obj)
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return -1;
      } else {
        return 1;
      }
    })
    .forEach((elem) => {
      console.log(`${elem[0]} = ${elem[1]}`);
    });
}

function argumentInfo(...input){
  let typeObj = {};

  input.forEach( command => {
      typeObj[typeof command] = typeObj[typeof command]? typeObj[typeof command] + 1 : 1;
      console.log(`${typeof command}: ${command}`)
  });

  Object.entries(typeObj).sort(([type,quantity],[nextType,nextQuantity]) => {
      return nextQuantity - quantity;
  })
  .forEach(entry => console.log(`${entry[0]} = ${entry[1]}`));
}

function getFibonator() {
  let x = 0;
  let y = 1;
  let sum = 0;
  let count = 0;

  return function () {
    if (count === 0) {
      count++;
      return 1;
    } else {
      sum = x + y;
      x = y;
      y = sum;
      return sum;
    }
  };
}

function fibonacci() {
  let num1 = 0;
  let num2 = 1;

  return function () {
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    return num1;
  };
}

function chefRobot() {
  let obj = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
    restock(ingr, amount) {
      this[ingr] += amount;
    },
    prepare(recipe, amount) {
      if (recipe === "apple") {
        if (this.carbohydrate - 1 * amount < 0) {
          return "Error: not enough carbohydrate in stock";
        } else if (this.flavour - 2 * amount < 0) {
          return "Error: not enough flavour in stock";
        } else {
          this.carbohydrate -= 1 * amount;
          this.flavour -= 2 * amount;
          return "Success";
        }
      } else if (recipe === "lemonade") {
        if (this.carbohydrate - 10 * amount < 0) {
          return "Error: not enough carbohydrate in stock";
        } else if (this.flavour - 20 * amount < 0) {
          return "Error: not enough flavour in stock";
        } else {
          this.carbohydrate -= 10 * amount;
          this.flavour -= 20 * amount;
          return "Success";
        }
      } else if (recipe === "burger") {
        if (this.carbohydrate - 5 * amount < 0) {
          return "Error: not enough carbohydrate in stock";
        } else if (this.fat - 7 * amount < 0) {
          return "Error: not enough fat in stock";
        } else if (this.flavour - 3 * amount < 0) {
          return "Error: not enough flavour in stock";
        } else {
          this.carbohydrate -= 5 * amount;
          this.flavour -= 3 * amount;
          this.fat -= 7 * amount;
          return "Success";
        }
      } else if (recipe === "eggs") {
        if (this.protein - 5 * amount < 0) {
          return "Error: not enough protein in stock";
        } else if (this.fat - 1 * amount < 0) {
          return "Error: not enough fat in stock";
        } else if (this.flavour - 1 * amount < 0) {
          return "Error: not enough flavour in stock";
        } else {
          this.protein -= 5 * amount;
          this.flavour -= 1 * amount;
          this.fat -= 1 * amount;
          return "Success";
        }
      } else if (recipe === "turkey") {
        if (this.protein - 10 * amount < 0) {
          return "Error: not enough protein in stock";
        } else if (this.carbohydrate - 10 * amount < 0) {
          return "Error: not enough carbohydrate in stock";
        } else if (this.fat - 10 * amount < 0) {
          return "Error: not enough fat in stock";
        } else if (this.flavour - 10 * amount < 0) {
          return "Error: not enough flavour in stock";
        } else {
          this.protein -= 10 * amount;
          this.flavour -= 10 * amount;
          this.fat -= 10 * amount;
          this.carbohydrate -= 10 * amount;
          return "Success";
        }
      }
    },
    restock(ingr, amount) {
      this[ingr] += amount;
      return `Success`;
    },
    report() {
      return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
    },
  };
  return function cooker(command) {
    if (command === "report") {
      return obj.report();
    } else {
      let [cmd, ingredient, quantity] = command.split(" ");
      quantity = Number(quantity);
      return obj[cmd](ingredient, quantity);
    }
  };
}

function chefRobot2() {
  let supplies = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let instructions = {
    restock(element, quantity) {
      supplies[element] += quantity;
      return "Success";
    },
    prepare(recipe, quantity) {
      let check = true;
      let firstMessage = true;
      let message = "Success";

      Object.keys(recipes[recipe]).forEach((ingredient) => {
        if (supplies[ingredient] < recipes[recipe][ingredient] * quantity) {
          check = false;
          if (firstMessage) {
            message = `Error: not enough ${ingredient} in stock`;
            firstMessage = false;
          }
        }
      });

      if (check) {
        Object.keys(recipes[recipe]).forEach((ingredient) => {
          supplies[ingredient] -= recipes[recipe][ingredient] * quantity;
        });
      }

      return message;
    },
    report() {
      return `${Object.entries(supplies)
        .map((supply) => `${supply[0]}=${supply[1]}`)
        .join(" ")}`;
    },
  };

  return function (command) {
    if (command === "report") {
      return instructions.report();
    } else {
      let [cmd, product, quantity] = command.split(" ");
      console.log(supplies);
      return instructions[cmd](product, Number(quantity));
    }
  };
}

function add(num){
  let sum = 0;
  sum += num;

  addAgain.toString = () => sum;

  function addAgain(num2){
      sum += num2;
      return addAgain
  }

  return addAgain;
}

function monkeyPatcher2(command) {
  switch (command) {
    case "upvote":
      this.upvotes++;
      break;
    case "downvote":
      this.downvotes++;
      break;
    case "score":
      let balance = this.upvotes - this.downvotes;

      let rating = "";
      let totalVotes = this.upvotes + this.downvotes;

      if (totalVotes < 10) {
        rating = "new";
      } else if (totalVotes * 0.66 < this.upvotes) {
        rating = "hot";
      } else if (balance >= 0 && totalVotes > 100) {
        rating = "controversial";
      } else if (balance < 0) {
        rating = "unpopular";
      } else {
        rating = "new";
      }

      let reportUpVote = this.upvotes;
      let reportDownVote = this.downvotes;

      if (totalVotes > 50) {
        let percent = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        console.log(percent);
        reportUpVote += percent;
        reportDownVote += percent;
      }

      return [reportUpVote, reportDownVote, balance, rating];
  }
}

function monkeyPatcher3(command) {
  switch (command) {
    case "upvote":
      this.upvotes++;
      break;
    case "downvote":
      this.downvotes++;
      break;
    case "score":
      let balance = this.upvotes - this.downvotes;
      let totalVotes = this.upvotes + this.downvotes;
      rating =
        totalVotes < 10
          ? "new"
          : totalVotes * 0.66 < this.upvotes
          ? "hot"
          : balance >= 0 && totalVotes > 100
          ? "controversial"
          : balance < 0
          ? "unpopular"
          : "new";

      let percent = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
      let reportUpVote =
        totalVotes > 50 ? percent + this.upvotes : this.upvotes;
      let reportDownVote =
        totalVotes > 50 ? percent + this.downvotes : this.downvotes;

      return [reportUpVote, reportDownVote, balance, rating];
  }
}

function calculator() {
  return {
    selector1: undefined,
    selector2: undefined,
    resultSelector: undefined,
    init(select1, select2, result) {
      this.selector1 = document.querySelector(select1);
      this.selector2 = document.querySelector(select2);
      this.resultSelector = document.querySelector(result);
    },
    add() {
      let sum = Number(this.selector1.value) + Number(this.selector2.value);
      this.resultSelector.value = sum;
    },
    subtract() {
      let sum = Number(this.selector1.value) - Number(this.selector2.value);
      this.resultSelector.value = sum;
    },
  };
}

function getArticleGenerator(articles) {
  let contentDiv = document.getElementById("content");
  let articlesArray = articles;
  let index = 0;

  return function () {
    if (index >= articlesArray.length) {
      return;
    }

    let article = document.createElement("article");
    article.textContent = articlesArray[index];
    contentDiv.appendChild(article);
    index++;
  };
}

function solve() {
  console.log("//TODO");

  const addButton = document.getElementById("add");
  const [, openTab, progressTab, completeTab] =
    document.querySelectorAll("section");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    let taskTitle = document.getElementById("task").value;
    let taskDescription = document.getElementById("description").value;
    let taskDate = document.getElementById("date").value;

    if (!taskTitle || !taskDescription || !taskDate) {
      return;
    }

    openTab.lastElementChild.appendChild(
      createTask(taskTitle, taskDescription, taskDate)
    );
  });

  function createTask(title, description, date) {
    let article = document.createElement("article");
    let taskHeading = document.createElement("h3");
    let descriptionParagraph = document.createElement("p");
    let dateParagraph = document.createElement("p");
    let buttonContainer = document.createElement("div");
    let startButton = document.createElement("button");
    let delButton = document.createElement("button");
    buttonContainer.classList.add("flex");
    startButton.classList.add("green");
    delButton.classList.add("red");
    startButton.textContent = "Start";
    delButton.textContent = "Delete";
    [startButton, delButton].forEach((button) =>
      buttonContainer.appendChild(button)
    );
    startButton.addEventListener("click", moveTask);
    delButton.addEventListener("click", deleteTask);
    taskHeading.textContent = title;
    descriptionParagraph.textContent = `Description: ${description}`;
    dateParagraph.textContent = `Due Date: ${date}`;

    [taskHeading, descriptionParagraph, dateParagraph, buttonContainer].forEach(
      (element) => article.appendChild(element)
    );

    return article;
  }

  function moveTask(event) {
    let currentButton = event.target;
    let buttonContainer = currentButton.parentElement;
    let currentTask = buttonContainer.parentElement;

    if (currentButton.textContent === "Start") {
      progressTab.lastElementChild.appendChild(currentTask);
      currentButton.textContent = "Finish";
      currentButton.classList.remove("green");
      currentButton.classList.add("orange");
      buttonContainer.appendChild(currentButton);
    } else {
      buttonContainer.remove();
      completeTab.lastElementChild.appendChild(currentTask);
    }
  }

  function deleteTask(event) {
    let currentTask = event.target.parentElement.parentElement;
    currentTask.remove();
  }
}

function solve() {
  let onScreenButton = document.querySelector("#container button");
  let [movieName, movieHall, ticketPrice] = document.querySelectorAll(
    '#container input[type="text"]'
  );
  let [movieList, archiveList] = document.querySelectorAll("ul");
  let clearButton = document.querySelector("#archive button");

  onScreenButton.addEventListener("click", (e) => {
    e.preventDefault();

    let currentMovieName = movieName.value;
    let currentMovieHall = movieHall.value;
    let currentPrice = Number(ticketPrice.value);

    if (
      !currentMovieName ||
      !currentMovieHall ||
      !currentPrice ||
      !ticketPrice.value
    ) {
      return;
    }

    [movieName, movieHall, ticketPrice].forEach((input) => (input.value = ""));

    movieList.appendChild(
      createListItem(currentMovieName, currentMovieHall, currentPrice)
    );
  });

  clearButton.addEventListener("click", () => {
    let allArchivedMovies = Array.from(
      document.querySelectorAll("#archive ul li")
    );
    deleteMovies(...allArchivedMovies);
  });

  function createListItem(movie, hall, price) {
    let listItem = document.createElement("li");
    let movieTitle = document.createElement("span");
    let movieHall = document.createElement("strong");
    let ticketContainer = document.createElement("div");
    let moviePrice = document.createElement("strong");
    let ticketsSold = document.createElement("input");
    let archiveButton = document.createElement("button");

    movieTitle.textContent = movie;
    movieHall.textContent = `Hall: ${hall}`;
    moviePrice.textContent = price.toFixed(2);
    ticketsSold.setAttribute("placeholder", "Tickets Sold");
    archiveButton.textContent = "Archive";

    [moviePrice, ticketsSold, archiveButton].forEach((element) =>
      ticketContainer.appendChild(element)
    );
    [movieTitle, movieHall, ticketContainer].forEach((element) =>
      listItem.appendChild(element)
    );

    archiveButton.addEventListener("click", archiveMovie);

    return listItem;
  }

  function archiveMovie(e) {
    let archiveButton = e.target;
    let ticketsSold = e.target.previousElementSibling;
    let ticketPrice = e.target.parentElement.firstElementChild;
    let incomeAmount =
      Number(ticketsSold.value) * Number(ticketPrice.textContent);
    let movie = e.target.parentElement.parentElement;
    if (ticketsSold.value && Number(ticketsSold.value) >= 0) {
      archiveButton.parentElement.remove();
      archiveButton.textContent = "Delete";
      movie.appendChild(archiveButton);
      archiveButton.previousElementSibling.textContent = `Total amount: ${incomeAmount.toFixed(
        2
      )}`;
      archiveButton.addEventListener("click", () => deleteMovies(movie));

      archiveList.appendChild(movie);
    }
  }

  function deleteMovies(...moviesToDelete) {
    moviesToDelete.forEach((movie) => movie.remove());
  }
}
