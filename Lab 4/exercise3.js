'use strict';

function sum(...args) {
    let total = 0;
    let index = 0;

    while (index < args.length) {
        total += args[index];
        index++;
    }

    return total;
}

console.log(sum(1, 2, 3));       
console.log(sum(0));              
console.log(sum());               
console.log(sum(1, -1, 1));       
console.log(sum(10, -1, -1, -1)); 
