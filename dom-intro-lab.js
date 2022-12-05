function edit(element, match, replacer) {
    let textval = element.innerHTML;
    while (textval.includes(match)) {
        textval = textval.replace(match, replacer);
    }
    element.innerHTML = textval;
}

function result() {
    const textarea = document.querySelector('textarea');
    const listItems = document.querySelectorAll('li');
    Array.from(listItems).forEach(item => {
        textarea.value += item.textContent + "\n";
    });
}

function result() {
    const num1 = Number(document.querySelectorAll('input')[0].value);
    const num2 = Number(document.querySelectorAll('input')[1].value);
    const resultField = document.querySelectorAll('input')[2];
    resultField.value = num1 + num2;
}

function result() {
    const link = document.querySelector('a');
    const section = document.querySelector('span');
    link.style.display = "none";
    section.style.display = "inline";
}

function colorizedTable() {
    let tableRow = Array.from(document.querySelectorAll("tr:nth-of-type(2n)"));
    tableRow.forEach( td => td.style.backgroundColor = "teal");
}

function colorizedTable() {
    let tableRow = Array.from(document.querySelectorAll("tr"));
    let price = 0;
    for (let i = 1; i < tableRow.length - 1; i++) {
        let data = tableRow[i].children[1];
        price += Number(data.textContent);
    }

    let total = tableRow[tableRow.length - 1].children[1];
    total.textContent = price;
}

function extract(id) {
    let textValue = document.getElementById(id).innerText;
    let pattern = /\((?<text>.*)\)/g;
    let str = [];
    let valid;

    while ((valid = pattern.exec(textValue)) !== null) {
        let text = valid.groups["text"];
        str.push(text);
    }

    return str.join("; ");
}