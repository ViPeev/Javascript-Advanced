function solve(area, vol, obj) {
    let objArr = [];
    obj = JSON.parse(obj);

    for (let elem of obj) {
        elem.area = area;
        elem.volume = vol;
        objArr.push({
            area: elem.area(),
            volume: elem.volume()
        })
    }
    return objArr
}

function solve(area,vol,obj){
    let objects = JSON.parse(obj);
    let result = [];

    for(let object of objects){
        let current = {}
        current.area = area.call(object);
        current.volume = vol.call(object);
        result.push(current);
    }

    return result;
}



function solution(x){
    let num = Number(x);

    return function(y){
        return num+y;
    }
}

function solution(x){
    function add(a,b) {
      return a+b;
    }
    
    return add.bind(this,x);
  }

function createFormatter(separator,symbol,symbolFirst,formatter){
    return function innerFunct(value){
        return formatter(separator,symbol,symbolFirst,value)
    }
}

function createFormatterTwo(separator,symbol,symbolFirst, funct){
    return funct.bind(this,separator,symbol,symbolFirst);
}

function employees(obj, criteria) {
    obj = JSON.parse(obj);

    if (criteria === "all") {
        for (let i = 0; i < obj.length; i++) {
            console.log(`${i}. ${obj[i].first_name} ${obj[i].last_name} - ${obj[i].email}`);
        }
    } else {
        let counter = 0;
        [prop, val] = criteria.split("-");
        for(let employee of obj){
            if (employee[prop] === val) {
                console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
                counter++;
            }
        }
    }
}

function solution(){
    return {
        text:"",
        append(str) {
            this.text += str;
        },
        removeStart(n) {
            let removeText = this.text.substring(0,n);
            this.text = this.text.replace(removeText,"");
        },
        removeEnd(n) {
            let removeText = this.text.slice(-n);
            this.text = this.text.replace(removeText,"");
        },
        print(){
            console.log(this.text);
        }
    }
}

function solution(){
    let text = ""
      return {
          append(str) {
              text += str;
          },
          removeStart(n) {
              let removeText = text.substring(0,n);
              text = text.replace(removeText,"");
          },
          removeEnd(n) {
              let removeText = text.slice(-n);
              text = text.replace(removeText,"");
          },
          print(){
              console.log(text);
          }
      }
  }

function result(input){
    return (function(){
        let obj = {
            collection:[],
            add(x){
                this.collection.push(x)
            },
            remove(x){
                while(this.collection.includes(x)){
                    let index = this.collection.indexOf(x);
                    this.collection.splice(index,1);
                }
            },
            print(){
                console.log(this.collection.join(","));
            }
        }
        for(let command of input){
            if(command === "print"){
                obj.print();
            } else {
                let [prop,val] = command.split(" ");
                obj[prop](val);
            }
        }
    })()
}


function cars(input){
    let obj = {};

    return (function(commands){
        for(let command of commands){
            let currentCommand = command.split(" ");

            if(currentCommand[0] === "create" && currentCommand[2] === "inherit"){
                let [ , name , , parentName] = command.split(" ");
                obj[name] = Object.create(obj[parentName]);
            } else if(currentCommand[0] === "create"){
                let [ , name] = command.split(" ");
                obj[name] = {};
            } else if(currentCommand[0] === "print"){
                let [ , name] = command.split(" ");
                let printMsg = [];
                for(let entry in obj[name]){
                    printMsg.push(`${entry}:${obj[name][entry]}`);
                }
                console.log(printMsg.join(","));
            } else if(currentCommand[0] === "set"){
                let [, name, key, value] = command.split(" ");
                obj[name][key] = value;
            }
        }
    })(input);
}