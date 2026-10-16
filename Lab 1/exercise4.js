'use strict';

const arr = [
  false, 'apple', 42, 7, -15, true, true, 'code',
  7, false, 'kyiv', 'music', 8, 'Tony Stark',
  false, 999, 3.14, undefined, null, { name: 'max' }, [4, 5, 6],
];

const types = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const element of arr) {
  const type = typeof element;
  if (types[type] !== undefined) {
    types[type]++;
  }
}

console.dir(types);
