const nums = [10,20,30,40];

// console.log(nums);
// nums.reverse();

// console.log();

// console.log(nums);


reversedArray = [];
for(const element of nums) {
    reversedArray.unshift(element);
}

console.log(reversedArray);