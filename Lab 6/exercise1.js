'use strict';

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('pipe: усі аргументи мають бути функціями');
        }
    }
    return x => fns.reduce((acc, fn) => fn(acc), x);
};

const f1 = pipe(inc, twice, cube);
console.log(f1(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

try {
    const f3 = pipe(inc, 7, cube);
    console.log(f3(5));
} catch (err) {
    console.log(err.message);
}
