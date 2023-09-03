function foo() {
    console.log('FOO');
}

// for(let i=0;i<10;i++) {
//     foo()
// }


function sum (num1, num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2))
    console.log(num1 + num2);
}

sum(1,2)

// console.log(foo);

function ch(name) {
    if(!name) {
        console.log('GIVE A NAME');
        return
    }

    return `${name} THE NORTH REMEMBERS`
}

console.log(ch('Nikunj'))


function calc(...num) {
    return num;
}

console.log(calc(122,3,44,5,6,77))

console.log(calc({name : 'Nikunj'}, {name : 'Nikunj'}, {name : 'Nikunj'}));