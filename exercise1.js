'use strict';

const seq = (...args) => {
    const functions = [...args];

    const chain = (value) => {
        if (typeof value === 'number') {
            let result = value;
            for (let i = functions.length - 1; i >= 0; i--) {
                result = functions[i](result);
            }
            return result;
        }
        functions.push(value);
        return chain;
    };

    return chain;
};

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
