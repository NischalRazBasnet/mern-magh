//1. filter out all the numbers that are greater than 10 from an array
let numbers = [2, 12, 5, 18, 7, 20, 1];
let filterNum = numbers.filter((num) => {
  return num > 10;
});
console.log(filterNum);

//2. From an array of objects representing students, find the student whose age is 18.
let students = [
  { name: 'John', age: 17 },
  { name: 'Alice', age: 18 },
  { name: 'Bob', age: 16 },
];
let studentAge = students.find((student) => {
  return student.age === 18;
});
console.log(studentAge);

//3. create a new array where each number is doubled
let preNumbers = [1, 2, 3, 4, 5];
let doubleNumber = preNumbers.map((num) => {
  return num * 2;
});
console.log(doubleNumber);

//4. Given an array of strings, log each string in uppercase to the console.
let words = ['apple', 'banana', 'cherry'];
let capitalize = words.forEach((word) => {
  console.log(word.toUpperCase());
});

//5. Given an array of numbers, filter out the numbers greater than 5, double them, and log each result using `forEach()`.
let nums = [1, 3, 7, 9, 5, 2];
let filtered = nums.filter((num) => num < 5);
console.log(filtered);
let doubled = filtered.map((num) => num * 2);
console.log(doubled);
doubled.forEach((num) => {
  console.log(num);
});

//6. Given an array of objects, find the first object where the `age` is greater than 21, and then create a new array containing the names of all the students from the found object onward.
let studentDetail = [
  { name: 'John', age: 20 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 25 },
];
let age = studentDetail.find((student) => student.age > 21);
console.log(age);
let startIndex = studentDetail.indexOf(age);
let newArray = studentDetail.slice(startIndex).map((student) => {
  console.log(student.name);
});
