person3 = {
    name : 'Fahim',
    age : 22,
    country : 'USA'
};

console.log(person3['name']);

for (let key in person3) {
    console.log(` key : ${key}, value : ${person3[  key]}`);
}

console.log();


for (let key of Object.entries(person3)) {
    console.log(key);
}


for (let [key,value] of Object.entries(person3)) {
    console.log(`
        key : ${key}, value : ${value}`);
}