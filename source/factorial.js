'use strict';

/**
 * Итеративная функция для вычисления факториала числа n
 * @param {number} n - неотрицательное целое число
 * @throws {Error} Если n отрицательное или не целое число
 * @returns {number} Факториал числа n
 */

const factorial = n => {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('Факториал определен только для целых неотрицательных чисел');
    }
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};
