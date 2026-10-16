'use strict';

const inc = (num) => {
  num.n++;
};

const obj = { n: 9 };
inc(obj);

console.dir(obj);
