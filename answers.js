//This is a one line comment in a javascript file.
//The following function takes the first character from the provided string and displays it in the console log

function characterSelector(string) {
    return string.charAt(0);
}
//Executes the following
characterSelector("DecodeMTL");

// Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.
function lastCharacterSelector(input) {
    return input.charAt(input.length - 1);
}
// Initialize the function "lastCharacterSelector"
lastCharacterSelector("DecodeMTL");

//Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.
function numberedString(inputstring, inputnumber) {
    return inputstring[inputnumber];
}
// Executes the function numberedString
console.log(numberedString("DecodeMTL", 3));
console.log(numberedString("", 1));

//Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.
function numSum(valueone, valuetwo) {
    var result = valueone + valuetwo;
    return result;
}

//Executes the function NumSum which allows you to add two numbers together.
console.log(numSum(10, 10));
console.log(numSum(10, "word"));

// When i add word to my numSum function i get "10word" as an answer.

//Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.

function multiply(firstvalue, secondvalue) {
    var multiresult = firstvalue * secondvalue;
    return multiresult;
}

//Executes the multiply function

console.log(multiply(7, 7));
console.log(multiply(10, "string"));

// When i multiply with a string i get "NaN"

//Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.
function doMath(firstvalue, secondvalue, operation) {
    if (operation == "add") {
        var result = firstvalue + secondvalue;
    }
    else if (operation == "multiply") {
        var result = firstvalue * secondvalue;
    }
    else if (operation == "subtract") {
        var result = firstvalue - secondvalue;
    }
    else if (operation == "divide") {
        var result = firstvalue / secondvalue;
    }
    return "The answer is " + result;
}

// Executes the doMath function

console.log(doMath(10, 10, "add"));
console.log(doMath(10, 10, "divide"));
console.log(doMath(10, 10, "multiply"));
console.log(doMath(10, 10, "subtract"));

//Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.
function stringRepeater(inputString, times) {
   var array = [];
   for(var i=0;i < times; i++){
       array.push(inputString);
   }
   return array;
}

//Executes function stringRepeater
console.log(stringRepeater("DecodeMTL", 5));

//Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string

function reverseString(inputstring) {
    return inputstring.split('').reverse().join('');
}

//Execution of reverse function
console.log(reverseString("William"));

//Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.
function factorial(number) {
    if (number < 0) {
        return "error";
    }
         else if (number == 0) {
        return 1;
    } else {
    var lowered = number;
    while (number-- > 1) {
        lowered *= number;
    }
    return lowered;
    }
}

//Execute factorial function 
console.log(factorial(8));
console.log(factorial(10));
console.log(factorial(-3));
console.log(factorial(0));

//Write a function that takes a phrase, and returns the same phrase with every word capitalized. For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
// this was very very confusing. Finally i looked it up on google and found the above solution, I read about all the arguments and parameters such as /w /s to understand what exactly i am running.
console.log(toTitleCase("hello my name is william"));
console.log(toTitleCase("Welcome to DECodEmTl"));


