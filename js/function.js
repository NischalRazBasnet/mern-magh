// function welcome() {
//   console.log('Namaste');
// }
// welcome();

// const sum = () =>{
//     console.log(10+10)
// }
// sum()

// const tea = () =>{
//     console.log('black tea')
//     console.log('Milk tea')
// }
// tea()

// //function with parameter
// const greet =(personName)=>{
// console.log(`Hello ${personName}`)
// }
// greet('Ram')
// greet('Shyam')
// greet('Hari')
// greet('Sita')

// const id = (personName, age) => {
//   console.log(`My Name is ${personName} And I am ${age} Years old.`);
// };
// id('Nischal', 22);

// const sum =(a,b)=>{
//   console.log(a+b);
// }
// sum(11,12)

// //function callback
// const newA=(event, callback)=>{
//     if(event==='click'){

//       callback(hello());
//     }
//   }

//   const hello=()=>{
//     console.log("HELLO THIS IS A CALLBACK")
//   }

//   newA('click',()=>{
//     console.log("hello greetings")
//   })

//forEach, map, find,filter,reduce(loops function multiple times depending on arrays length )
//forEach
const personName = ['ram', 'shyam', 'hari', 'sita'];
// personName.forEach((capital)=>{
//     console.log(capital.toUpperCase())
// })

// const numbers = [11, 22, 33, 44, 55, 66, 77];
// let sum = 0;
// numbers.forEach((total) => {
//   sum += total;
// });
// console.log(`total${sum}`);

// //map
// personName.map((person) => {
//   return person;
// });
// console.log(personName.toUpperCase());

// filter;
// const num = numbers.filter((a)=>{
//     return a>77
// })
// console.log(num)

// const oddEven = numbers.filter((a) => {
//   if (a % 2 === 0) {
//     console.log(a, 'even numbers');
//     return true;
//   } else {
//     console.log(a, 'odd numbers');
//     return false;
//   }
// });
// console.log(oddEven);

// // find
// const num1 = numbers.find((a)=>{
//     return a>77
// })
// console.log(num1)

// // Reduce
// const numbers = [11, 22, 33, 44, 55];
// const red = numbers.reduce((a, b) => {
//   return a + b;
// });
// console.log(red);
// // find min
// const redMin = numbers.reduce((a, b) => {
//   //1st loop 11<22 ? 11 : 22
//   //2nd loop 11<33 ? 11 : 33
//   //3rd loop 11<44 ? 11 : 44
//   //4th loop 11<55 ? 11 : 55
//   return a < b ? a : b;
// });
// console.log(redMin);

// const redMax = numbers.reduce((a, b) => {
//   //1st loop 11>22 ? 11 : 22
//   //2nd loop 11>33 ? 22 : 33
//   //3rd loop 11>44 ? 33 : 44
//   //4th loop 11>55 ? 44 : 55
//   return a > b ? a : b;
// });
// console.log(redMax);

const addTwoNumbers = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return 'Please provide Valid numbers';
  }
};

const sum = addTwoNumbers(22, 24);
console.log(sum);

////////////////////////////////////////
//class
class Person {
  //properties
  userName = 'ram';
  age = 45;
  //methods
  reading() {}
  sleeping() {}
}
//primitive types String number boolean undefined null
// reference types Array , Object, Function

class User {
  constructor(personName, age) {
    this.personName = personName;
    this.age = age;
  }
  //methods
  reading() {
    console.log(`${this.personName} is reading a book`);
  }
  sleeping() {
    console.log(`${this.personName} is sleeping`);
  }

  get someName() {
    return 'hello jee';
  }

  set setVal(val) {
    this.personName = val;
  }
}

class A extends User {
  constructor(personName, age) {
    super(personName, age);
  }
}
const userA = new A('rita', 90);

userA.sleeping();

const user1 = new User('shyam', 190);
user1.setVal = 'rita';
console.log(user1.personName);

//////////////////////////////////////
//Destructing
const person = {
  name: 'ram',
  age: 20,
  address: 'balaju',
  habits: ['sing', 'dance'],
  some: {
    add: {
      gio: [{ fi: 99 }],
    },
  },
};

const {
  name,
  age,
  address,
  habits: [x, y],
  some: {
    add: {
      gio: [{ fi }],
    },
  },
} = person;
console.log(name, age, address, x, fi);

///////////////////////////////////////////
const posts = [
  { id: 1, name: 'ram', age: 90 },
  { id: 2, name: 'shyam', age: 70 },
  { id: 3, name: 'rita', age: 60 },
  { id: 4, name: 'hari', age: 50 },
];
const names = posts.map(({ id, name, age }) => {
  return id, name;
});
console.log(names);
