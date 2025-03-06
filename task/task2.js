const netSalary = 90000;
const netExpenses = 50000;
if (netSalary > netExpenses) {
  console.log(`your remaining balance: ${netSalary - netExpenses}`);
} else if (netExpenses > netSalary) {
  console.log(`your remaining balance: ${netExpenses - netSalary}`);
} else {
  console.log('Your balance remain same');
}
// Check if a number is even or odd
let n = 2;
if (n % 2 == 0) {
  console.log(`${n} is an even number.`);
} else {
  console.log(`${n} is an Odd number.`);
}

// Check if a number is positive, negative, or zero
let num = -2;
if (num < 0) {
  console.log(`${num} is a Negative number.`);
} else if (num > 0) {
  console.log(`${num} is a Positive number.`);
} else {
  console.log(`${num} is a Zero number.`);
}

// Check if a person is eligible to vote eligible to vote

let voter = 22;
if (voter < 18) {
  console.log('You are Not Eligible to Vote!!');
} else if (voter > 18) {
  console.log('Congratulations You can Vote!!');
}

// Find the greatest of two numbers
let a = 9;
let b = 90;
if (a > b) {
  console.log(`A: ${a} is a Greater than B: ${b}.`);
} else if (a === b) {
  console.log(`Both A and B are Equal.`);
} else {
  console.log(`B: ${b} is a Greater than A: ${a}.`);
}

// Find the greatest of three numbers
let num1 = 750;
let num2 = 75;
let num3 = 75;
if (num1 > num2 && num1 > num3) {
  console.log(`A: ${num1} is a Greater than B: ${num2} and C: ${num3}.`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`B: ${num2} is a Greater than A: ${num1} and C: ${num3}.`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`C: ${num3} is a Greater than A: ${num1} and B: ${num2}.`);
} else if (num1 === num2 && num2 === num3) {
  console.log(`All A, B and C are Equal.`);
} else {
  console.log(`Only one can have greatest value.`);
}

// Check if a character is a vowel or consonant
const letter = 'A';
const vowel = 'aeiou';
if (vowel.includes(letter.toLowerCase())) {
  console.log(`${letter} is a vowel`);
} else {
  console.log(`${letter} is a Consonant`);
}

// Check if a number is a multiple of 5
let mul = 2;
if (mul % 5 == 0) {
  console.log(`${mul} is Multiple of 5`);
} else {
  console.log(`${mul} is Not a multiple of 5`);
}

// Determine the grade based on marks
let grade = 99;
if (grade >= 90) {
  console.log("You got an 'A'");
} else if (grade < 90 && grade >= 80) {
  console.log("You got a 'B'");
} else if (grade < 80 && grade >= 70) {
  console.log("You got a 'C'");
} else if (grade < 70 && grade >= 60) {
  console.log("You got a 'D'");
} else if (grade < 60 && grade >= 0) {
  console.log('Failed');
} else {
  console.log('Invalid');
}

// Check if a year is a leap year
let yr = 2032;
if (yr % 4 === 0 || yr % 400 === 0) {
  console.log('Leap Year');
} else if (yr % 100 !== 0) {
  console.log('Not a Leap Year');
} else {
  console.log('Invalid year');
}

// Check if a person is an adult, teenager, or child**
//  Age ≥ 18 → Adult
//  Age 13-17 → Teenager
//  Age <13 → Child

let age = 19;
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13 && age < 18) {
  console.log('Teenager');
} else if (age > 0 && age < 13) {
  console.log('Child');
} else {
  console.log('Invalid');
}
