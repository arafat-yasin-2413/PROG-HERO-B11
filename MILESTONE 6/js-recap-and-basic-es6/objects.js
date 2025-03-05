const person2 = {
    name: 'Himel Khan',
    age : 24,
    country : 'BD'
};

// console.log(Object.keys(person2));


// console.log(Object.values(person2));

// console.log(Object.entries(person2));



Object.seal(person2);
Object.freeze(person2);
person2.status = 'not found';

person2.age = 44;

// console.log(person2);