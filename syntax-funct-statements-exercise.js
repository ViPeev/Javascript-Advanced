function fruit(fruit,amount,price){
    amount = amount/1000;
    let total = amount * price;
    console.log(`I need $${total.toFixed(2)} to buy ${amount.toFixed(2)} kilograms ${fruit}.`);
}

function GCD(num1,num2){
    let divisor = 1;
    let larger = num1 > num2 ? num1 : num2;

    for(let i = 2; i <= larger; i++){
        let div1 = num1 / i;
        let div2 = num2 / i;
        if(div1 === Math.floor(div1) && div2 === Math.floor(div2)){
            divisor = i;
        }
    }
    console.log(divisor);
}

function sameNumber(input){
    input = input.toString().split("").map(Number);
    let first = input[0];
    let check = input.every(elem => elem === first);
    console.log(check);
    console.log(input.reduce((a,b) => a+b,0))
}

function prevDay(year,month,day){
    let date = new Date(year,month-1,day-1);
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    console.log(`${year}-${month+1}-${day}`);
}

function timeToWalk(steps, stepLen, speed) {
    let totalMeters = steps * stepLen;
    let breakTime = Math.floor(totalMeters/500);
    let MeterPerSec = speed * 1000 / 3600;
    let neededSeconds = totalMeters/MeterPerSec;

    let minutes = Math.floor(neededSeconds/60) + breakTime;
    let seconds = neededSeconds % 60;
    let hours = 0;

    if(minutes > 59){
        hours = Math.floor(minutes/60);
        minutes = minutes - hours * 60;
    }
  
  	hours = hours.toFixed(0).padStart(2,0);
  	minutes = minutes.toFixed(0).padStart(2,0);

    console.log(`${hours}:${minutes}:${Math.round(seconds)}`);
}

function roadRadar(speed, area) {
    let limit;
    if (area === "motorway") {
        limit = 130;
    } else if (area === "interstate") {
        limit = 90;
    } else if (area === "city") {
        limit = 50;
    } else {
        limit = 20;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let diff = speed - limit;
        let status = "";
        if (diff <= 20) {
            status = "speeding";
        } else if (diff <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

function cooking(...args){
    let num = args[0];
    args.shift();

    for(let action of args){
        if(action === "chop"){
            num /= 2;
            console.log(num);
        } else if(action === "dice"){
            num = Math.sqrt(num,2);
            console.log(num);
        } else if(action === "spice"){
            num++;
            console.log(num);
        } else if(action === "bake"){
            num *= 3;
            console.log(num);
        } else if(action === "fillet"){
            num *= 0.8;
            console.log(num.toFixed(1));
        }
    }
}

function validityChecker(...input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let coordinates = [[x1,y1],[x2,y2]];
    for(let coords of coordinates){
        let check1 = Math.sqrt(Math.pow((0-coords[0]),2)+Math.pow((0-coords[1]),2));
        if(check1 === Math.floor(check1)){
            console.log(`{${coords[0]}, ${coords[1]}} to {0, 0} is valid`);
        } else {
            console.log(`{${coords[0]}, ${coords[1]}} to {0, 0} is invalid`);
        }
    }

    let check2 = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    if(check2 === Math.floor(check2)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

function wordsUppercase(input){
    let pattern = /(?<word>[A-Za-z0-9]+)/g;
    let arr = [];
    let valid;

    while((valid = pattern.exec(input)) !== null){
        let word = valid.groups["word"];
        arr.push(word.toUpperCase());
    }
    console.log(arr.join(", "))
}