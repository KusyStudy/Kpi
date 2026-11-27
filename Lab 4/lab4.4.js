'use strict';

function sum(...args) {
    let total = 0;
    let index = 0;

    // do..while виконається хоча б раз, тому порожній виклик обробляємо окремо
    if (args.length === 0) {
        return total;
    }

    do {
        total += args[index];
        index++;
    } while (index < args.length);

    return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(0));              // 0
console.log(sum());               // 0
console.log(sum(1, -1, 1));       // 1
console.log(sum(10, -1, -1, -1)); // 7
