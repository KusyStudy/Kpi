'use strict';

const ipToInt = (ip = '127.0.0.1') => {
    return ip
        .split('.') // Рядок розбиваємо на масив рядків
        .map(Number) // Рядки перетворюємо на числа
        .reduce((sum, part, i) => {
            const shift = 8 * (3 - i); // Для першого байта 24, далі 16, 8 і 0
            return sum + (part << shift);
        }, 0);
};

console.log(ipToInt()); //2130706433
console.log(ipToInt('10.0.0.1')); //167772161
console.log(ipToInt('192.168.1.10')); //-1062731510
console.log(ipToInt('165.225.133.150')); //-1511946858
console.log(ipToInt('0.0.0.0')); //0
console.log(ipToInt('8.8.8.8')); //134744072
