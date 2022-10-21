
var a = prompt("Enter the first number: ");
var operation = prompt("Enter the operation: ");
var b = prompt("Enter the second number: ");


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