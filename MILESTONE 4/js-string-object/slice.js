const address = "andorkilla";

const part = address.slice(2,5);
console.log(part);


console.log();

const sentence = 'I am a good and hardworking person';

console.log(sentence.split());
console.log();

console.log(sentence.split(''));
console.log();

console.log(sentence.split(' '));
console.log();

console.log(sentence.split('a'));
console.log();

console.log();
console.log();


const friendStr = "Alex,Bob,Chinku,Denver";
const friends = friendStr.split(',');
console.log(friends);
console.log();

console.log(friends.join(' | '));
console.log();

const realFriend = ['Alex', 'Bob', 'Chinku', 'Denver'];
console.log(realFriend.join('-'));
console.log();

console.log(realFriend.join());
console.log();