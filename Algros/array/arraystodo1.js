//Push Front
function pushFrontA(array, value) {
  for (var i = array.length; i >= 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array;
}
console.log(pushFrontA([5, 7, 2, 3], 8));
console.log(pushFrontA([99], 7));

// Pop Front
function popFront(array) {
  var value = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return value;
}

console.log(popFront([0, 5, 10, 15]));
console.log(popFront([4, 5, 7, 9]));

// Insert At
function insertAt(array, index, value) {
  for (var i = array.length; i >= index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
  return array;
}
console.log(insertAt([100, 200, 5], 2, 311));
console.log(insertAt([100, 200, 5, 8, 10, 100], 2, 311));

// Bonus: Remove at

function removeAt(array, index) {
  for (var i = 0; i < array.length; i++) {
    if (i === index) {
      array.splice(i, 1);
    }
  }
  return array;
}

console.log(removeAt([1000, 3, 204, 77], 1));
console.log(removeAt([1000, 3, 208, 77, 78, 388], 2));

//Bonus: Swap Pairs

function swapPairs(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i += 2) {
    var current = array[i];
    var next = array[i + 1];
    if (next !== undefined) {
      newArray.push(next);
    }
    if (current !== undefined) {
      newArray.push(current);
    }
  }
  return newArray;
}

console.log(swapPairs([1, 2, 3, 4]));
console.log(swapPairs(["Brendan", true, 42]));
 
// Bonus: Remove Duplicates

function removeDuplicates(array) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      var current = array[i];
      var next = array[i + 1];
      if (i === 0) {
        newArray.push(array[0]);
      }
      if (current !== undefined && current !== next && i < array.length - 1) {
        newArray.push(next);
      }
      if (next !== undefined && next === current) {
        current = +1;
      }
    }
    return newArray;
  }
  
  console.log(removeDuplicates([-2, -2, 3.14, 5, 5, 10]));
  console.log(removeDuplicates([9, 19, 19, 19, 19, 19, 29]));
  