const userData = [
  { id: 1, name: 'ram', gender: 'male', grade: 9 },
  { id: 2, name: 'shyam', gender: 'male', grade: 10 },
  { id: 3, name: 'sita', gender: 'female', grade: 11 },
  { id: 4, name: 'rita', gender: 'female', grade: 12 },
  { id: 5, name: 'gita', gender: 'female', grade: 12 },
];
// Task 1: Filter out Male Students
let femaleUser = userData.filter((user) => {
  return user.gender === 'female';
});
console.log(femaleUser);

// Task 2: Find Student by Name
let username = 'ram';
let findUser = userData.find((user) => {
  if (username === user.name) {
    return user.name;
  } else {
    console.log('user not found');
  }
});
console.log(findUser);

// Task 3: Count Gender
let MaleCount = userData.filter((user) => {
  if (user.gender === 'male') {
    return user.gender;
  }
});
console.log(`Male count: ${MaleCount.length}`);

let femaleCount = userData.filter((user) => {
  if (user.gender === 'female') {
    return user.gender;
  }
});
console.log(`Female count: ${femaleCount.length}`);
