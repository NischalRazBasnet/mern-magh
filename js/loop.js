let i = 0;
// let
// let n = 0;

// //while loop
// while (i < 20) {
//   i++;
//   console.log(`helloworld${i}`);
// }

// while (i < 20) {
//   i++;
//   if (i % 2 === 0) {
//     console.log(`${i}`);
//   }
// }

// // //do while loop
// do {
//   n++;
//   console.log(`hello${n}`);
// } while (n < 20);

// //odd even using for loop
// let sumOdd = 0;
// let sumEven = 0;
// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     sumOdd += i;
//   } else if (i % 2 !== 0) {
//     sumEven += i;
//   }
// }
// console.log(sumOdd);
// console.log(sumEven);

// //Fizz Buzz
// for(let i=1;i<=15;i++){
//     if(i%3===0 && i%5===0){
//         console.log('Fizz Buzz')
//     }else if (i%3===0){
//         console.log("fizz")
//     }else if(i%5===0){
//         console.log("buzz")
//     }else{
//         console.log(`${i}`)
//     }
// }

// // continue and break
// for (let i = 1; i <= 20; i++) {
//   if (i < 5) {
//     continue;
//   }console.log(i)
// }

// //for of and for in
const numbers = [11, 22, 33, 44, 99, 120, 77];
// for(let i of numbers){
//     console.log(`${i}`)
// }

// let max =[0]
// for(let i of numbers){
//     if(i>max){
//         max = i;
//     }
// }
// console.log(max)
// console.log(numbers[0])

//adds at the last of array
numbers.push(100);

// removes last from array
numbers.pop();

//removes first from array
numbers.shift();

//adds at first of array
numbers.unshift(56);
console.log(numbers);

// // numberlength and includes
// const numlength = numbers.length;
// console.log(numlength);
// console.log(numbers.includes(56));

// // concat: add to array
// const n = numbers.concat(6, 7, 8);
// console.log(n);

// //slice (starts from 3 and slices from 5)
// const s = numbers.slice(3, 5);
// console.log(s);

// //splice
// const sp = numbers.splice(4,1)// removes 99 only (4)index number(1) removes only 99
// console.log(numbers)

// //join: joins array
// const persons = ['ram', 'shyam', 'hari', 'sita'];
// console.log(persons)
// console.log(persons.join())//display with comma
// console.log(persons.join(''))//joins as a single word
// console.log(persons.join(' '))//displays given value between each.