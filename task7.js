// Task 1: Destructuring  the `name` and `age` properties from the first object and print them:
console.log('');
const people = [
  { name: 'John', age: 28, city: 'New York' },
  { name: 'Jane', age: 32, city: 'Los Angeles' },
  { name: 'Tom', age: 25, city: 'Chicago' },
];
const userDetails = people.map(({ name, age }) => {
  return [name, age];
});
console.log('Name and Age: ', userDetails);
console.log('');

// Task 2: Destructure the `name` and `age` properties and If `age` is missing, assign it a default value of 30.

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob' },
  { name: 'Charlie', age: 28 },
];
const age = users.map(({ name, age = 30 }) => {
  return name + ' ' + age;
});
console.log('Assigning missing age: ', age);
console.log('');

// Task 3: Destructuring with Rest Operator
// destructure `name` and `age`, and collect the remaining properties into a variable called `otherDetails` for each object:
const employees = [
  { name: 'John', age: 30, department: 'Engineering', salary: 5000 },
  { name: 'Jane', age: 25, department: 'Marketing', salary: 4000 },
  { name: 'Tom', age: 35, department: 'Sales', salary: 5500 },
];
const eDetails = employees.map(({ name, age, ...otherDetails }) => ({
  primaryDetail: `${name} ${age}`,
  other: otherDetails,
}));
console.log('Name, Age and other Details:', eDetails);
console.log('');

// Task 4: Nested Destructuring
// destructure the `firstName` and `lastName` from the `name` object, and `age` from the object inside the array:

const students = [
  {
    name: { firstName: 'Alice', lastName: 'Johnson' },
    info: { age: 21, grade: 'A' },
  },
  {
    name: { firstName: 'Bob', lastName: 'Smith' },
    info: { age: 23, grade: 'B' },
  },
  {
    name: { firstName: 'Charlie', lastName: 'Brown' },
    info: { age: 22, grade: 'A' },
  },
];
const student = students.map(
  ({ name: { firstName, lastName }, info: { age } }) => {
    console.log(firstName, lastName, age);
    return firstName + lastName + age;
  }
);
console.log(student);
console.log('');

// Task 5: Destructuring to swap the `age` of the first two objects in the following array.
const peoples = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];
[peoples[0].age, peoples[1].age] = [peoples[1].age, peoples[0].age];
console.log(peoples);
console.log('');

// Task 6: Destructuring in Function Parameters that takes an array of objects, destructures the `name` and `age` properties from each object, and logs them to the console.
const user = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const getUserDetails = (user) => {
  user.forEach(({ name, age }) => {
    console.log(`Name: ${name} Age: ${age}`);
  });
};
getUserDetails(user);
//Async promises
