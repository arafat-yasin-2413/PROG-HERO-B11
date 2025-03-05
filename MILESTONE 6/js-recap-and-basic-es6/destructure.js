const friends = ['abul', 'babul', 'kabul'];

// console.log(...friends);



const newArray = [...friends, 'shamim'];

// console.log(...newArray);

const [a,b,c,d] = newArray;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);



const person = {
    name:'shamim',
    age : 22,
    status: 'not found'
};

const {name,age,status} = person;

// console.log(name);
// console.log(age);
// console.log(status);