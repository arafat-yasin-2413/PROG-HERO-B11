let [x,...y] = [4,3,2,6];

// console.log(...y);



const actor = {
    name : 'Ananto', 
    age : 25, 
    favFood : 'Rice', 
    favColor : 'White'
};

let {name,...b} = actor;

console.log(name);

console.log(b);

