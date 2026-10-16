'use strict'
//ex 4
const range = (start, end) => {
    const answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
};
console.log(range(15, 30));

//ex 5
const rangeOdd = (start, end) => {
    const answer = [];
    let first = start;
    if (first % 2 === 0) {
        first++;
    }
    for (let i = first; i <= end; i += 2) {
        answer.push(i);
    }
    return answer;
};
console.log(rangeOdd(15, 30));
