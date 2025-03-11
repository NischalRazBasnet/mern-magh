// 1. Write a function `helloWorld()` that prints `"Hello, World!"`.
function helloWorld() {
  console.log('Hello World!');
}
helloWorld();

// 2. Write a function `add(a, b)` that returns the sum of `a` and `b`.
function addTwoNum(a, b) {
  return a + b;
}
console.log('Sum = ', addTwoNum(190, 200));

// 3. Write a function `multiply(a, b)` that returns the product of `a` and `b`.
function mulTwoNum(a, b) {
  return a * b;
}
console.log('Mul = ', mulTwoNum(5, 200));

// 4. Write a function `isEven(num)` that returns `true` if `num` is even, otherwise `false`.
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('Is Even: ', isEven(4));
console.log('Is Even: ', isEven(5));

// 5. Create a function `maxOfTwo(a, b)` that returns the larger number.
function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return 'Equal';
  }
}
console.log('Largest Number: ', maxOfTwo(5, 8));

// 6. Write a function `celsiusToFahrenheit(celsius)` that converts Celsius to Fahrenheit.
function toFahren(cel) {
  return cel * (9 / 5) + 32;
}
console.log(toFahren(32), 'F');

// 7. Write a function `stringLength(str)` that returns the length of `str`.
function stringLength(str) {
  return str.trim().length;
}
console.log(stringLength('Hello Nischal'));

// 8. Create a function that checks if `word` exists in `sentence`.
function containsWord(sentence, word) {
  return sentence.includes(word);
}
console.log(containsWord('Checks if the word exists in this sentence', 'if'));
console.log(containsWord('Checks if the word exists in this sentence', 'task'));

// 9. Return First Character of a String
function str(sentence) {
  return sentence.charAt(0);
}
console.log(str('Character'));

// 10. Create a function that returns the string repeated `times` times.
function repeatString(str, times) {
  return str.repeat(times);
}
console.log(repeatString('repetition ', 2));

// 11. Function that returns the factorial of `n`.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// 12. Reverse the given string.
function reverseStr(str) {
  return str.split(' ').reverse().join(' ');
}
console.log('This String is Reversed =', reverseStr('This String is Reversed'));

// 13. Write a function that returns `true` if `n` is prime, otherwise `false`.
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log('Is Prime: ', isPrime(5));
console.log('Is Prime: ', isPrime(15));

// 14. Count Vowels in a String
function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels.length;
}
console.log(
  countVowels('This Function counts the vowel letters from this string')
);

// 15. **Find the Largest Number in an Array**
const numbers = [11, 22, 33, 44, 55];
function largestNumber(arr) {
  max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largestNumber(numbers));

// 16. Remove Duplicate from an array
const names = ['ram', 'shayam', 'hari', 'ram', 'sita'];
function removeDup(arr) {
  return [...new Set(arr)];
}
console.log(removeDup(names));

// 17. Find the Sum of All Numbers in an Array
const nums = [11, 22, 33, 44, 55, 66];
function sumArray(arr) {
  sum = arr[0];
  for (i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray(nums));

// 18. Check if a String is a Palindrome
function isPalindrome(str) {
  const checker = str.split('').reverse().join('');
  if (checker === str) {
    return `"${str}" is Palindrome`;
  } else {
    return `"${str}" is not Palindrome`;
  }
}
console.log(isPalindrome('eye'));
console.log(isPalindrome('eyes'));

// 19. Merge Two Arrays
let users = ['ram', 'shyam', 'hari', 'sita', 'gita'];
let newUsers = ['ramesh', 'suresh', 'rita', 'tom'];
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays(users, newUsers));

// 20. Find the Second Largest Number in an Array
const n = [11, 22, 33, 4, 44, 77];
function secondLargest(arr) {
  const sortedArr = [...new Set(arr)].sort((a, b) => b - a);
  return sortedArr.length > 1 ? sortedArr[1] : null;
}
console.log(secondLargest(n));
