"use strict"

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = num => num % 2 === 0;

const filterArray = (array, conditional) => {
    const filteredArray = [];

    for (let num of array) {
        const passedCheck = conditional(num); 
        if (passedCheck) {
            filteredArray.push(num);
        }
    }

    return filteredArray;
}

const people = [
    {
        name:'jh',
        age: 27
    },
    {
        name: 'nick',
        age: 26
    },
    {
        name: 'reece',
        age: 22
    }
]

const sum = (num1, num2) => {
    // debugger;
    return num1 + num2;
}

arr.reduce(sum);

const reduce = (reducer, initial, arr) =>{
    //shared stuff
    let acc = initial;

    for(let i=0; i<arr.length; i++) {
        //unique stuff in reducer() call
        acc = reducer(acc,arr[i]);
        // more shared stuff
    }
    return acc;
}

const sum2 = (accumulator, next) =>{
    return accumulator + next;;
} 

reduce(sum2, 0, [1,2,3]);
// Output : 6