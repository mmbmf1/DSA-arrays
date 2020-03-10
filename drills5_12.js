// 5. URLify a string
// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen

// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een

// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function urlify(str) {
  let newStr = str.split(" ").join("%20");
  console.log(newStr);
}

urlify("tauhida praveen");
urlify("www.thinkful.com /tauh ida parv een");

// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

const lessThanFive = arr => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(lessThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 7. Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

const maxSum = arr => {
  let sum = 0;
  let newSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > newSum) {
      newSum = sum;
    }
  }

  return newSum;
};

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// 8. Merge arrays
// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

const mergeArray = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// 9. Remove characters
// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

const removeChars = (str, remove) => {
  let removeStr = "";
  for (let i = 0; i < remove.length; i++) {
    removeStr += remove[i] + "|";
  }

  // console.log(removeStr);

  return str.replace(new RegExp(removeStr, "g"), "");
};

console.log(removeChars("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

// 10. Products
// Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

const products = arr => {
  function multiply(array) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
      sum = sum * array[i];
    }
    return sum;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let product = [...arr];
    product.splice(i, 1);
    newArr.push(multiply(product));
  }
  return newArr;
};

console.log(products([1, 3, 9, 4]));

// 11. 2D array
// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

// 12. String rotation
// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true
