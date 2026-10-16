'use strict';

const random = (min, max) => {
    // Якщо передано лише один аргумент, то це верхня межа, а мінімум дорівнює 0
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(1, 10));
console.log(random(20, 40));
console.log(random(8));
