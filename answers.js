//This is a one line comment in a javascript file.

//The following function takes the first character from the provided string and displays it in the console log
function characterSelector(string) {
    return console.log(string.charAt(0));
}
//Executes the following
characterSelector("DecodeMTL");

// Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.
function lastCharacterSelector(input) {
    return console.log(input.charAt(input.length-1))
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