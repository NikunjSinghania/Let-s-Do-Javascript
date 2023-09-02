 const user = new Object()


const obj = {
    name : {
        firstname : 'Nikunj',
        lastname : 'Singhania'
    }
}

const obj_1 = {
    check : {
        firstname : 'Nikunj',
        lastname : 'Singhania'
    }
}

//  console.log(obj.name.firstname);

//  console.log(obj.nae?.firstname);

//  let arr1 = [1,3,4]
//  let arr2 = [...arr1]


//  arr1[0] = 12123
//  console.log(arr1, arr2);


let main = {...obj , ...obj_1}


let obj_3 = Object.assign({},  obj, obj_1)

let c = obj
// console.log(c);

obj.name = 'SINGHANIA'

// console.log(c);
// console.log(obj_3);

// console.log(main);


console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));

console.log(obj.hasOwnProperty('yyy'));

console.log(JSON.stringify(obj));