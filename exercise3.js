'use strict';

const arr = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  12, true, 'ivanka', 'football', 'gym', 'Billy Herington',
  true, 2131, 78.3, undefined, null, { name: 'ben' }, [1, 2, 3],
];

const types = {};

for (const element of arr) {
  const type = typeof element;
  const count = types[type] || 0;
  types[type] = count + 1;
}

console.dir(types);
