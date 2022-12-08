const display = document.getElementById("displayBox");
const clear = document.getElementById("clearButton");
const numbers = document.getElementsByClassName("numberButtons");
const operator = document.getElementsByClassName("operatorButtons");

/* For testing the calculator in console   */
// var a = prompt("Enter the first number: ");
// var operation = prompt("Enter the operation: ");
// var b = prompt("Enter the second number: ");


//Added functions to the numbered buttons and the text field that would display the numbers selected
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    display.value += this.value});
};



function operate() {
    if (operation == "+") {
        total = Number(a) + Number(b);
        console.log(total);
    }
    else if (operation == "-") {
        total = Number(a) - Number(b);
        console.log(total);
    }
    else if (operation == "*") {
        total = Number(a) * Number(b);
        console.log(total);
    }
    else if (operation == "/") {
        total = Number(a) / Number(b);
        console.log(total);
    }
    else {
        console.log("Please enter a valid operation.")
    }
};

operate();