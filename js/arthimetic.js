let a =100;
let b = 90;
let c = '90'
let d = 90
// console.log(a>b)
// console.log(a<b)
// console.log(c === d)
// console.log(c == d)
// console.log(a<=b)
// console.log(a>=b)
// console.log(a!==b)

// console.log(a==b || a<b || a>b || a===100);
// console.log(a!==b && a>b && b<a && a===100);

//Terinary operator
const some = a!==b && a>b && b<a && a===100;
console.log(some)

const val = a>b? 'milyo': 'milena';
console.log(val)

const age = 90;
const ageVal= age<=20 ? 'Junior' : age >=50 ? 'Senior' :'regular';
console.log(ageVal)