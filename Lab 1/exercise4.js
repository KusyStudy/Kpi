'use strict';

const arr = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  12, true, 'ivanka', 'football', 'gym', 'Billy Herington',
  true, 2131, 78.3, undefined, null, { name: 'ben' }, [1, 2, 3],
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
