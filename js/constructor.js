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

// const person = {
//     first: 'ram',
//     last: 'sharma',
//     addres: 'new road',
//     age: 90,
//     getFullName: function () {
//       console.log(this.first + this.last);
//     },
//   };

function User(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new User('Nischal', 22);
const user2 = new User('Pritisha', 24);
console.log(user1);
console.log(user2);

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}
const car1 = new Car('Jeep', 9999999);
const car2 = new Car('Creta', 6000000);
console.log(car1);
console.log(car2);
