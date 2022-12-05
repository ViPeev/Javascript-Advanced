function cityRecord(name,population,treasury){
  let city = {
      name,
      population,
      treasury
  }

  return city;
}

function townPopulation(input){
  let cityMap = new Map();

  for(let city of input){
      let [cityName, population] = city.split(" <-> ");
      if(cityMap.has(cityName)){
          let prevPop = cityMap.get(cityName) + Number(population);
          cityMap.set(cityName,prevPop);
      } else {
          cityMap.set(cityName,Number(population));
      }
  }

  for(let [key,value] of cityMap.entries()){
      console.log(`${key} : ${value}`);
  }
}

function cityRecord(name, population, treasury) {
  let city = {
      name,
      population,
      treasury,
      taxRate: 10,
      collectTaxes() {
          this.treasury += this.population * this.taxRate;
      },
      applyGrowth(x){
          this.population *= 1 + x/100;
          this.population = Math.floor(this.population);
      },
      applyRecession(x){
          this.treasury *= 1 - x/100;
          this.treasury = Math.floor(this.treasury);
      }
  }
  return city;
}

function objFactory(lib, orderObj) {
  let arr = [];

  for (let templates of orderObj) {
      let obj = { "name": templates.template.name };
      let parts = templates.parts;
      parts.forEach( part => {
         obj[part] = lib[part];
      });
      arr.push(obj);
  }
  return arr;
}

function assemblyLineFunct(input) {
  let library = {
    hasClima(x) {
      x.temp = 21;
      x.tempSettings = 21;
      x.adjustTemp = function () {
        if (x.temp > x.tempSettings) {
          x.temp--;
        } else if (x.temp < x.tempSettings) {
          x.temp++;
        }
      };
    },
    hasAudio(x) {
      x.currentTrack = null;
      x.nowPlaying = function () {
        if (x.currentTrack) {
          return console.log(
            `Now playing '${x.currentTrack.name}' by ${x.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic(x) {
      x.checkDistance = function (dist) {
        if (dist < 0.1) {
          return console.log("Beep! Beep! Beep!");
        } else if (dist < 0.25) {
          return console.log("Beep! Beep!");
        } else if (dist < 0.5) {
          return console.log("Beep!");
        } else {
          return console.log("");
        }
      };
    },
  };

  return library;
}

function fromJSONToHTMLTable(json) {
  let arr = JSON.parse(json);

  let outputArr = ["<table>"];
  outputArr.push(makeKeyRow(arr));
  arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
  outputArr.push("</table>");

  console.log(outputArr.join("\n"));

  function makeKeyRow(arr) {
    let result = "  <tr>";
    Object.keys(arr[0]).forEach((key) => {
      result += `<th>${escapeHtml(key)}</th>`;
    });
    result += "</tr>";
    return result;
  }

  function makeValueRow(obj) {
    let result = "  <tr>";
    Object.values(obj).forEach((value) => {
      result += `<td>${escapeHtml(value)}</td>`;
    });
    result += "</tr>";
    return result;
  }

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}
