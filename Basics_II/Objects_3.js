const { name : nameOfPerson , age } = {
    name : "Nikunj",
    age : 22
}

console.log(nameOfPerson, age);

const j = {
    "name" : "Nikunj"
}

//console.log(JSON.parse(JSON.stringify(j)));

fetch('https://api.github.com/users/NikunjSinghania').then((res) => {
    res.json().then((d) => {
        console.log(d);
    })
})