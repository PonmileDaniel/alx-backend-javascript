const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of two integers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should round the second number and return the correct sum', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should round the first number and return the correct sum', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should round both numbers and return the correct sum', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
        assert.strictEqual(calculateNumber(-1.5, -3.5), -6);
    });

    it('should handle edge cases (e.g., 0)', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(0, 3.7), 4);
        assert.strictEqual(calculateNumber(1.5, 0), 2);
    });
});
