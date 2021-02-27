/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // if not a number or a negative number return null
  if ((typeof n !== 'number') || n < 0) {
    return null;
  }
  // create result
  var result;
  // base case for 0
  if (n === 0) {
    // return 1
    return 1;
  } else {
    // recursive case
    return n * factorial(n-1);
    // call factorial on previous number
    // multiply this by current number
  }

  // return result

};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // edge cases: must be array length 1 or more
  if ((Array.isArray(array) === 'false') || array.length <1) {
    return 0;
  }

  // make result var
  var result = array[0];
  // copy array so you can manipulate it without messing w/ original
  var input = array.slice();

  // base case -> array is length 1
  if (input.length === 1) {
    return input[0];
  }
    // return only element in array

  // recursive
  result += sum(input.slice(1));
    // add result to sum of the rest of the array after it

  // return result var
  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // declare sum
  var sum = 0;

  // base case
  if (!Array.isArray(array)) {
    // return element
    return array;
  }

  // recursion
  for (var i = 0; i < array.length; i++) {
    sum += arraySum(array[i]);
  }
    // add element to running sum

  // return sum
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  // base cases

  n = Math.abs(n);
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  }

  return isEven(n-2);
  // if it boils down to 1 it's odd -> false
  // if it boils down to 2 it's even -> true

  //recursive case
    // isEven(n-2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

var sum = 0;
var isPositive = (n > 0);
n = Math.abs(n);

if (n === 0 || n === 1) {
  return 0;
}

if (n === 2) {
  return isPositive ? 1 : -1;
}

sum += sumBelow(n - 1) + n - 1;

return isPositive ? sum : 0 - sum;

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {



};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  if (exp === 0) {
    return 1;
  }

  if (exp < 0) {
    var negExp = 0 - exp;
    return 1 / exponent(base, negExp);
  }

  return base * exponent(base, exp - 1);

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

  if ( n === 1 ) {
    return true;
  }

  if (n > 1) {
    return powerOfTwo(n/2);
  }

  return false;
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  /*var str = '';
  for (var i = 0; i <= string.length - 1; i ++) {
    str += string[string.length - 1 - i];
  }
  return str;
  */

  var str = '';

  if (string.length === 1) {
    return string;
  }
  var lilString = string.substring(1,string.length);
  str = reverse(lilString) + string[0];

  return str;

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.split(' ').join('').toLowerCase();

  if (string.length <= 2) {
    return string[0] == string[string.length - 1];
  }

  return ( string[0] === string[string.length - 1] ) && palindrome(string.substring(1, string.length - 1));

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === y) {
    return 0;
  }
  if (x < y) {
    return x;
  }
  if (x > y) {
    return modulo(x - y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  if (y === 0) {
    return 0;
  }
  if (y === 0) {
    return x;
  }
  return x + multiply(x, y - 1);

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

  if (y === 0) {
    return NaN;
  }
  if (x === y) {
    return 1;
  }
  if (x < y) {
    return 0;
  }
  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  return gcd(y, x%y);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  var result = true;

  var inner = function(first, second) {
    if (first[0] !== second[0]) {
      result = false;
    }
    if (first.length > 1 || second.length > 1) {
      result = compareStr(first.substring(1, first.length), second.substring(1, second.length));
    }
  }
  inner(str1, str2);
  return result;

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {

  var result = []

  var inner = function(string) {
    result.push(string[0]);
    if (string.length > 1) {
      result = result.concat(createArray(string.substring(1, string.length)));
    }
  }
  inner(str);
  return result;

 };

// 17. Reverse the order of an array
var reverseArr = function(array) {

  // edge case
  if (array.length === 0) {
    // array of length 0
    return [];
  }

  // base case array length one
  if (array.length === 1) {
    // return this array
    return array;
  }


  // recursion case
  if (array.length > 1) {
    // conditions array length greater than 1
    var arr = array.slice(1, array.length);
    // push the first element of current array
    var result = reverseArr(arr);
    result.push(array[0]);
    // onto the reversed version of the array starting at current
    // array index 1
    return result;
  }


};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length <= 0) {
    return [];
  }
  if (length === 1) {
    return [value];
  }
  if (length > 1) {
    var result = buildList(value, length - 1);
    result.push(value);
    return result;
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

  // count var
  var count = 0;

  for (var k in obj) {
    if (k === key) {
      count += 1;
    }
    var val = obj[k];
    if (typeof obj[k] === 'object') {
      count += countKeysInObj(val, key);
    }

  }

  // iterate through keys
    // base case obj.key is a primitive
      // add to count
    // add countKeysInObj(obj.key)


  // return count
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {

  // count var
  var count = 0;

  for (var k in obj) {
    if (obj[k] === value) {
      count += 1;
    }
    var val = obj[k];
    if (typeof obj[k] === 'object') {
      count += countValuesInObj(val, value);
    }

  }

  // iterate through keys
    // base case obj.key is a primitive
      // add to count
    // add countKeysInObj(obj.key)


  // return count
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  for (var k in obj) {
    if (k === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    var val = obj[k];
    if (typeof val === 'object') {
      replaceKeysInObj(val, oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  // make result array
  var result = [0];

  // edge case n = 0 or negative
  if (n < 1) {
    return null;
  }
    // return null

  // base case = 1
  if (n === 1) {
    return [0, 1];
  }
  if (n >= 2) {
    var fibsBelow = fibonacci(n - 1);
    fibsBelow.push(fibsBelow[fibsBelow.length - 1] + fibsBelow[fibsBelow.length - 2]);
    return fibsBelow;
    // push 1 onto array
  }

  // recursive case > 1
    //

  // return result array
  return result;

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
