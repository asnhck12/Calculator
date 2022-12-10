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

//Displays numbers selected, added function to prevent full stop being added twice
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() { 
        if (display.value.includes(".") && this.value != ".") {
            display.value += this.value;
        }
        else if (display.value.includes(".") && this.value == ".") {
        }
        else {display.value += this.value} })};


//Add clear function, clears all values
clear.addEventListener('click' , function() {
    display.value = "";
    a = "";
    b = ""});

//Registers the number entered in the display and the operator selected, followed by the display clearing
for (let j = 0;j < operator.length; j++) {
    operator[j].addEventListener('click', function() {
        if (a == "") {
            a = display.value;
            operation = this.value;
            display.value = "";            
        }
        else if (a != "") {
            b = display.value;
            operate(a,operation,b);
            a = display.value;
            b=""; 
            display.value = "";
        }
        else {
            display.value("please enter a valid operation.")
        }
})};


//Registers the second number, and runs the operate function which completes the mathematical function
equal.addEventListener('click', function() {
    b = display.value;
    operate(a,operation,b);
})
