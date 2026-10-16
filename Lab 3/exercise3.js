'use strict';

const ipToInt = (ip = '192.168.1.10') => {
    return ip
        .split('.')
        .map(Number)
        .reduce((sum, part, i) => {
            const shift = 8 * (3 - i);
            return sum + (part << shift);
        }, 0);
};

console.log(ipToInt());
console.log(ipToInt('10.0.0.1')); 
console.log(ipToInt('192.168.1.10'));
console.log(ipToInt('165.225.133.150'));
console.log(ipToInt('0.0.0.0'));
console.log(ipToInt('8.8.8.8'));
