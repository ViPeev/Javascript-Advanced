function subtract() {
  console.log("TODO:...");
  let firstNumber = document.getElementById("firstNumber");
  let secondNumber = document.getElementById("secondNumber");
  let result = document.getElementById("result");
  let val = Number(firstNumber.value) - Number(secondNumber.value);
  result.textContent = val;
}

function solve() {
  const text = document.getElementById("text").value;
  const naming = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById("result");
  const splitted = text.split(" ");

  let resultString = "";

  if (naming == "Pascal Case") {
    for (let i = 0; i < splitted.length; i++) {
      resultString +=
        splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    // resultContainer must receive final value
    resultContainer.textContent = resultString;
  } else if (naming == "Camel Case") {
    resultString +=
      splitted[0][0].toLowerCase() +
      splitted[0].slice(1, splitted[0].length).toLowerCase();
    for (let i = 1; i < splitted.length; i++) {
      resultString +=
        splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    resultContainer.textContent = resultString;
  } else {
    resultContainer.textContent = "Error!";
  }
}

function pascalCamelCase() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let span = document.querySelector("span");

  input = input.toLowerCase().split(" ");

  if (currentCase === "Camel Case" || currentCase === "Pascal Case") {
    let startingIndex = currentCase === "Pascal Case" ? 0 : 1;
    for (let i = startingIndex; i < input.length; i++) {
      let firstLetter = input[i][0];
      input[i] = input[i].replace(firstLetter, firstLetter.toUpperCase());
    }
    input = input.join("");
  } else {
    input = "Error!";
  }

  span.textContent = input;
}

function toggle() {
  let button = document.querySelector(`span.button`);
  let divHiden = document.getElementById(`extra`);
  if (button.textContent == `More`) {
    divHiden.style.display = `block`;
    button.textContent = `Less`;
  } else if (button.textContent == `Less`) {
    divHiden.style.display = `none`;
    button.textContent = `More`;
  }
}

function search(){
    let list = Array.from(document.querySelectorAll("li"));
    let searchPattern  = document.querySelector("#searchText").value;
    let result = document.getElementById("result");
    let matches = 0;
    list.forEach( listItem => {
        let text = listItem.textContent;
        if(text.includes(searchPattern)){
            listItem.style.textDecoration = "underline";
            listItem.style.fontWeight = "bold";
            matches++;
        }
    });

    result.innerText = `${matches} matches found`;
    document.querySelector("input").innerText = "";
}

function search() {
  towns = Array.from(document.querySelectorAll("ul#towns>li"));
  searchText = document.querySelector("input#searchText").value;
  resultDiv = document.querySelector("div#result");

  let matches = 0;
  towns.forEach((townLiElement) => {
    let townName = townLiElement.textContent;
    if (searchText && townName.indexOf(searchText) >= 0) {
      townLiElement.innerHTML = `<bold><u>${townName}</u></bold>`;
      matches++;
    }
  });
  resultDiv.textContent = `${matches} matches found`;
}

function solve() {
  let dataTr = Array.from(document.querySelectorAll("tbody > tr"));
  let searchBtn = document.querySelector("#searchBtn");
  let searchField = document.querySelector("#searchField");
  searchBtn.addEventListener("click", function () {
    let regex = new RegExp(searchField.value, "gim");
    dataTr.map((e) => {
      e.classList.remove("select");
      if (e.innerHTML.match(regex) !== null) {
        e.className = "select";
      }
    });
    searchField.value = "";
  });
}

function solve() {
  let textArea = document.getElementById("input");
  let textArr = textArea.value.split(".").filter((sentence) => {
    return sentence;
  });

  let outPut = document.getElementById("output");
  let fullString = "";
  for (let i = 0; i < textArr.length; i += 3) {
    let outputStr = "<p>";
    for (let n = i; n < i + 3 && n < textArr.length; n++) {
      outputStr += textArr[n] + ".";
    }
    outputStr += "</p>";
    fullString += outputStr;
  }
  outPut.innerHTML = fullString;
}

function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let arr = JSON.parse(document.querySelector("#inputs textarea").value);
    let objWinner = findBestRestaurant(arr);
    document.querySelector("#bestRestaurant>p").textContent =
      getMsgRest(objWinner);
    document.querySelector("#workers>p").textContent = getMsgEmp(
      objWinner.workers
    );
  }

  function getMsgRest(objWinner) {
    return `Name: ${
      objWinner.name
    } Average Salary: ${objWinner.avgSalary.toFixed(
      2
    )} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
  }

  function getMsgEmp(workers) {
    return workers
      .map((w) => `Name: ${w.worker} With Salary: ${w.salary}`)
      .join(" ");
  }

  function findBestRestaurant(arr) {
    let resultRestaurants = arr.reduce((acc, e) => {
      let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
      workers = workers.map((w) => {
        let [worker, salary] = w.split(" ");
        return {
          worker: worker,
          salary: +salary,
        };
      });
      let foundRestraunt = acc.find((r) => r.name === restaurant);
      if (foundRestraunt) {
        foundRestraunt.workers = foundRestraunt.workers.concat(workers);
      } else {
        acc.push({
          name: restaurant,
          workers: workers,
        });
      }
      return acc;
    }, []);

    resultRestaurants.forEach((el, idx) => {
      el.inputOrder = idx;
      el.avgSalary =
        el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
      el.maxSalary = Math.max(...el.workers.map((w) => w.salary));
    });

    resultRestaurants.sort(
      (a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder
    );
    let bestRestaurant = resultRestaurants[0];
    bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

    return bestRestaurant;
  }
}

function generateReport() {
  //TODO
  let checkBoxes = Array.from(document.querySelectorAll("thead th"));
  let columns = Array.from(document.querySelectorAll("tbody tr"));
  let textArea = document.querySelector("#output");
  let checkBoxArr = [];
  let objArr = [];

  for (let i = 0; i < checkBoxes.length; i++) {
    let checkBox = checkBoxes[i].firstElementChild;
    if (checkBox.checked) {
      checkBoxArr.push([i, checkBox.name]);
    }
  }

  for (let column of columns) {
    let personObj = {};
    let tds = column.children;
    for (let checkBox of checkBoxArr) {
      personObj[checkBox[1]] = tds[checkBox[0]].textContent;
    }
    objArr.push(personObj);
  }

  objArr = JSON.stringify(objArr);
  textArea.value = objArr;
}

function solve() {
  //TODO...
  let button = document.querySelector("button");
  button.addEventListener("click", onClick);

  let select = document.querySelector("#selectMenuTo");
  let input = document.querySelector("#input");
  let output = document.querySelector("#result");
  let binary = document.createElement("option");
  binary.text = "Binary";
  binary.value = "binary";
  let hexa = document.createElement("option");
  hexa.text = "Hexadecimal";
  hexa.value = "hexadecimal";
  select.appendChild(binary);
  select.appendChild(hexa);

  function onClick() {
    let number = Number(input.value);
    if (select.value === "binary") {
      number = number.toString(2);
    } else if (select.value === "hexadecimal") {
      number = number.toString(16);
    }
    output.value = number.toUpperCase();
  }
}
