//This is a one line comment in a javascript file.

//The following function takes the first character from the provided string and displays it in the console log
function characterSelector(string) {
    return console.log(string.charAt(0));
}
//Executes the following
characterSelector("DecodeMTL");

// Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.
function lastCharacterSelector(input) {
    return console.log(input.charAt(input.length - 1))
}
// Initialize the function "lastCharacterSelector"
lastCharacterSelector("DecodeMTL")

//Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.
function numberedString(inputstring, inputnumber) {
    return console.log(inputstring[inputnumber]);
}
// Executes the function numberedString
numberedString("DecodeMTL", 3);
numberedString("", 1);

//Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.
function numSum(valueone, valuetwo) {
    var result = valueone + valuetwo;
  return console.log(result);
}

//Executes the function NumSum which allows you to add two numbers together.
numSum(10, 10)
numSum(10, word)

// When i add a word to my numSum function i get ReferenceError: word is not defined