// let firstName = 'Nischal';
// let lastName = 'Basnet';
// const age = 22;
// let address = 'phutung,kathmandu';
// let Qualfication = 'Bachelors';
// const isCoding = true;

// console.log(firstName.charCodeAt(0));
// console.log(firstName.concat('Hello'));
// console.log(firstName.charAt(0));
// console.log(firstName.includes('Ni'));
// console.log(firstName.includes('ni'));
// console.log(firstName.length);
// console.log(firstName.trim().length);
// console.log(firstName.slice(4));
// console.log(firstName.slice(0, 4));
// console.log(firstName.repeat(3));
// console.log(firstName.substring(3));
// console.log(firstName.substring(0, 6));

// let a= 10;
// let b= 5;
// sum = a+b;
// console.log(sum)

// const personName = 'john';
// const address = 'new road';
// const isMarried = false;
// const age = 22;

// const number = '100';
// const num = 100;
// const point = '9.9';
// const m = 'hello';
// console.log(Number.isNaN(Number(num)));
// console.log(Number(number) + 100);
// console.log(Number(point) + 1);
// console.log(Number.parseInt(number));
// console.log(Number.parseInt(point));
// console.log(Number.parseFloat(point));
// console.log(Number.isInteger(number));
// console.log(Number.isInteger(num));
// console.log(Number.isInteger(point));

// console.log("his name is "+personName,"lives in "+address,"his age is "+age, "is he married "+isMarried)

// const wholeSentence = `Name:${personName.toUpperCase()} Age:${age} Address:${address} Is Married:${isMarried}`;

// console.log(wholeSentence);

// const person = {
//   name: 'John',
//   age: 22,
//   address: 'New Road',
// };
// const car = {
//   Brand: 'Jeep',
//   Model: 2024,
//   Type: 'Suv',
// };
// const house = {
//   Number: '404',
//   Location: 'New Road',
// };
// const mobile = {
//   name: 'Iphone',
//   Model: '16 Pro Max',
//   price: '2,00,000',
// };

// console.log(person);
// console.log(car);
// console.log(house);
// console.log(mobile);

// const rating = 7.645;

// console.log(Math.round(rating))
// console.log(Math.floor(rating))
// console.log(Math.ceil(rating))

// console.log(Math.PI);
// console.log(Math.cbrt(4));
// console.log(Math.sqrt(2));
// console.log(Math.pow(2, 3));
// console.log(Math.max(2, 3));
// console.log(Math.min(2, 3));

// const random = Math.random() * 1000+1;
// console.log(Math.floor(random));

// Task
// Exercise:1
const random = Math.random();
console.log('Random Number: '+ random);

// Exercise:2
const number = 12.7;
console.log('Floor: '+ Math.floor(number));

// Exercise:3
const num = 4.1;
console.log('Ceil: '+Math.ceil(num));

// Exercise:4
const maxNum = Math.random() * (100 - 1 + 1) + 1;
const minNum = Math.random() * (100 - 1 + 1) + 1;
console.log('Maximun Number: '+maxNum);
console.log('Minimum Number: '+minNum);

// Exercise:5
console.log('2 Power of 3 = '+Math.pow(2, 3));

// Exercise:6
const square = 49;
console.log('Square root of 49 = '+Math.sqrt(square));

// Exercise:7
console.log('Absolute value: '+Math.abs(-15))

// Exercise:8
console.log('Round of 6.4 = '+Math.round(6.4))
console.log('Round of 3.6 = '+Math.round(3.6))
console.log('Round of 8.2 = '+Math.round(8.2))

// Exercise:9
let deg = 30;
let rad = deg*Math.PI/180;
console.log('Sin Value: '+Math.sin(rad));
console.log('Cos Value: '+Math.cos(rad))

// Exercise:10
const r = 7;
let circumference = 2*Math.PI*r;
console.log('Circumference of circle with radius 7 = '+circumference)
