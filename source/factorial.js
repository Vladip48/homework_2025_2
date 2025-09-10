'use strict';

/**
 * Вычисляет факториал неотрицательного целого числа n.
 *
 * @param {number} n - Неотрицательное целое число, для которого вычисляется факториал.
 * @throws {Error} Выбрасывает ошибку если n отрицательное или не целое число.
 * @returns {number} Факториал числа n.
 *
 * @example
 * factorial(5); // Возвращает 120
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
