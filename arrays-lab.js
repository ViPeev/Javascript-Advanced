function evenPos(input){
    let evenArr = [];
    for(let i = 0; i < input.length;i++){
        if(i % 2 === 0){
            evenArr.push(input[i]);
        }
    }
    console.log(evenArr.join(" "));
}

function lastK(num1,num2){
    let sumArr = [1];

    for(let i = 1; i < num1;i++){
        let num = 0;
        for(let j = i; j >= i - num2 +1;j--){
            num += sumArr[j-1];
            if(j === 1){
                break;
            }
        }
        sumArr.push(num);
    }
    return sumArr;
}

function firstLast(input){
    let first = Number(input.shift());
    let last = Number(input.pop());
    return first+last;
}

function negativePositive(input){
    let sorted = [];
    for(let num of input){
        if(num < 0){
            sorted.unshift(num);
        } else {
            sorted.push(num);
        }
    }

    for(let num of sorted){
        console.log(num);
    }
}

function smallest(input){
    let min1 = Math.min(...input);
    input.splice(input.indexOf(min1),1);
    let min2 = Math.min(...input);
    console.log(`${min1} ${min2}`);    
}

function biggerHalf(input){
    let sorted = input.sort((a,b) => a-b);
    let splicer = Math.floor(sorted.length/2);
    let half = sorted.splice(splicer);
    return half;
}

function pie(...args){
    let pies = args[0];
    let key1 = args[1];
    let key2 = args[2];
    let start = pies.indexOf(key1);
    let end = pies.indexOf(key2);
    let section = end - start;

    let newArr = pies.splice(start,section+1);
    return newArr;
}

function processOdd(input){
    let sorted = [];
    for(let i = 0; i < input.length;i++){
        if(i % 2 > 0){
            sorted.push(Number(input[i]));
        }
    }

    sorted = sorted.map(el => el*2).reverse().join(" ");
    return sorted;
}

function biggest(input){
    let max = Math.max(...input.flat());
    return max;
}

function diagonal(input){
    let sumArr = [];
    for(let i = 0; i < input.length;i++){
        let sum = 0;
        for(let j = i; j < input[i].length;j++){
            sum += input[j][j];
        }
        sumArr.push(sum);
        break;
    }
    for(let i = input.length-1; i >= 0;i--){
        let sum = 0
        for(let j = 0; j < input.length;j++){
            sum += input[j][i];
            i--;
        }
        sumArr.push(sum);
        break;
    }
    console.log(sumArr.join(" "));
}

function equalNeighbours(input){
    let compare = 0;
    for(let i = 0; i < input.length-1;i++){
        for(let j = 0; j < input[i].length;j++){
            if(input[i][j] === input[i+1][j]){
                compare++;
            }
        }
    }
    for(let i = 0; i < input.length;i++){
        for(let j = 0; j < input[i].length-1;j++){
            if(input[i][j] === input[i][j+1]){
                compare++;
            }
        }
    }
    return compare;
}

