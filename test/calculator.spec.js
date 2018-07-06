'use strict';

let Calculator = require('../lib/calculator');

const addMethodVerificationSet = [
    [2, 3, 4, 9],
    [-2, 5, 3, 6],
    [-10, -15, -25, -50],
    [0, 0, 0, 0]
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
        it('instance of class should have add() that summarize all parameters, which were sent to method and return result', () => {
            expect(instance.add(numSet[0], numSet[1], numSet[2])).toBe(numSet[3]);
        });
    });


    it('the method multiply() should multiply all parameters, which were sent to method and return result', () => {
        expect(instance.multiply(5, 10, 3)).toBe(150);
    });

});