// const person = {
//   name: 'John',
//   age: '32',
//   address: 'Balaju',
//   hobbies: ['sing', 'dance', 'coding'],
// };
// const car = {
//   brand: 'Hyundai',
//   name: 'Creta',
//   model: 2024,
//   price: 6000000,
// };
// const bank = {
//   name: 'Citizens Bank',
//   branch: 'Durbarmarg',
// };
// const house = {
//   number: 4460,
//   location: 'new road',
// };
// const laptop = {
//   brand: 'Acer',
//   name: 'Predator',
//   model: 'Neo 16',
// };
// const rocket = {
//   name: 'rocket',
// };

// // CUD//
// //Create: adding new key value in person
// person.job = 'developer';
// //Update: updates old value
// person.age = '22';
// //Delete: removes key from object
// delete person.hobbies;

// console.log(person);
// console.log(car);
// console.log(house);
// console.log(laptop);

// ///////////////////////////////////////////////////
// //SPREAD OPERATOR(...)
// const colors = ['red', 'blue', 'green'];
// const newColors = ['golden', 'purple', ...colors];
// console.log(newColors);
// console.log({ ...person, name: 'shyam', gender: 'male' });

// ///////////////////////////////////////////////////////
// // mutable and immutable
// const pers = 'shyam';
// pers[0] = 99;
// console.log(pers); // unchanges(immutable)

// const nums = [11, 22, 33, 44, 55, 66];
// nums[0] = 99;
// console.log(nums); //changes 11 to 99(mutable)

// ////////////////////////////////////////
// // function constructor: created multiple object.
// //this keyword - reference to an object
// const user1 = {
//   name: 'ram',
//   age: 70,
// };
// const user2 = {
//   name: 'shyam',
//   age: 70,
// };
// const user3 = {
//   name: 'shyam',
//   age: 70,
// };

const person = {
  first: 'ram',
  last: 'sharma',
  addres: 'new road',
  age: 90,
  getFullName: function () {
    console.log(this.first + this.last);
  },
};
