'use strict';

const removeElements = (array, ...items) => {
    let last = 0;
    for (let i = 0; i < array.length; i++) {
        if (!items.includes(array[i])) {
            array[last] = array[i];
            last++;
        }
    }
    array.length = last;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElements(numbers, 5, 1, 6);
console.log(numbers);

const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(cities, 'Lima', 'Berlin', 'Kiev');
console.log(cities);
