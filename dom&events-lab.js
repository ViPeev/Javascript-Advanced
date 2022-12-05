function addItem() {
    console.log('TODO:...');
    let list = document.querySelector("#items");
    let listItem = document.createElement("li");
    let input = document.querySelector("#newItemText");
    list.appendChild(listItem); 
    listItem.textContent = input.value;
}

function deleteByEmail() {
    console.log('TODO:...');
    let email = document.querySelector('input[type="text"]');
    let rows = Array.from(document.querySelectorAll("tbody tr"));
    let result = document.getElementById("result");
    let resultString = "Not found.";

    rows.forEach( row => {
        let current = row.children[1].textContent;
        if(current == email.value){
            row.remove();
            email.value = "";
            resultString = "Deleted";
        }
    })

    result.textContent = resultString;
}

function addItem() {
    //TODO...
    let list = document.querySelector("#items");
    let listItem = document.createElement("li");
    let input = document.querySelector("#newItemText");
    list.appendChild(listItem);
    listItem.textContent = input.value;
    let ahref = document.createElement("a");
    ahref.textContent = "[Delete]";
    listItem.appendChild(ahref);
    ahref.href = "#";
    ahref.addEventListener("click",function(){
        listItem.remove();
    })
}

function attachGradientEvents() {
    console.log('TODO:...');
    let gradientEl = document.querySelector("#gradient");
    let resultEl = document.querySelector("#result");

    gradientEl.addEventListener('mousemove',mouseMove);
    gradientEl.addEventListener('mouseleave',mouseLeave);

    function mouseMove(e){
        let offsetPos = e.offsetX / (e.target.clientWidth -1);
        let position = Math.trunc(offsetPos * 100);
        resultEl.textContent = `${position}%`
    }

    function mouseLeave(){
        resultEl.textContent = "";
    }
}

function focused() {
    console.log('TODO:...');
    let inputFields = Array.from(document.querySelectorAll('input[type="text"]'));
    inputFields.forEach(e => {
        e.addEventListener("focus", function(){
            e.parentElement.classList.add("focused");
        });
        e.addEventListener("blur", function(){
            e.parentElement.classList.remove("focused");
        })
    })
}

function validate() {
    console.log('TODO:...');
    let input = document.getElementById("email");
    let validateRegex = /[a-z]+\@[a-z]+\.[a-z]+/;

    input.addEventListener("change", () => {
        let valid = input.value.match(validateRegex);
        if(valid){
            input.classList.remove("error");
        } else {
            input.classList.add("error");
        }
    })
}

function solve() {
    //TODO...
    let products = {};
    let totalPrice = 0;
    let textArea = document.querySelector('textarea[disabled]');
    let addButtons = Array.from(document.querySelectorAll(".product .product-add"));
    let checkOutButton = document.querySelector('.checkout');
    let allButtons = Array.from(document.querySelectorAll("button"));
 
    addButtons.forEach(button => {
 
       let innerButton = button.firstElementChild;
       let productName = button.previousElementSibling.firstElementChild.textContent;
       let price = Number(button.nextElementSibling.textContent);
 
       innerButton.addEventListener("click", add);
       
       function add() {
          totalPrice += price;
          textArea.innerHTML += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
 
          if (!products.hasOwnProperty(productName)) {
             products[productName] = {
                productPrice: price,
                quantity: 1
             };
          } else {
             products[productName].quantity++;
          }
       };
    });
 
    
 
    checkOutButton.addEventListener("click", () => {
       textArea.innerHTML += `You bought ${Object.keys(products).join(", ")} for ${totalPrice.toFixed(2)}.\n`;
       allButtons.forEach(button => {
          button.setAttribute('disabled', '');
       });
    })
 }