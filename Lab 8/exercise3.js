'use strict';

const hasType = (value, type) => {
    return value !== null && value !== undefined && value.constructor === type;
};

const contract = (fn, ...types) => {
    const resultType = types.pop();

    return (...args) => {
        for (let i = 0; i < types.length; i++) {
            if (!hasType(args[i], types[i])) {
                throw new TypeError(
                    'Аргумент ' + (i + 1) + ' має бути типу ' + types[i].name
                );
            }
        }

        const result = fn(...args);

        if (!hasType(result, resultType)) {
            throw new TypeError('Результат має бути типу ' + resultType.name);
        }

        return result;
    };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!'));

try {
    addNumbers(2, '3');
} catch (err) {
    console.log(err.message);
}

try {
    contract(add, Number, Number, String)(2, 3);
} catch (err) {
    console.log(err.message);
}
