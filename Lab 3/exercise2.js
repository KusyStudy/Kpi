'use strict';

const generateKey = (length, characters) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        result += characters.charAt(index);
    }
    return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(21, characters);
console.log(key);
