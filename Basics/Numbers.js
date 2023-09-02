const score = 100

const num = new Number(400)

console.log(score, num);

console.log(score.toString(), num.toString());
console.log(num.toFixed(2));

const otherNumber = 23.543425

console.log(otherNumber.toPrecision(2));

const hundred = 1000000

console.log(hundred.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);


console.log(Math);
console.log(Math.abs(-7812));

console.log(Math.sqrt(9));

console.log(Math.round(4.4));

console.log(Math.ceil(4.1));
console.log(Math.floor(4.6));

console.log(Math.min(2, 3, 4, 5));
console.log(Math.max(5,2,7,12,7));

console.log(Math.floor(Math.random() * 10) + 1);

const min = 40
const max = 100

console.log(Math.floor((Math.random() * (max - min)) + 1) + (min));