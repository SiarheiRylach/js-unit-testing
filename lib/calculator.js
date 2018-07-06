'use strict';

class Calculator {
    add(...elems) {
       return elems.reduce((sum, current) => sum + current);
    }

    multiply(...elems) {
        return elems.reduce((sum, current) => sum * current);
    }
}

module.exports = Calculator;