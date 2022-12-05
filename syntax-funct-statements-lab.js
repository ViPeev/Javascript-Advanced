function echo(input){
    console.log(input.length);
    console.log(input)
}

function stringLength(inp1,inp2,inp3) {
    let total = inp1.length+inp2.length+inp3.length;
    let avg = Math.floor(total/3);
    console.log(total);
    console.log(avg)
}

function largestNum(inp1,inp2,inp3) {
    let arr = [inp1,inp2,inp3].map(Number);
    largest = Math.max(...arr);
    console.log(`The largest number is ${largest}.`);
}

function circleArea(input){
    if(typeof input === "number"){
        console.log((Math.PI*(Math.pow(input,2))).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

function mathOp(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result)
}

function sumOfNum(n,m){
    let start = Number(n);
    let end = Number(m);
    let result = 0;

    while(start <= end){
        result+= start;
        start++;
    }
    console.log(result);
}

function dayOfTheWeek(input){
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    if(days.includes(input)){
        console.log(days.indexOf(input)+1);
    } else {
        console.log("error");
    }
}

function daysInAMonth(month,year){
    let date = new Date(year,month,0);
    console.log(date.getDate())
}

function squareOfStars(num){
    let str = "* ";
    str = str.repeat(num);
    let index = 0;
    while(index < num){
        console.log(str);
        index++;
    }
}

function aggregateElements(input) {
    console.log(input.reduce((a, b) => a + b, 0));
    console.log(input.map(a => { return 1 / a }).reduce((a, b) => a + b, 0));
    console.log(input.join(""));
}



