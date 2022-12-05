function delimiter(input,delim){
    console.log(input.join(delim));
}

function printEveryNth(input, n) {
    let newArr = [];

    for (let i = 0; i < input.length; i += n) {
        newArr.push(input[i]);
    }

    return newArr;
}

function addOrRemove(input){
    let arr = [];
    let num = 0;

    for(let elem of input){
        num++;
        if(elem === "add"){
            arr.push(num);
        } else {
            arr.pop();
        }
    }
    
    if(arr.length === 0){
        console.log("Empty");
    } else {
        for(let elem of arr){
            console.log(elem);
        }
    }
}

function rotateArray(input,num){
    let arr = input;

    if(num > arr.length){
        num %= arr.length;
    }

    let newArr = arr.splice(arr.length-num);
    arr = newArr.concat(arr);
    console.log(arr.join(" "));
}

function nonDecSubset(input) {
    let arr = input;
    let max = Number(input[0]);

    let result = arr.filter((num) => {
        if (num >= max) {
            max = num;
            return true;
        }
        return false;
    });
    return result;
}

function productList(input) {
    input.sort((a,b) => a.localeCompare(b));
    for(let i = 0; i < input.length;i++){
        console.log(`${i+1}.${input[i]}`);
    }
}

function sorting2(input) {
    let arr = [...input].sort((a,b) => a-b);
    let sortedArr = [];

    while (arr.length !== 0){
        sortedArr.push(arr.shift());
        sortedArr.push(arr.pop());
    }

    return sortedArr.filter(elem => typeof elem !== "undefined");
}

function sortArrTwo(input){
    input.sort((a,b) => {
        return a.length-b.length || a.localeCompare(b);
    });

    input.forEach(el => console.log(el));
}

function matrix(input) {
    let startingValue = 0;

    for (let i = 0; i < input[0].length; i++) {
        startingValue += Number(input[0][i]);
    }

    for (let i = 0; i < input.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < input[i].length; j++) {
            rowSum += input[i][j];
        }

        let columnSum = 0;
        for (let ii = 0; ii < input.length; ii++) {
            columnSum += input[ii][i];
        }

        if (rowSum !== startingValue || columnSum !== startingValue) {
            return false;
        }
    }

    return true;
}

function ticTacToe(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = "player1";
    let mark = "X";

    for (let i = 0; i < input.length; i++) {
        let cmd = input[i].split(" ").map(Number);

        if (player === "player1") {
            mark = "X";
        } else if (player === "player2") {
            mark = "O";
        }

        if (!dashboard[cmd[0]][cmd[1]]) {
            dashboard[cmd[0]][cmd[1]] = mark;

            let checkArr = dashboard.flat();
            if ((checkArr[0] === mark && checkArr[1] === mark && checkArr[2] === mark) ||
                (checkArr[3] === mark && checkArr[4] === mark && checkArr[5] === mark) ||
                (checkArr[6] === mark && checkArr[7] === mark && checkArr[8] === mark) ||
                (checkArr[0] === mark && checkArr[3] === mark && checkArr[6] === mark) ||
                (checkArr[1] === mark && checkArr[4] === mark && checkArr[7] === mark) ||
                (checkArr[2] === mark && checkArr[5] === mark && checkArr[8] === mark) ||
                (checkArr[0] === mark && checkArr[4] === mark && checkArr[8] === mark) ||
                (checkArr[2] === mark && checkArr[4] === mark && checkArr[6] === mark)) {
                console.log(`Player ${mark} wins!`);
                return dashboard.forEach(elem => {
                    console.log(elem.join("\t"));
                })
            }

            if (player === "player1") {
                player = "player2";
            } else {
                player = "player1";
            }
        } else if (dashboard[cmd[0]][cmd[1]]) {
            console.log("This place is already taken. Please choose another!");
        }

        if (!dashboard.flat().includes(false)) {
            break;
        }
    }
    console.log("The game ended! Nobody wins :(");
    dashboard.forEach(elem => {
        console.log(elem.join("\t"));
    });
}

function diagonal(input) {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        let newElem = input[i].split(" ");
        arr.push(newElem);
    }

    arr = arr.map((el) => el.map(Number))
    let sum1 = 0;
    for (let i = 0; i < arr[0].length;) {
        for (let j = 0; j < arr.length; j++) {
            sum1 += arr[j][i];
            i++
        }
    }
    let sum2 = 0;
    for (let i = 0; i < arr[0].length;) {
        for (let j = arr.length - 1; j >= 0; j--) {
            sum2 += arr[j][i];
            i++
        }
    }
    if (sum1 === sum2) {
        let start = 0;
        let end = arr[0].length -1;
        for(let i = 0; i < arr.length;i++){
            for(let j = 0; j < arr[i].length;j++){
                if(j !== start && j !== end){
                    arr[i][j] = sum1;
                }
            }
            start++;
            end--;
        }
        arr.forEach((el) => console.log(...el))
    } else {
        arr.forEach((el) => console.log(...el))
    }
}

function orbit(input){
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];
 
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}


function matrix(n,g) {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }
    result.forEach((el) => console.log(...el))
}