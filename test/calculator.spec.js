'use strict';

let Calculator = require('../lib/calculator');

const addMethodVerificationSet = [
    [2, 3, 4, 9],
    [-2, 5, 3, 6],
    [-10, -15, -25, -50],
    [0, 0, 0, 0]
];

const multiplyMethodVerificationSet = [
    [2, 3, 4, 1, 24],
    [-2, 5, 3, 2, -60],
    [-1, -3, -4, -2, 24],
    [3, -5, 0, 3,  0]
];

describe('Calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new Calculator();
    });

    it('instance of class should have add()', () => {
        expect(instance.add).toBeDefined();
        expect(typeof instance.add).toBe('function');
    });

    it('instance of class should have multiply()', () => {
        expect(instance.multiply).toBeDefined();
        expect(typeof instance.multiply).toBe('function');
    });

    addMethodVerificationSet.forEach(numSet => {
        it('the method add() that summarize all parameters, which were sent to method and return result', () => {
            expect(instance.add(numSet[0], numSet[1], numSet[2])).toBe(numSet[3]);
        });
    });

    multiplyMethodVerificationSet.forEach(numSet => {
        it('the method multiply() should multiply all parameters, which were sent to method and return result', () => {
            expect(instance.multiply(numSet[0], numSet[1], numSet[2], numSet[3])).toBe(numSet[4]);
        });
    });

});