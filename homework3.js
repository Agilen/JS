var a, b, operand;
a=" ";
b=" ";
while (true) {
    while (true) {
        a = prompt("Enter a", a)
        if (!a.trim() || isNaN(a) == true) {
            alert("Try again")
        }
        else {
            break;
        }
    }

    while (true) {
        b = prompt("Enter b", b)
        if (!b.trim() || isNaN(b) == true) {
            alert("Try again")
        }
        else {
            break;
        }
    }

    while (true) {
        operand = prompt("enter math operator")
        if (operand == "+") operand = 1
        else if (operand == "-") operand = 2
        else if (operand == "*") operand = 3
        else if (operand == "/") operand = 4
        else alert("Wrong math operator")
        break;
    }

    calc(a, b, operand)
}

function calc(a, b, operand) {
    a = parseFloat(a)
    b = parseFloat(b)
    switch (operand) {
        case 1:
            console.log(a + "+" + b + "=" + a + b)
            break;
        case 2:
            console.log(a + "-" + b + "=" + a - b)
            break;
        case 3:
            console.log(a + "*" + b + "=" + a * b)
            break;
        case 4:
            console.log(a + "/" + b + "=" + a / b)
            break;
        default:
            console.log("Error")

    }

}