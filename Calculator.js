const display = document.getElementById("displayBox");
const clear = document.getElementById("clearButton");
const numbers = document.getElementsByClassName("numberButtons");
const operator = document.getElementsByClassName("operatorButtons");
const equal = document.getElementById("equalButton");

// operation functions which carries out mathematical functions
function operate(a,operation,b) {
    if (operation == "+") {
        total = Number(a) + Number(b);
        display.value = total;
    }
    else if (operation == "-") {
        total = Number(a) - Number(b);
        display.value = total;
    }
    else if (operation == "*") {
        total = Number(a) * Number(b);
        display.value = total;
    }
    else if (operation == "/") {
        total = Number(a) / Number(b);
        display.value = total;
    }
    else {
        display.value("Please enter a valid operation.")
    }
};

//Add functions to the numbered buttons and the text field that would display the numbers selected
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        display.value += this.value});
};

//Add clear function
clear.addEventListener('click' , function() {
    display.value = ""});

//Registers the number entered in the display and the operator selected, followed by the display clearing
for (let j = 0;j < operator.length; j++) {
    operator[j].addEventListener('click', function() {
        a = display.value;
        operation = this.value;
        display.value = "";
})};


//Registers the second number, and runs the operate function which completes the mathematical function
equal.addEventListener('click', function() {
    b = display.value;
    operate(a,operation,b);
})
