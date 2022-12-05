function create(words) {
    console.log('TODO:...');
    let content = document.getElementById("content");

    for (let word of words) {
        content.innerHTML += `<div><p>${word}</p></div>`;
    }

    let p = Array.from(document.getElementsByTagName("p"));
    let divs = Array.from(document.querySelectorAll("#content div"));

    p.forEach((para) => {
        para.style.display = "none";
    });

    divs.forEach((div) => {
        div.addEventListener("click", () => {
            div.firstElementChild.style.display = "block";
        })
    })
}

function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function () {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    });

    hoursBtn.addEventListener('click', function () {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    });

    minutesBtn.addEventListener('click', function () {
        let minutes = minutesInput.value;
        hoursInput.value = minutes / 60;
        daysInput.value = minutes / 60 / 24;
        secondsInput.value = minutes * 60;
    });

    secondsBtn.addEventListener('click', function () {
        let seconds = secondsInput.value;
        hoursInput.value = seconds / 60 / 60;
        minutesInput.value = seconds / 60;
        daysInput.value = seconds / 60 / 60 / 24;
    });
}

function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let rations = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    };

    document.getElementById('daysBtn').addEventListener('click',onConvert);
    document.getElementById('hoursBtn').addEventListener('click',onConvert);
    document.getElementById('minutesBtn').addEventListener('click',onConvert);
    document.getElementById('secondsBtn').addEventListener('click',onConvert);

    function convert(value,unit){
        let days = value / rations[unit];

        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }
    }

    function onConvert(event){
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value),input.id);

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}

function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}

function addItem() {
    console.log('TODO:...');
    let text = document.getElementById("newItemText");
    let val = document.getElementById("newItemValue");
    let option = document.createElement("option");
    let select = document.getElementById("menu");

    option.textContent = text.value;
    option.setAttribute("value", val.value);
    select.appendChild(option);

    text.value = "";
    val.value = ""
}

function encodeAndDecodeMessages() {
    console.log('TODO...')
    let encodeText = document.querySelectorAll("textarea")[0];
    let decodeText = document.querySelectorAll("textarea")[1];
    let encodeButton = document.querySelectorAll("button")[0];
    let decodeButton = document.querySelectorAll("button")[1];

    encodeButton.addEventListener("click", () => {
        let text = encodeText.value;
        decodeText.value = codeMessage(text, 1);
        encodeText.value = "";
    })

    decodeButton.addEventListener("click", () => {
        let text = decodeText.value;
        decodeText.value = codeMessage(text, -1);
    })

    function codeMessage(message, num) {
        let arr = [];
        for (let char of message) {
            arr.push(String.fromCharCode(char.charCodeAt(0) + num));
        }
        return arr.join("");
    }
}

function solve() {

    document.querySelector("button").addEventListener("click", () => {

        let textArea1 = document.querySelector("textarea");
        let input = JSON.parse(textArea1.value);
        let tbody = document.querySelector("tbody");

        for (let furniture of input) {
            tbody.innerHTML += `<tr><td><img src="${furniture.img}"></td><td><p>${furniture.name}</p></td><td><p>${furniture.price}</p></td><td><p>${furniture.decFactor}</p></td><td><input type="checkbox"/></td></tr>`;
        }
    });

    document.querySelectorAll("button")[1].addEventListener("click", () => {

        let textArea2 = document.querySelectorAll("textarea")[1];
        let totalPrice = 0;
        let furnitureArr = [];
        let averageDecFac = 0;
        let tRows = Array.from(document.querySelectorAll("tbody tr"));

        for (let row of tRows) {
            let checkBox = row.querySelector('input[type="checkbox"]');

            if (checkBox.checked) {
                let name = row.querySelectorAll("p")[0].textContent;
                let price = Number(row.querySelectorAll("p")[1].textContent);
                let decFac = Number(row.querySelectorAll("p")[2].textContent);
                totalPrice += price;
                furnitureArr.push(name);
                averageDecFac += decFac;
            }
        }
        averageDecFac /= furnitureArr.length;
        textArea2.value = `Bought furniture: ${furnitureArr.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFac}`
    })
    //TODO...
}

