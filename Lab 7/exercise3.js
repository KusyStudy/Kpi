'use strict';

const unique = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
};

const numbers = unique([2, 1, 1, 3, 2]);
console.log(numbers);

const sides = unique(['top', 'bottom', 'top', 'left']);
console.log(sides);
