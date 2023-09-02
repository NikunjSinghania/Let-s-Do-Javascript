// const d = new Date()

// console.log(typeof d);

// console.log( d.toString());
// console.log( d.toLocaleDateString());
// console.log( d.toISOString());
// console.log( d.toLocaleString());

// let myD = new Date(2023, 0, 23, 5, 3)

// console.log(myD.toLocaleString());


let cd = new Date('2023-01-14')
// console.log(cd.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(cd.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);

// console.log(newDate.getMonth());


console.log(newDate.toLocaleString('IST', {
    weekday : "long",
    minute : "numeric"
}));