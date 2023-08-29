const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');
const numDot = document.getElementById('numDot');
// const numEqual = document.getElementById('numEqual');
const add = document.getElementById('add');
const subraction = document.getElementById('subraction');
const multiplication = document.getElementById('multiplication');
const devide = document.getElementById('devide');
// const answere = document.getElementById('answere');

const a = 0, b = 0, operater = 0;



function Addition(a, b) {
    return a + b;
}
function Subtraction(a, b) {
    return a - b;
}
function Multiplication(a, b) {
    return a * b;
}
function Divide(a, b) {
    return a / b;
}

function calculator(a, operater, b) {
    switch (operater) {
        case "":
            document.getElementById('answere').innerText = "Please Enter Number";
            console.log("Please Enter Number");
            break;
        case "+":
            document.getElementById('answere').innerText = ("Addition:", Addition(a, b));
            console.log("Addition:", Addition(a, b));
            break;
        case "-":
            document.getElementById('answere').innerText = ("Subtraction:", Subtraction(a, b));
            console.log("Subtraction:", Subtraction(a, b));
            break;
        case "*":
            document.getElementById('answere').innerText = ("Multiplication:", Multiplication(a, b));
            console.log("Multiplication:", Multiplication(a, b));
            break;
        case "/":
            if (b === 0){
            document.getElementById('answere').innerText = ("Zere is con't devide");
            console.log("Zere is con't devide");
            }
            else{
            document.getElementById('answere').innerText = ("Divide:", Divide(a, b));
            console.log("Divide:", Divide(a, b));
            }
            break;
        default:
            document.getElementById('answere').innerText = ("Invalid Operator");
            console.log("Invalid Operator");
    }
}

calculator(a, operater, b);



let answere = document.getElementById('answere');

function Display(num){
    answere.value += num;
}
function Calculat(){
    try{
        answere.value = eval(answere.value);
    }
    catch(err){
        alert("Invalid");  
    }
}