'use strict';

const array = () => {
    const data = [];

    const get = (index) => data[index];

    get.push = (value) => data.push(value);

    get.pop = () => data.pop();

    return get;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
