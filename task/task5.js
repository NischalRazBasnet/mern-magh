const students = [
  { id: 1, name: 'Ram', gender: 'male', grade: 9 },
  { id: 2, name: 'Shyam', gender: 'male', grade: 10 },
  { id: 3, name: 'Sita', gender: 'female', grade: 11 },
  { id: 4, name: 'Rita', gender: 'female', grade: 12 },
  { id: 5, name: 'Hari', gender: 'male', grade: 8 },
  { id: 6, name: 'Gita', gender: 'female', grade: 7 },
];

// 1. Identify the student with the highest grade.
let highestGrade = students.reduce((low, high) => {
  return low.grade < high.grade ? high : low;
});
console.log('Highest Grade: ', highestGrade);

// 2. Convert the array into an object grouping students by gender.
let maleStudents = students.filter((student) => {
  if (student.gender === 'male') {
    return student.gender;
  }
});
console.log('Male Students: ', maleStudents);
let femaleStudents = students.filter((student) => {
  if (student.gender === 'female') {
    return student.gender;
  }
});
console.log('Female Students: ', femaleStudents);

// 3. Compute the average grade of all students.
let totalGrade = 0;
students.forEach((student) => {
  totalGrade += student.grade;
  return totalGrade;
});
console.log('Average Grade: ', totalGrade / students.length);

// 4. Write a function to add a new student to the array.
let newStudent = [
  {
    id: 7,
    name: 'John',
    gender: 'male',
    grade: 9,
  },
];
console.log(...students, newStudent);
console.log();

// 5. Implement a function that removes a student based on their `id`.
let studentId = 4;
let IndexId = students.findIndex((student) => student.id === studentId);
if (IndexId !== -1) {
  students.splice(IndexId, 1);
  console.log(`Succesfully Deleted Student Id: ${studentId}`);
} else {
  console.log(`Student Id: ${studentId} doesnot exist`);
}
console.log('Students: ', students);
console.log();

// 6. Update the grade of a student when given their name.
let username = 'Ram';
let grade = 11;
let studentName = students.filter((student) => {
  if (username === student.name) {
    return student;
  }
});
let editGrade = studentName.map((student) => {
  return (student.grade = grade);
});
console.log(`Student = ${username}`);
console.log(`Change Grade to: ${grade}`);
console.log('Students: ', students);

// 7. Assume a passing grade is `10` or higher, return `true` if all students passed.
let isEveryonePass = students.every((student) => student.grade >= 10);
console.log('Everyone Pass: ', isEveryonePass);

// 8. Return all students who belong to a given grade.
let givenGrade = 11;
let sameGrade = students.filter((student) => {
  if (student.grade === givenGrade) {
    return student;
  }
});
if (sameGrade.length > 1) {
  console.log(`These Students Belong to grade: ${givenGrade}`);
} else if (sameGrade.length === 1) {
  console.log(`This Student Belong to grade: ${givenGrade}`);
} else {
  console.log(`Grade: ${givenGrade} is Empty`);
}
console.log(sameGrade);

// 9. Sort the array in ascending order based on students’ names.
let aToZ = students.sort((a, b) => a.name.localeCompare(b.name));
console.log(aToZ);
console.log('');

// 10. Transform the array into an object where the `id` is the key.
let transform = students.reduce((id, student) => {
  id[student.id] = student;
  return id;
}, {});

console.log(transform);
