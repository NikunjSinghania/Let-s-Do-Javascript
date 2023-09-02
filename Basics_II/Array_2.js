const arr = [1, 2, 3]
const arr_2 = [4, 5, 6]

arr.push(...arr_2)
// console.log(arr);

// console.log(arr.concat(arr_2));

// console.log(arr);

// console.log(...arr);


const c = [1, 2, 3, [4 ,5, [7, 8], 6]]

console.log(c.flat(Infinity));

console.log(Array.isArray("NIKUNJ"));

console.log(Array.from("NIKUNJ"));
console.log(Array.from({ name : 'Nikunj'}));

console.log(Array.of(1, 2, 3));