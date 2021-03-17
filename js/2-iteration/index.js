const arr = [27, 'test', true, { name: 'jh', age: 27 }];

console.log(arr);

console.log("4th element:", arr[3]);

// arr[4] = 4494;
arr.push(4494);

console.log("5th element:", arr[4]);

console.log("Ye olde loope");

for (let i = 0; i < arr.length; i++) {
    console.log('' + i + ':', arr[i]);
}

console.log("Enhanced for loop with 'in'");
// looping through the 'keys'
for (let index in arr) {
    console.log(index, arr[index]);
}

const me = { name: 'jh', age: 27, jobTitle: 'Trainer' };
me.jacket = 'QA Hoodie';

console.log("Enhanced for loop with 'in' - object");
for (let key in me) {
    console.log(key, '-', me[key]);
}

console.log("Enhanced for loop with 'of'");
// looping through 'values
for (let val of arr) {
    console.log(val);
}

let condition = true;

while (condition) {
    console.log("This is a while loop");
    condition = false;
}

do {
    console.log("This is a do-while loop");
} while (condition);


const meString = JSON.stringify(me);

console.log(meString);

const meAgain = JSON.parse(meString);

console.log(meAgain);