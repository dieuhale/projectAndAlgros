// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    var current = string[i];
    if (current != " ") {
      newString += current;
    }
  }
  return newString;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

//Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    var current = string[i];
    if (!isNaN(current)) {
      newString += current;
    }
  }
  return Number(newString);
}

console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW".

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(string) {
  var newString = "";
  let acr = string.split(" ");

  for (var i = 0; i < acr.length; i++) {
    var current = acr[i][0];
    if (current != undefined) {
      newString += current;
    }
  }
  return newString.toUpperCase();
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string.

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var character = string[i];
    if (character != " ") {
      count++;
    }
  }
  return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(array, value) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    if (current.length >= value) {
      newArray.push(current);
    }
  }

  return newArray;
}

console.log(removeShorterStrings(["Good morning", "sunshine", "the", "Earth", "says", "hello"],4));

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)) 