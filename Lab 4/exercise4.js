'use strict';

function sum(...args) {
    let total = 0;
    let index = 0;

    if (args.length === 0) {
        return total;
    }

    do {
        total += args[index];
        index++;
    } while (index < args.length);

    return total;
}

console.log(sum(1, 2, 3));      
console.log(sum(0));           
console.log(sum());             
console.log(sum(1, -1, 1));       
console.log(sum(10, -1, -1, -1)); 
