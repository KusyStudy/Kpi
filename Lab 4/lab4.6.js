'use strict';

function max(matrix) {
    let result = -Infinity;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > result) {
                result = matrix[i][j];
            }
        }
    }

    return result;
}

const m = max([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

console.log(m); // 9
