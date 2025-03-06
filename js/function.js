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

const numbers = [11, 22, 33, 44, 55, 66, 77];
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

const oddEven = numbers.filter((a) => {
  if (a % 2 === 0) {
    console.log(a, 'even numbers');
    return true;
  } else {
    console.log(a, 'odd numbers');
    return false;
  }
});
console.log(oddEven);

// // find
// const num1 = numbers.find((a)=>{
//     return a>77
// })
// console.log(num1)