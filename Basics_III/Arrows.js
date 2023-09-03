// console.log(this);
// let a = 100
// {
//     let a = 10

//     console.log(this.a);
// }

// this.a = 1313

// let obj = {
//     name : 'Nikunj',
//     msg : function() {
//         console.log(this);
//         // return `${this.name} Welcome`
//     },
// }

// console.log(obj.msg());

// obj.name = 'Hello'

// console.log(obj.msg());

// console.log(obj);

// function foo() {
//     let a = 100
//     console.log(this.a);
// }
// foo()

const foo = () => console.log(this)


//foo()


const gar = () =>  ({a : 12})

console.log(gar())