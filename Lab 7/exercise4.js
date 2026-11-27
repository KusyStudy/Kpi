'use strict';

const difference = (array1, array2) => {
    return array1.filter((item) => !array2.includes(item));
};

const numbers1 = [7, -2, 10, 5, 0];
const numbers2 = [0, 10];
console.log(difference(numbers1, numbers2));

const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];
console.log(difference(cities1, cities2));
