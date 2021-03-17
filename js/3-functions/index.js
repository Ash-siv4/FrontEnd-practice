// TRUTHY FALSEY

function isTruthy(parameter) {
    if (parameter) {
        return true
    } else {
        return false
    }
}

// ASI

function oops() {
    return // <- ; inserted due to return
    "hello"
}

let a = 47 // <- ; inserted due to not making sense with next line 
let b = 22 // <- ; inserted as EoF

// functions

function printFunction(parameter) {
    console.log(parameter);
}

printFunction("hello"); // <- undefined

const printFunctionExpression = function (parameter) {
    console.log(parameter);
}

printFunctionExpression("hello");

const me = {
    age: 26,
    name: 'jh',
    jobTitle: 'Trainer',
    greet: function () {
        console.log("Howdy, stranger");
    }
}
let arr = [console.log];

const print = arr[0];
print("hello from the array");


const printArrowFunction = (parameter) => console.log(parameter);
printArrowFunction("hello");

function sum(num1, num2) {
    return num1 + num2;
}

console.log("Ye Olde Functione:", sum(4, 6));

const sumExpression = function (num1, num2) {
    return num1 + num2;
}

console.log("Function expression using anonymous function", sumExpression(4, 6));

const sumArrow = (num1, num2) => num1 + num2; // don't need return if it's a single line function

const sumArrowWithReturn = (num1, num2) => {
    return num1 + num2;
}

console.log("Function expression using arrow function", sumArrow(4, 6));

const printArrow = parameter => console.log(parameter);