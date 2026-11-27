'use strict';

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const compose = (...fns) => {
    const handlers = [];

    const f = (x) => {
        try {
            return fns.reduceRight((acc, fn) => fn(acc), x);
        } catch (err) {
            for (const handler of handlers) {
                handler(err);
            }
            return undefined;
        }
    };

    f.on = (event, handler) => {
        if (event === 'error') {
            handlers.push(handler);
        }
        return f;
    };

    return f;
};

const f1 = compose(inc, twice, cube);
console.log(f1(5));

const f2 = compose(inc, 7, cube);
f2.on('error', err => console.log('помилка: ' + err.message));
console.log(f2(5));
