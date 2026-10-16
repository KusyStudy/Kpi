'use strict';

const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(1, 15));
console.log(random(20, 70));
console.log(random(8));
