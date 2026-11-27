'use strict';

const removeElement = (array, item) => {
    const position = array.indexOf(item);
    if (position >= 0) {
        array.splice(position, 1);
    }
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElement(numbers, 5);
console.log(numbers);

const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(cities, 'Lima');
removeElement(cities, 'Berlin');
console.log(cities);
