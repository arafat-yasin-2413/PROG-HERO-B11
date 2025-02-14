const friends = ["Elon",'Bill','Warren','Bezos'];

/**
 * for 
 * for or (array)
 * while 
 * do while
 * for in (object)
 */

for (let i = 0; i<friends.length; i++) {
    console.log(i,': ',friends[i]);
}

console.log();

let j = 0;
while(j<friends.length) {
    console.log(j,': ',friends[j]);
    j++;
}

console.log();

for (const el of friends) {
    console.log(el);
}