const person = {
  name: 'John',
  age: '32',
  address: 'Balaju',
  hobbies: ['sing', 'dance', 'coding'],
};
const car = {
  brand: 'Hyundai',
  name: 'Creta',
  model: 2024,
  price: 6000000,
};
const bank = {
  name: 'Citizens Bank',
  branch: 'Durbarmarg',
};
const house = {
  number: 4460,
  location: 'new road',
};
const laptop = {
  brand: 'Acer',
  name: 'Predator',
  model: 'Neo 16',
};
const rocket = {
  name: 'rocket',
};

// CUD//
//Create: adding new key value in person
person.job = 'developer';
//Update: updates old value
person.age = '22';
//Delete: removes key from object
delete person.hobbies;

console.log(person);
console.log(car);
console.log(house);
console.log(laptop);

///////////////////////////////////////////////////
//SPREAD OPERATOR(...)
const colors = ['red', 'blue', 'green'];
const newColors = ['golden', 'purple', ...colors];
console.log(newColors);

//
console.log({ ...person, name: 'shyam', gender: 'male' });