function solve() {

    document.querySelector("button").addEventListener("click", () => {

        let textArea1 = document.querySelector("textarea");
        let input = JSON.parse(textArea1.value);
        let tbody = document.querySelector("tbody");

        for (let furniture of input) {
            tbody.innerHTML += `<tr><td><img src="${furniture.img}"></td><td><p>${furniture.name}</p></td><td><p>${furniture.price}</p></td><td><p>${furniture.decFactor}</p></td><td><input type="checkbox"/></td></tr>`;
        }
    });

    document.querySelectorAll("button")[1].addEventListener("click", () => {

        let textArea2 = document.querySelectorAll("textarea")[1];
        let totalPrice = 0;
        let furnitureArr = [];
        let averageDecFac = 0;
        let tRows = Array.from(document.querySelectorAll("tbody tr"));

        for (let row of tRows) {
            let checkBox = row.querySelector('input[type="checkbox"]');

            if (checkBox.checked) {
                let name = row.querySelectorAll("p")[0].textContent;
                let price = Number(row.querySelectorAll("p")[1].textContent);
                let decFac = Number(row.querySelectorAll("p")[2].textContent);
                totalPrice += price;
                furnitureArr.push(name);
                averageDecFac += decFac;
            }
        }
        averageDecFac /= furnitureArr.length;
        textArea2.value = `Bought furniture: ${furnitureArr.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFac}`
    })
    //TODO...
}

function solve() {
    let quickCheck = document.querySelectorAll("tfoot button")[0];
    let clear = document.querySelectorAll("tfoot button")[1];
    let inputs = Array.from(document.querySelectorAll("input"));
    let table = document.querySelector("table");
    let para = document.querySelector("#check p");

    quickCheck.addEventListener("click", () => {
        let numArr = []
        for (let input of inputs) {
            numArr.push(Number(input.value));
        }
        let flag1 = numArr.every(num => {
            return (num > 0 && num < 4);
        });

        let flag2 = false;
        let message = "";

        if ((numArr[0] !== numArr[1] && numArr[0] !== numArr[2] && numArr[1] !== numArr[2]) &&
            (numArr[3] !== numArr[4] && numArr[3] !== numArr[5] && numArr[4] !== numArr[5]) &&
            (numArr[6] !== numArr[7] && numArr[6] !== numArr[8] && numArr[7] !== numArr[8]) &&
            (numArr[0] !== numArr[3] && numArr[0] !== numArr[6] && numArr[3] !== numArr[6]) &&
            (numArr[1] !== numArr[4] && numArr[1] !== numArr[7] && numArr[4] !== numArr[7]) &&
            (numArr[2] !== numArr[5] && numArr[2] !== numArr[8] && numArr[5] !== numArr[8])) {
            flag2 = true
        }

        if(flag1 && flag2){
            message = "You solve it! Congratulations!";
            table.style.border = "2px solid green";
            para.style.color = "green";
        } else {
            message = "NOP! You are not done yet...";
            table.style.border = "2px solid red";
            para.style.color = "red";
        }

        para.textContent = message;
    });

    clear.addEventListener("click", () => {
        inputs.forEach(input => {
            input.value = "";
            para.textContent = "";
            table.style.border = "";
        })
    })
}

function solve() {
    //TODO...
    let sections = Array.from(document.querySelectorAll("section"));
    let result = document.getElementsByTagName("h1")[1];
    let counter = 0;
    let steps = 0;
  
    sections.forEach(section => {
  
      let answerBut = Array.from(section.querySelectorAll(".quiz-answer"));
  
      answerBut.forEach(button => {
        button.addEventListener("click", (e) => {
          if (e.target.textContent === "onclick" || e.target.textContent === "JSON.stringify()" ||
            e.target.textContent === "A programming API for HTML and XML documents") {
            counter++;
          }
          steps++;
          section.style.display = "none";
          section.nextElementSibling.style.display = "block";
  
          if(steps === 3){
            if(counter === 3){
              result.textContent = "You are recognized as top JavaScript fan!";
            } else {
              result.textContent = `You have ${counter} right answers`;
            }
          }
        })
      })
    })
  }


function attachEventsListeners() {
  console.log("TODO:...");

  const convertButton = document.getElementById("convert");
  let inputDistance = document.getElementById("inputDistance");
  let outputDistance = document.getElementById("outputDistance");

  let converter = (distance,convertDirection) => {
    return {
      m: distance,
      km: convertDirection ? distance * 1000 : distance / 1000,
      cm: convertDirection ? distance * 0.01 : distance * 100,
      mm: convertDirection ? distance * 0.001 : distance * 1000,
      mi: convertDirection ? distance * 1609.34 : distance / 1609.34,
      yrd: convertDirection ? distance * 0.9144 : distance / 0.9144,
      ft: convertDirection ? distance * 0.3048 : distance / 0.3048,
      in: convertDirection ? distance * 0.0254 : distance / 0.0254,
    };
  };

  convertButton.addEventListener("click", function () {
    let inputUnits = document.getElementById("inputUnits").value;
    let outputUnits = document.getElementById("outputUnits").value;
    let meters = converter(Number(inputDistance.value),true)[inputUnits];
    let converted = converter(meters)[outputUnits];
    outputDistance.value = converted;
  });
}

  
