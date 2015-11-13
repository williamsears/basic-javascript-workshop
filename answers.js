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