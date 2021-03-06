/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(number) {
  let array = new Array();
  let i = 0;
  while(i < number){
    array[i] = i+1;
    i+=1;
  }
  return array;
}

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneForLoop(number) {
  let array = new Array();
  for(let i = 0; i < number; i += 1){
    array[i] = i + 1;
  }
  return array;
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(number) {
  let array = new Array();
  let i = number;
  let j = 0;
  while(i > 0){
    array[j] = i;
    i -= 1;
    j += 1;
  }
  return array;
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(number) {
const array = new Array();
let j = 0;
for(let i = number; i > 0; i--){
  array[j] = i;
  j++;
}
return array;
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(max) {
  const evenOddArray = new Array();
  let i = 0;
  let j = 0;
  while(i <= max){
    evenOddArray[j] = i % 2 === 0 ? `${i} is even` : `${i} is odd`;
    i += 1;
    j += 1;
  }
  return evenOddArray;
}
 

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddForLoop(max) {
  const evenOddArray = new Array();
  let j= 0;
  for(let i = 0; i <= max; i += 1){
    evenOddArray[j] = i % 2 === 0 ? `${i} is even` : `${i} is odd`;
    j += 1;
  }
  return evenOddArray;
}

/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a while loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9WhileLoop(x) {
  const arr = new Array();
  let i = 0;
  while(i <= x){
    arr[i] = 9 * i;
    i += 1;
  }
  return arr;
}

/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a for loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9ForLoop(x) {
  const arr = new Array();
  for(let i = 0; i <= x; i += 1){
    arr[i] = 9 * i;
  }
  return arr;
}


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop() {
  const arr = new Array();
  let i = 5;
  let j = 0;
  while(i <= 100){
    arr[j] =  i;
    i += 10;
    j++;
  }
  return arr;
}



/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
  const arr = new Array();
  let j = 0;
  for(let i = 5; i <= 100; i += 10){
    arr[j] = i;
    j++;
  }
  return arr;
}
// Try refactoring the code above to increment your i by 10 and starting at 5.
// const arr = new Array();
// let j = 0;
// for(let i = 5; i <= 100; i += 10){
//   arr[j] = i;
//   j++;
// }
// return arr;


/**
 Without running/executing your code, how many times will the loop below run?
  Explain why.
 */
/*
let i = 5;

while (i > 3) {
    i += 1
}
*/

/**
 * // Write your explanation here!
 *  Infinite: Because 'i' will keep on getting bigger than 3 with each increment.
 */

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1() {
  const fizzBuzzArray = new Array();
    let j = 0;
    for(let i=1; i <=100; i++){
        if( i%3 === 0){
            fizzBuzzArray[j] = "Fizz";
        }else if( i%5 === 0){
            fizzBuzzArray[j] = "Buzz";
        }else{
            fizzBuzzArray[j] = i
        }
        j++;
    }
    return fizzBuzzArray;
}


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {
  const fizzBuzzArray = new Array();
  let j = 0;
  for(let i=1; i <=100; i++){
    if(i%3 === 0 && i%5 === 0){
      fizzBuzzArray[j] = "FizzBuzz";
      }else if( i%3 === 0){
      fizzBuzzArray[j] = "Fizz";
      }else if( i%5 === 0){
        fizzBuzzArray[j] = "Buzz";
      }else{
        fizzBuzzArray[j] = i
      }
      j++;
    }
  return fizzBuzzArray;
}

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(min, max) {
  let sumRange = 0;
  for(let i = min; i <= max; i++){
    sumRange += i; 
  }
  return sumRange;
}

/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd(min, max) {
  const oddArray = new Array();
  let i = max;
  let j = 0;
  while(i >= min){
    if(i%2 !== 0){
      oddArray[j] = i;
      j++;
    }
    i--;
  } 
  return oddArray;
}

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) {
  const arr = new Array();
  let i = min;
  let j = 0;
  while(i <= max){
    arr[j] = i;
    i += 2;
    j++;
  }
  return arr;
}

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a while loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsWhileLoop(elements, target) {
  let i = 0;
  while(i <= elements.length-1){
    if(elements[i] === target){
      return true;
    }
    i++;
  }
  return false;
}

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a for loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsForLoop(elements, target) {
  for(let i = 0; i <= elements.length-1; i++){
    if(elements[i] === target){
      return true;
    }
  }
  return false;
}
/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) {
  let i = 0;
  let count = 0;
  while(i <= elements.length-1){
    if(elements[i] === target){
      count++;
    }
      i++;
  }
  return count;
}
/**
 * Takes in an array and a target.
 * Determines the first index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method indexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} first index found.
 */
function firstIndexFound(elements, target) {
  for(let i = 0; i <= elements.length-1; i++){
    if(elements[i] === target){
      return i;
    }
  }
  return -1;
}
/**
 * Takes in an array and a target.
 * Determines the last index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method lastIndexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} last index found.
 */
function lastIndexFound(elements, target) {
  let i = 0;
  let lastIndex = null;
  while(i <= elements.length-1){
    if(elements[i] === target){
      lastIndex = i;
    }
    i++;
  }
  if(lastIndex !== null){
  return lastIndex;
  }else{
    return -1;
  }

}

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  for(let i = 0; i<= elements.length-1; i++){
    elements[i] *= i;
  }
  return elements;
}


/**
 * Takes in an array.
 * Returns a new array where each element is the cumulative sum so far.
 * Exp: Input [5, 2, 9] Output: [5, 7, 16] . 5 is the first element so added to 0.
 *  7 because 5 + 2 is 7
 * 16 because 7 + 9 is 16
 * @param {number[]} elements
 * @returns {number[]}
 */
function cumulativeSum(elements) {
  let cumulative = new Array();
  let i = 0;
  while(i <= elements.length -1){
    if(i === 0){
    cumulative.push(elements[i]);
    }else{
      cumulative.push(cumulative[i-1] + elements[i]);
    }
    i++;
  }
  return cumulative;
}
console.log(cumulativeSum([5,2,9]))



module.exports = {
  oneTillDoneWhileLoop,
  oneTillDoneForLoop,
  doneToZeroWhileLoop,
  doneToZeroForLoop,
  evenAndOddWhileLoop,
  evenAndOddForLoop,
  tillXTimes9WhileLoop,
  tillXTimes9ForLoop,
  endsWithFiveWhileLoop,
  endsWithFiveForLoop,
  fizzBuzzPart1,
  fizzBuzzPart2,
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
