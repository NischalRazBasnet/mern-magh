// //primitive types: String number boolean undifined null

// //String
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

// const personName = 'john';
// const address = 'new road';
// const isMarried = false;
// const age = 22;

// console.log("his name is "+personName,"lives in "+address,"his age is "+age, "is he married "+isMarried)

// const wholeSentence = `Name:${personName.toUpperCase()} Age:${age} Address:${address} Is Married:${isMarried}`;

// console.log(wholeSentence);

// //object
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

//null vs undefined

// let empty; //js automatically assign as undefined
// let thisEmpty = null; //user intentionally setting value as empty eg.product out of stock

// let thisPerson = 'ram';
// let hisAge = 22;

// const emptyPerson = () => {
//   //uncalled function returns undefined
//   thisName = 'ram';
//   age = '22';
// };

// console.log(empty);
// console.log(thisEmpty);
// console.log(thisPerson);
// console.log(hisAge);
// emptyPerson();
// console.log(emptyPerson.age);

const btn = document.addEventListener('click', () => {
  alert('hello');
});
