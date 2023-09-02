const obj = {
    name : 'Nikunj'
}

// console.log(obj);

// SINGLETON
//Object.create()

// OBJECT LITERALS

const mySym = Symbol('123')

const jsUser = {
    name :  'NIkunj',
    true : 'YES',
    2 : true,
    [3] : 'Check',
    mySym,
    [mySym] :  "SYMBOL",
    call : () => {
        console.log('Are U THERE!!');
        return
    }
}


// console.log(mySym);
// console.log(jsUser['2']);
// console.log(jsUser['name']);

// console.log(jsUser.name);

// console.log(jsUser[3]);

// console.log(jsUser.mySym);

// console.log(jsUser);
// console.log(jsUser[mySym]);

jsUser.name = 'HELLO'

//Object.freeze(jsUser)
jsUser.name = 'CHECK'

console.log(jsUser);

console.log(jsUser.call());

jsUser.foo = () =>{
    console.log(`I\'M T ${this.name}`);
}

console.log(jsUser.foo);
console.log(jsUser.call);